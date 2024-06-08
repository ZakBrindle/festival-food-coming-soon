class JoinComponent {
  constructor() {
    this.fullName = '';
    this.businessName = '';
    this.email = '';
    this.contactNumber = '';
  }

  onSubmit(form) {
    if (form.checkValidity()) {
      const vendorData = {
        fullName: this.fullName,
        businessName: this.businessName,
        email: this.email,
        contactNumber: this.contactNumber
      };

      console.log('Vendor Registration', vendorData);

      // Reset the form
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}

// Assuming you have a way to initialize this component and handle the form submission
const joinComponent = new JoinComponent();

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  joinComponent.fullName = document.getElementById('full-name').value;
  joinComponent.businessName = document.getElementById('business-name').value;
  joinComponent.email = document.getElementById('email').value;
  joinComponent.contactNumber = document.getElementById('contact-number').value;
  joinComponent.onSubmit(this);
});
