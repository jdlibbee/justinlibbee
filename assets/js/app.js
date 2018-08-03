$("#submit").on("click", function (event) {
    event.preventDefault();
    var data = {
        firstName: $("#first_name").val().trim(),
        lastName: $("#last_name").val().trim(),
        email: $("#email").val().trim(),
        message: $("#message").val().trim()
    }
    $.ajax({
        method: "POST",
        url: "/api/nodemailer",
        data
        //data: data
    }).then(function (response) {
        console.log(response);
    });
    // var mailOptions = {
    //     from: email,
    //     to: data.user,
    //     subject: 'Contact from your Portfolio',
    //     html: `<ul>
    //     <li>From: ${firstName} ${lastName}</li>
    //     <li>Email: ${email}</li>
    //     </ul>
    //     <p>${message}</p>`
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
})