const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
    let textInput = document.getElementById("text-input").value;
    if (textInput !== '') {
        let formattedString = textInput.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '').replaceAll(" ", "");
        console.log(isPalindrome(formattedString));
        if (isPalindrome(formattedString)) {
            document.getElementById("result").innerText = `${textInput} is a palindrome.`;
        } else {
            document.getElementById("result").innerText = `${textInput} is not a palindrome.`;
        }
    } else {
        alert("Please input a value");
    }
});

function isPalindrome (textInput) {
    let i = 0;
    let j = textInput.length-1;
    
    while(i < j) {
        if (textInput[i] != textInput[j]) {
            return false;
        } 
        i++;
        j--;
    }
    return true;
}
