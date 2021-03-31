class WebTemplate {
    constructor() {}

    static createWebTemplate(form) {
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
        return webTemplate;
    }
}

module.exports.WebTemplate = WebTemplate;