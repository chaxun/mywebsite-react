import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as acm from "@aws-cdk/aws-certificatemanager";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as deploy from "@aws-cdk/aws-s3-deployment";

export class Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id, {
      env: {
        account: process.env.AWS_ACCOUNT,
        region: process.env.AWS_REGION,
      },
    });

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      bucketName: process.env.WWW_DOMAIN_NAME,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      // websiteIndexDocument: "index.html",
      // websiteErrorDocument: "index.html",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const siteCertificate = new acm.Certificate(this, "WebCert", {
      domainName: process.env.WWW_DOMAIN_NAME,
      subjectAlternativeNames: [process.env.DOMAIN_NAME],
      validation: acm.CertificateValidation.fromDns(),
    });

    const viewerCertificate = cloudfront.ViewerCertificate.fromAcmCertificate(
      siteCertificate,
      {
        aliases: [process.env.WWW_DOMAIN_NAME],
        securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        sslMethod: cloudfront.SSLMethod.SNI,
      }
    );

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "MyWebsiteOriginAccessIdentity",
      {
        comment: "MyWebsite",
      }
    );

    const customErrorResponseProperty1: cloudfront.CfnDistribution.CustomErrorResponseProperty =
      {
        errorCode: 400,
        responseCode: 200,
        responsePagePath: "/index.html",
      };

    const customErrorResponseProperty2: cloudfront.CfnDistribution.CustomErrorResponseProperty =
      {
        errorCode: 403,
        responseCode: 200,
        responsePagePath: "/index.html",
      };

    const siteDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "SiteDistribution",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: siteBucket,
              originAccessIdentity: originAccessIdentity,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
              },
            ],
          },
        ],
        viewerCertificate: viewerCertificate,
        errorConfigurations: [
          customErrorResponseProperty1,
          customErrorResponseProperty2,
        ],
      }
    );

    new deploy.BucketDeployment(this, "Deployment", {
      sources: [deploy.Source.asset("./build")],
      destinationBucket: siteBucket,
      distribution: siteDistribution,
      distributionPaths: ["/*"],
    });
  }
}
