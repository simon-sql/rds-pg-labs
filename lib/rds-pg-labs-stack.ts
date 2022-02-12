import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as iam from 'aws-cdk-lib/aws-iam'

import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';

export class RdsPgLabsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //const vpc: ec2.Vpc;
    const role = new iam.Role(this, 'RDSDirectoryServicesRole', {
      assumedBy: new iam.ServicePrincipal('rds.amazonaws.com'),
      managedPolicies:[
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonRDSDirectoryServiceAccess')
        ],
    })
    
    const instance = new rds.DatabaseInstance(this, 'Instance', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_4
      }),
//    credentials:
//    vpc: ,
//    backupRetention: Duration.days(1),
      databaseName: 'pg-labs',
      deleteAutomatedBackups: true,
      deletionProtection: false,
      enablePerformanceInsights: true,
      monitoringInterval: Duration.seconds(10),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO),
      multiAz: false,
      port: 4532,
      storageType: rds.StorageType.GP2,
      allocatedStorage: 20,
      iamAuthentication: true,
      instanceIdentifier: 'rds-pg-labs',
//    credentials: ,

    })
  }
}
