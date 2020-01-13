const core = require('@actions/core');
const AWS = require('aws-sdk');

let ec2 = new AWS.EC2();

let params = {
  GroupId: core.getInput('security_group_id'),
  IpPermissions: [
    {
      FromPort: core.getInput('from_port'),
      IpProtocol: core.getInput('ip_protocol'),
      IpRanges: [
        {
          CidrIp: core.getInput('cidr'),
          Description: core.getInput('desc')
        }
      ],
      ToPort: core.getInput('to_port')
    }
  ]
};

switch (core.getInput('action_type')) {
  case 'authorize':
    ec2.authorizeSecurityGroupIngress(params, function (err, data) {
      if (err) core.setFailed('Fetch Failed! Error: ' + err);
    });
    break;
  case 'revoke':
    ec2.revokeSecurityGroupIngress(params, function (err, data) {
      if (err) core.setFailed('Fetch Failed! Error: ' + err);
    });
    break;
  default:
    core.setFailed('Unknown `action_type`: ' + core.getInput('action_type'));
}