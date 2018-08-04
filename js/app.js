var nodemailer = require("nodemailer");
var data = require("./config");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: data.user,
        password: data.password
    }
});

$("#submit").on("click", function () {
    var firstName = $("#first_name").val().trim();
    var lastName = $("#last_name").val().trim();
    var email = $("#email").val().trim();
    var message = $("message").val().trim();

    var mailOptions = {
        from: email,
        to: data.user,
        subject: 'Contact from your Portfolio',
        html: `<ul>
        <li>From: ${firstName} ${lastName}</li>
        <li>Email: ${email}</li>
        </ul>
        <p>${message}</p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    $("#first_name").val(" ");
    $("#last_name").val(" ");
    $("#email").val(" ");
    $("message").val(" ");
})