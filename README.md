# Mention Test
The project require a App in dev center of [Dev Mention](https://dev.mention.com)

AccessToken of your Mention App is used.

This project use docker.

## Build

You can download image of project:

    docker pull st3w4r/mention-test

Or build it, with Dockerfile :

    docker build -t mention-test .

## Run server

![Access Token Mention](https://raw.githubusercontent.com/st3w4r/mention-test/resources/Mention_Access_Token.png)

For run the server you need, replace YOUR_TOKEN_API_OF_MENTION by the AccessToken in mention

    docker run -ti -p 80:9001 -e MENTION_TOKEN_ENV="YOUR_TOKEN_API_OF_MENTION" st3w4r/mention-test

## Access to website

If you are on Boot2Docker your need find ip with command.

    boot2docker ip

Ip of Boot2Docker:

    192.168.59.103

Now you can open browser and got to:

    http://192.168.59.103:80/

Or with Docker native on:

    http://localhost:80/

## Show Alerts list

Click on Show Alerts list, the list of your alerts with the primary_keyword is displayed
