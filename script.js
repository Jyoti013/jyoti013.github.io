// script.js
function submitForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Example payload
  const data = {
    name: name,
    email: email,
    message: message
  };

  // Send data to your backend (e.g., via fetch API)
  fetch('https://script.google.com/macros/s/AKfycby84F77JPZ5MMwwJ0vJtdvFCMq_RaCO3Bf1_t7pCkg4WuwVEStD_YOcEjyiC3LCS4Eq/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('responseMessage').innerHTML = "Thank you for contacting us!";
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    document.getElementById('responseMessage').innerHTML = "There was an error submitting your form.";
  });
}

