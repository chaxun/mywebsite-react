# My Website

## Deploy locally

```bash
cd application/
npm install
npm start
```

## Deploy on AWS

1. Build

```
cd application/
npm install
npm run build
```

2. Deploy

```bash
cd infrastructure/
npm install
cdk deploy
```

3. Clean up

```bash
cd infrastructure/
cdk destroy
```

### Notes

- Update CNAME records on the domain registrar by hand:
  - map two records according to the certificate in AWS Certificate Manager
  - map the host name to the CloudFront domain name (remove this by hand on cdk destroy)

## References

- https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_cv&stacked=h
- https://dev.to/paulallies/deploy-your-static-react-app-to-aws-cloudfront-using-cdk-44hm
- https://awstip.com/aws-cdk-template-for-hosting-a-static-website-in-s3-served-via-cloudfront-e810ffcaff0c
