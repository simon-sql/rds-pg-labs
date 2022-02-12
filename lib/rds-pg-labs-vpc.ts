import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as ec2 from 'aws-cdk-lib/aws-ec2'

export class RdsPsVpcStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
    
        const vpc = new ec2.Vpc(this, id, {
            natGateways: 0,
            maxAzs: 2,

            subnetConfiguration: [{
                cidrMask: 24,
                name: "Public",
                subnetType: ec2.SubnetType.PUBLIC,
            },{
                cidrMask: 24,
                name: "Private",
                subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            }],

            defaultInstanceTenancy: ec2.DefaultInstanceTenancy.DEFAULT,       
            enableDnsHostnames: true,
            enableDnsSupport: true,
            cidr: "10.0.0.0/16",
        });    
    }
}