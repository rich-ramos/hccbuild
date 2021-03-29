require('dotenv').config();
const nodemailer = require('nodemailer');
const {google} = require('googleapis');

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
    const webTemplate = 
    `
    <div style="background: #f4f4f4; padding: 1rem; font-family: Arial, Helvetica, sans-serif;">
        <div style="background: #fff; width: 500px; margin: auto; padding: 1rem">
            <div>
                <h1 style="text-align: center; background: #981E32; color: #fff; font-weight: 100; border-radius: 15px; margin-bottom: 2rem">HCCBuild Service Request</h1>
            </div>
            <div>
                <h2>Client:</h2>
                <p style="background: #f3f3f3; padding: 1rem">${form.firstName} ${form.lastName}</p>
            </div>
            <div>
                <h2>Phone:</h2>
                <p style="background: #f3f3f3; padding: 1rem">${form.phone}</p>
            </div>
            <div>
                <h2>Email:</h2>
                <p style="background: #f3f3f3; padding: 1rem">${form.email}</p>
            </div>
            <div>
                <h2>Zip:</h2>
                <p style="background: #f3f3f3; padding: 1rem">${form.zip}</p>
            </div>
            <div>
                <h2>Service:</h2>
                <p style="background: #f3f3f3; padding: 1rem">${form.service}</p>
            </div>
            <div>
                <h2>Description:</h2>
                <p style="background: #f3f3f3; padding: 1rem">${form.message}</p>
            </div>
        </div>
    </div>
    `

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