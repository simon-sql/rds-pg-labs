#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
//import { RdsPgLabsStack } from '../lib/rds-pg-labs-stack';
import { RdsPsVpcStack  } from '../lib/rds-pg-labs-vpc';

const app = new cdk.App();
new RdsPsVpcStack(app, 'rds-pg-lab-vpc')
//new RdsPgLabsStack(app, 'RdsPgLabsStack');
