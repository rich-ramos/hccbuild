require('dotenv').config();
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const {WebTemplate} = require('../src/assets/scripts/modules/WebTemplate');

const {
    SENDER_EMAIL_ADDRESS,
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    MAILING_SERVICE_REDIRECT_URIS,
} = process.env;

const oAuth2Client = new google.auth.OAuth2(
    MAILING_SERVICE_CLIENT_ID, MAILING_SERVICE_CLIENT_SECRET, MAILING_SERVICE_REDIRECT_URIS);
oAuth2Client.setCredentials({refresh_token: MAILING_SERVICE_REFRESH_TOKEN});

exports.handler = async function (event) {
    const form = JSON.parse(event.body);
    const webTemplate = WebTemplate.createWebTemplate(form);
    const accessToken = oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken: accessToken
        }
    });

    const mailOptions = {
        from: form.email,
        to: SENDER_EMAIL_ADDRESS,
        subject: `HCCBuild - ${form.service}`,
        text: form.message,
        html: webTemplate
    }

    const result = await transport.sendMail(mailOptions);
    if (result) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: result})
        }
    } else {
        return {
            statusCode: 502
        }
    }
}