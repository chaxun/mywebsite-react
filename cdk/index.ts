import * as dotenv from 'dotenv';
import * as cdk from "@aws-cdk/core";
import { Stack } from "./stack";

dotenv.config();

const app = new cdk.App();
new Stack(app, "ReactAppStack");
