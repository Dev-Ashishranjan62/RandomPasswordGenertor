const inputField = document.getElementById("inputField");
const generateBtn = document.getElementById("genereteBtn");

generateBtn.addEventListener("click", () => {
  inputField.hidden = false;
  let password = "";
  let number = "0123456789";
  let symbol = "@#$%^&*";
  let cAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let allChar = number + symbol + cAlphabet + sAlphabet;

  let randomIndex1 = Math.floor(Math.random() * number.length);
  let randomChar1 = number[randomIndex1];
  let randomIndex2 = Math.floor(Math.random() * symbol.length);
  let randomChar2 = symbol[randomIndex2];
  let randomIndex3 = Math.floor(Math.random() * cAlphabet.length);
  let randomChar3 = cAlphabet[randomIndex3];
  let randomIndex4 = Math.floor(Math.random() * sAlphabet.length);
  let randomChar4 = sAlphabet[randomIndex4];
  password = randomChar1 + randomChar2 + randomChar3 + randomChar4;
  console.log(password);
  let num = Math.floor(Math.random() * (20 - 8 + 1)) + 8;

  for (let i = 0; i < num; i++) {
    //   if (password.length < 8) {
    let randomIndex = Math.floor(Math.random() * allChar.length);
    let randomChar = allChar[randomIndex];

    password += randomChar;
  }
  inputField.value = password;
  //}
});
