module.exports = function formatPhoneNumber (number) {
    const currentValue = number.toString();
    const currentLetters = currentValue.split("");
    const lastChar = currentLetters[currentLetters.length - 1]
    const isNumberRE = new RegExp(/\d/);
    const isNotNumberRE = new RegExp(/\D/);
    const onlyNumbers = currentValue.split("").filter((letter) => isNumberRE.test(letter));
    const numbers = onlyNumbers.join("");
    const numbersLength = onlyNumbers.join("").length;

    let value;
    
    if(currentValue === "" || currentValue ===  "(" ) {
        return value = "";
    }

    if(isNotNumberRE.test(lastChar)){
      if(lastChar === " " & numbersLength === 3) {
        return value = "(" + numbers;
      }
      if(lastChar === "-" & numbersLength === 6) {
        return value = "(" + numbers.slice(0,3) + ") " + numbers.slice(3,numbersLength);
      }
      if(lastChar === ")" & numbersLength === 3) {
        return value = "(" + numbers;
      }
      return;
    }
    if(numbersLength === 1 || numbersLength === 2){
      return value = "(" + numbers;
    }
    if(numbersLength === 3){
      return value = "(" + numbers.slice(0,3) ;
    }
    if(numbersLength >= 4 && numbersLength <= 6){
      return value = "(" + numbers.slice(0,3) + ") " + numbers.slice(3,numbersLength);
    }
    if(numbersLength === 7){
      return value = "(" + numbers.slice(0,3) + ") " + numbers.slice(3,6) + "-" + numbers.slice(6,numbersLength);
    }
    if(numbersLength >= 8 && numbersLength <= 10 || numbersLength > 10){
      return value = "(" + numbers.slice(0,3) + ") " + numbers.slice(3,6) + "-" + numbers.slice(6,10);
    }

  return;
};