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
  fetch('YOUR_BACKEND_ENDPOINT_URL', {
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

