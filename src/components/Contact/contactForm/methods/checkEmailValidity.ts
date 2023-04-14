export const checkEmailValidity = (email: string): Boolean => {
  let valid = true;
  if (!email.split("@")[1]) {
    valid = false;
  } else {
    const domain = email.split("@")[1];
    if (!domain.split(".")[1]) {
      valid = false;
    }
  }
  return valid;
};
