import {
  Stack,
  StackProps,
  aws_s3 as s3,
  aws_certificatemanager as acm,
  aws_cloudfront as cloudfront,
  aws_s3_deployment as s3_deploy,
  RemovalPolicy,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class MyWebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // S3 bucket
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      bucketName: "chaxuniverse.com",
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Certificate
    const siteCertificate = new acm.Certificate(this, "SiteCertificate", {
      domainName: "www.chaxuniverse.com",
      subjectAlternativeNames: ["chaxuniverse.com"],
      validation: acm.CertificateValidation.fromDns(),
    });
    const viewerCertificate = cloudfront.ViewerCertificate.fromAcmCertificate(
      siteCertificate,
      {
        aliases: ["www.chaxuniverse.com"],
        securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        sslMethod: cloudfront.SSLMethod.SNI,
      }
    );

    // Custom error response
    const customErrorResponseProperty: cloudfront.CfnDistribution.CustomErrorResponseProperty =
      {
        errorCode: 403,
        responseCode: 200,
        responsePagePath: "/index.html",
      };

    // Origin access identity
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "MyWebsiteOriginAccessIdentity",
      { comment: "MyWebsite" }
    );

    // CloudFront distribution
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
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        errorConfigurations: [customErrorResponseProperty],
        viewerCertificate: viewerCertificate,
      }
    );

    new s3_deploy.BucketDeployment(this, "SiteDeployment", {
      sources: [s3_deploy.Source.asset("../application/dist")],
      destinationBucket: siteBucket,
      distribution: siteDistribution,
      distributionPaths: ["/*"],
    });
  }
}
