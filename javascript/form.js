document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_gfydntr", "template_hytyqxc", this).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        console.error("Error sending message:", error);
        alert("There was an error sending the message. Please try again.");
      }
    );
  });

document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_gfydntr", "template_hytyqxc", this).then(
      function () {
        alert("Thank you for subscribing to the newsletter!");
      },
      function (error) {
        console.error("Error sending message:", error);
        alert("There was an error. Please try again.");
      }
    );
  });
