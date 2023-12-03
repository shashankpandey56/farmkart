const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
    console.log('send emial====')
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
        debug:true
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };
    console.log('mail options ===',mailOptions)
    const iii = await transporter.sendMail(mailOptions);
    console.log('result after ===',iii)
};

module.exports = sendEmail;