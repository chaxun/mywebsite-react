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
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const siteCertificate = new acm.Certificate(this, "WebCert", {
      domainName: process.env.WWW_DOMAIN_NAME,
      subjectAlternativeNames: [process.env.DOMAIN_NAME],
      validation: acm.CertificateValidation.fromDns(),
    });

    const customErrorResponseProperty: cloudfront.CfnDistribution.CustomErrorResponseProperty =
      {
        errorCode: 400,
        responseCode: 200,
        responsePagePath: "/index.html",
      };

    const siteDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "SiteDistribution",
      {
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          siteCertificate,
          {
            aliases: [process.env.WWW_DOMAIN_NAME],
            securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
            sslMethod: cloudfront.SSLMethod.SNI,
          }
        ),
        originConfigs: [
          {
            customOriginSource: {
              domainName: siteBucket.bucketWebsiteDomainName,
              originProtocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
              },
            ],
          },
        ],
        errorConfigurations: [customErrorResponseProperty],
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
