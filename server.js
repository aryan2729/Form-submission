const form = document.querySelector('form');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Validate form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (nameInput.value === '' || emailInput.value === '') {
    alert('Please fill out all required fields.');
  } else {
    // Form is valid, submit it
    // You can add your form submission logic here
    // For example, you could send the form data to a server using AJAX

    // Show the popup after successful submission
    popup.style.display = 'flex';
  }
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
