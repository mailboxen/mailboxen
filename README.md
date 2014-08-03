# Project Name

> Mailboxen

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)


## Usage

- run `npm start` in your command line to run the node server locally
- go to 'localhost:8000' in your browser
- fill out the form to provide the necessary credentials
- that's all. our app will set up the email server on your EC2 instance and notify when it's done setting up.

Ansible
1. Install ansible on your local machine
2. Create an AWS instance with tag Name:mailboxen
     - Security group allow: ssh, smtpd, https, imaps, 587, icmp
3. Link your ec2-user private key in keys/ec2-user
4. Configure domain and users/passwords in group_vars/tag_Name_mailboxes
5. Run ./mailboxen.yml


## Requirements

- Node 0.10.x
-

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.