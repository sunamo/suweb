const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

export function validateEmail(email) {
  return emailRegex.test(email);
}
