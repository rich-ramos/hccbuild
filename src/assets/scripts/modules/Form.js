class Form {
    constructor() {
        this.form = document.querySelector("form");
        this.events();
    }

    events() {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        let myForm = document.querySelector(".form");
        let formData = new FormData(myForm);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => this.displaySuccessfulMessage()).catch((error) => alert(error));
    }

    displaySuccessfulMessage() {
        this.form.insertAdjacentElement("beforebegin", 
        `
            <div>
                <h2>Form Submitted</h2>
            </div>
        `);
    }
}

export default Form;