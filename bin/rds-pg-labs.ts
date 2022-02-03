#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RdsPgLabsStack } from '../lib/rds-pg-labs-stack';

const app = new cdk.App();
new RdsPgLabsStack(app, 'RdsPgLabsStack');
