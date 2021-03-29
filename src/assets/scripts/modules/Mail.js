class Mail {
    constructor() {
        // this.form = document.querySelector('form');
        // this.firstName = document.getElementById("firstName");
        // this.lastName = document.getElementById("lastName");
        // this.phone = document.getElementById("phone");
        // this.email = document.getElementById("email");
        // this.service = document.getElementById("service");
        // this.zip = document.getElementById("zip");
        // this.message = document.getElementById("message");
        // this.events();
    }

    // events() {
    //     this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.processForm(e.target);
    // }

    // processForm(form) {
    //     const formData = new FormData(form);
    //     const urlFormattedFormData = new URLSearchParams(formData).toString();
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/x-www-form-urlencoded"},
    //         body: urlFormattedFormData
    //     })
    //         .then(() => fetch('https://nifty-wilson-4745d0.netlify.app/.netlify/functions/send-email', {
    //             method: 'POST',
    //             body: JSON.stringify(Object.fromEntries(formData))
    //         }))
    //         .catch((error) => console.log(error));
    // }

    sendMail(formData) {
        fetch('https://nifty-wilson-4745d0.netlify.app/.netlify/functions/send-email', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData))
        })
    }
}

export default Mail;