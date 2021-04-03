class Mail {
    constructor() {}
    sendMail(formData) {
        fetch('https://nifty-wilson-4745d0.netlify.app/.netlify/functions/send-email', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData))
        })
    }
}

export default Mail;