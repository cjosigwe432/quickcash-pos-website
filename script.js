// OTP example
const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha');

auth.signInWithPhoneNumber(phoneNumber, appVerifier)
  .then((confirmationResult) => {
    const code = prompt("Enter OTP");
    return confirmationResult.confirm(code);
  });