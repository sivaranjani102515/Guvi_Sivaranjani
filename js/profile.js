// Get references to form fields
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const dob = document.getElementById('dob');
const age = document.getElementById('age');
const address = document.getElementById('address');

// Define regular expressions for validation
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[\d]{10}$/;
const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;

// Define event listeners for form fields
firstName.addEventListener('blur', validateName);
lastName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
mobile.addEventListener('blur', validateMobile);
dob.addEventListener('blur', validateDate);
age.addEventListener('blur', validateAge);
address.addEventListener('blur', validateAddress);

// Validation functions
function validateName() {
  if (!nameRegex.test(this.value)) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}

function validateEmail() {
  if (!emailRegex.test(this.value)) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}

function validateMobile() {
  if (!mobileRegex.test(this.value)) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}

function validateDate() {
  if (!dateRegex.test(this.value)) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}

function validateAge() {
  const ageValue = parseInt(this.value);
  if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}

function validateAddress() {
  if (this.value.trim() === '') {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
}
