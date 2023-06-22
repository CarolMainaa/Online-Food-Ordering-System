let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
    
}


const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.myimageabout',{ delay:350, origin:'left' })
  sr.reveal('.about-text-content',{ delay:350, origin:'right' })
  sr.reveal('.home-image',{ delay:350, origin:'left' })
  sr.reveal('.home-text-content',{ delay:350, origin:'right' })

  sr.reveal('.quality-content',{ delay:350, origin:'left' })
  sr.reveal('.qulity-image',{ delay:350, origin:'right' })
  sr.reveal('.gallery-image',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-content',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:350, origin:'bottom' })
  sr.reveal('.food-main-content',{ delay:350, origin:'bottom' })
  sr.reveal('.before',{ delay:350, origin:'bottom' })
  sr.reveal('.footer-logo',{ delay:350, origin:'bottom' })

// form validation
// Get the form element
const form = document.querySelector('form');

// Get the success message element
const successMessage = document.getElementById('success-message');

// Add event listener to the submit button
form.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form fields
  const fullnameInput = document.getElementById('fullname');
  const lastnameInput = document.getElementById('lastname');
  const addressInput = document.getElementById('address');
  const phoneInput = document.getElementById('phone');

  // Check if the first name is empty
  if (fullnameInput.value.trim() === '') {
    showError(fullnameInput, 'First Name is a required field');
    return;
  }

  // Check if the last name is empty
  if (lastnameInput.value.trim() === '') {
    showError(lastnameInput, 'Last Name is a required field');
    return;
  }

  // Check if the address is empty
  if (addressInput.value.trim() === '') {
    showError(addressInput, 'Address is a required field');
    return;
  }

  // Check if the phone number is empty
  if (phoneInput.value.trim() === '') {
    showError(phoneInput, 'Phone Number is a required field');
    return;
  }

  // Check if the phone number is valid (optional)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Please enter a valid phone number');
    return;
  }

  // Optional: Check if any checkbox is selected
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let isChecked = false;
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    alert('Please select at least one extra filling');
    return;
  }

  // Optional: Validate other fields as needed

  // Simulate form submission success (Replace with your actual submission code)
  // Here, we're simply displaying a success message and resetting the form
  displaySuccessMessage();
  form.reset();
});

// Function to display error message and apply red border
function showError(inputElement, errorMessage) {
  // Add red border
  inputElement.style.border = '1px solid red';

  // Create error message element
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.innerText = errorMessage;

  // Check if error message element already exists
  const existingError = inputElement.parentElement.querySelector('.error-message');
  if (existingError) {
    inputElement.parentElement.removeChild(existingError);
  }

  // Append error message element to the parent element
  inputElement.parentElement.appendChild(errorElement);

  // Set focus on the input field
  inputElement.focus();
}

// Function to display success message
function displaySuccessMessage() {
  // Display success message
  successMessage.textContent = 'Form submitted successfully!';
  successMessage.classList.remove('hidden');

  // Hide success message after 5 seconds
  setTimeout(function() {
    successMessage.textContent = '';
    successMessage.classList.add('hidden');
  }, 5000);
}




















































