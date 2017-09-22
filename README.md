# github-release-slack-notifier

A simple server that receives GitHub release notifications and posts to slack.

GitHub has an official Slack application but for whatever reason, it does not yet support posting notices to Slack when a new Release is published.

## Installation and usage

1. Set up a Slack webhook for the desired channel in your Slack settings
3. Deploy this repository and run the server using `SLACK_WEBHOOK_URL=<the url of your webhook> npm run start`
4. In your GitHub project's settings, configure a new webhook that pushes "Release" events to the URL of your new server
