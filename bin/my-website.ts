import * as cdk from "aws-cdk-lib";
import { MyWebsiteStack } from "../lib/my-website-stack";

const app = new cdk.App();
new MyWebsiteStack(app, "MyWebsiteStack");
