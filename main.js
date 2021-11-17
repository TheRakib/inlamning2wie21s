


document
.querySelector("button")
.addEventListener("click", countBudget)

function countBudget(e) {
   e.preventDefault();

   //console.log("it works")

  const select=  document.querySelector("select");

  console.log(select.value)

const description = document.querySelector(".desc").value;

console.log(description);
const number = document.querySelector(".num").value;
console.log(number)

}