Mailboxen lets you configure and maintain a simple, secure SMTP mail server in the comfort of your local desktop environment. Mailboxen was born out of [Y Combinator Hackathon](http://ychacks.challengepost.com/) and is currently under development to become more robust and usable.

Check out [this link](http://mailboxen.herokuapp.com/) to see a conceptual demo. This app is not functional yet.

## Table of Contents
* [Motivation](#motivation)
* [Features and Usage](#features-and-usage)
* [Architecture](#architecture)
* [Dependencies](#dependencies)
* [Backlogs](#backlogs)
* [Contributing](#contributing)
* [Authors](#authors)

## Motivation
We are developing this app for supporters of internet security and privacy. Emails stored by email providers like Gmail, Yahoo and Hotmail have been submitted to authorities without a search warrant (via the Stored Communications Act) and without user notification.

Configuring a secure and reliable mail server is difficult and time consuming. Most people either resort to giving up their privacy by using free email services and paying the overhead of administrating their mail servers.

It is time for users to take ownership of their emails, and decentralize the internet again.

## Features and Usage
Many moving parts are already built, yet they aren't assembled yet. Basically currently you can set up an SMPT server running your Amazon EC2 instance which is able to receive emails over SSL and interface with 3rd party mail clients which support SMTP.

Until all components are stiched up, you can manually edit the config.yml file and run `./mailboxen.yml`

To see the user interface, run `node index.js` or `nodemon index.js`, if you have nodemon installed, from the root directory.

## Architecture
* Angular.js
* D3.js
* Node.js
* Express
* OpenSMTP
* Dovecot
* Ansible
* ObjectiveFS: end-to-end filesystem

## Dependencies
- Listed on Package.json & Bower.json
- Ansible

From within the root directory:
```sh
brew install ansible
brew install npm
npm install -g bower
npm install
bower install
```

## Backlogs
- generate a valid config.yml from the web interface user input
- a script to install all dependencies
- node script to trigger ansible
- spam filtering
- auditing
- portability
- persistence
- outbound email

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Authors
* [DH Lee](http://github.com/dhfromkorea)
* Grace Nordin
* Thomas Nordin
