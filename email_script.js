function sendMail() {
  let name = document.getElementById("wpforms-186-field_0").value;
  let email = document.getElementById("wpforms-186-field_7").value;
  let phone = document.getElementById("wpforms-186-field_8").value;
  let description = document.getElementById("wpforms-186-field_5").value;
  let message = document.getElementById("wpforms-186-field_2").value;

  let params = {
    name: name,
    email: email,
    phone: phone,
    subject: "Email request from Pawzzz.in from " + name,
    message: message,
    description: description,
    from_email: email,
  };

  console.log(params);

  emailjs
    .send("service_ni9gews", "template_pf433zu", params)
    .then(() => {
      alert("Email sent successfully!");
      console.log("Done successfully");
    })
    .catch((e) => {
      console.log("Failed to send email", e);
    });
}