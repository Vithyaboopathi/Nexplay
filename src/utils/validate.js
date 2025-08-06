export const checkValidData = (email, password, userName) => {
  const isEmailValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isUserNameValid = /^[0-9A-Za-z]{6,16}$/.test(userName);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "password is not valid";
  if (!isUserNameValid) return "username is not valid";
};
