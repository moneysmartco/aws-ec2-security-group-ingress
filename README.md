# AWS EC2 Security Group Ingress

Authorize or revoke ingress access to a CIDR range to a AWS Security Group. 

## Inputs

### action_type
**Required** Only `authorize` or `revoke` is supported.
`authorize` allows the CIDR range access to the SG while `revoke` removes the access.

### from_port
**Required** Starting port range.

### to_port
**Required** Ending port range.

### cidr
**Required** Use the format x.x.x.x/32

### desc
**Required** Description of the rule.

## Example usage

    uses: actions/aws_ec2_sg_ingress@v0.1.0
    with:
      action_type: 'authorize'
      from_port: 22
      to_port: 22
      cidr: 0.0.0.0/0
      desc: Just an example