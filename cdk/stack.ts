import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as acm from "@aws-cdk/aws-certificatemanager";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as deploy from "@aws-cdk/aws-s3-deployment";

const DOMAIN_NAME = "chaxuniverse.com";
const WWW_DOMAIN_NAME = "www." + DOMAIN_NAME;

export class Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id, {
      env: {
        account: "437898606796",
        region: "us-east-1",
      },
    });

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      bucketName: WWW_DOMAIN_NAME,
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const siteCertificate = new acm.Certificate(this, "WebCert", {
      domainName: WWW_DOMAIN_NAME,
      subjectAlternativeNames: [DOMAIN_NAME],
      validation: acm.CertificateValidation.fromDns(),
    });

    const siteDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "SiteDistribution",
      {
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          siteCertificate,
          {
            aliases: [WWW_DOMAIN_NAME],
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
