const form = document.getElementById("palindrome") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#palindrome-input");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null)
    return alert("Please fill the field..");

  checkPalindrome();
});

function checkPalindrome() {
  var x = input?.value;
  var y = "";
  if (x != null) {
    for (let i = x.length - 1; i >= 0; i--) {
      y += x[i];
    }
    if (x == y) alert(`${y} is a Palindrome!`);
    else alert(`${y} is not a Palindrome!`);
  }
}
