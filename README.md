# My Website

## Deploy locally

```bash
npm start
```

## Deploy on AWS

1. Create `.env` file with

- DOMAIN_NAME
- WWW_DOMAIN_NAME
- AWS_ACCOUNT
- AWS_REGION

2. Deploy

```bash
cdk bootstrap aws://AWS_ACCOUNT/AWS_REGION
npm run build
npm run deploy
```

3. Clean up

```bash
cdk destroy ReactAppStack
```

### Notes

- Update CNAME records on your domain registrar by hand:
  - map two records according to the certificate in AWS Certificate Manager
  - map your host name to the CloudFront domain name (remove this by hand on cdk destroy)
- May need to remove CDKToolkit stack on AWS CloudFormation by hand

## References

- https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_cv&stacked=h
- https://dev.to/paulallies/deploy-your-static-react-app-to-aws-cloudfront-using-cdk-44hm
- https://awstip.com/aws-cdk-template-for-hosting-a-static-website-in-s3-served-via-cloudfront-e810ffcaff0c
