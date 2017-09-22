const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const attachments = req.body.release.body && [
    {
      fallback: `<${req.body.release.html_url}|Changelog>`,
      color: 'good',
      title: 'Release notes',
      value: req.body.release.body,
    },
  ];
  request.post(
    process.env.SLACK_WEBHOOK_URL,
    {
      json: {
        username: `${req.body.repository.name} release webhook`,
        icon_emoji: ':rocket:',
        text: `<${req.body.release.html_url}|${req.body.repository.name}@${req.body.release.tag_name}> released!`,
        attachments,
      },
    }
  );
  res.status(200).end();
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
