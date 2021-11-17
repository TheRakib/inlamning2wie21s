
//var modal = require("")



document
.querySelector("button")
.addEventListener("click", countBudget)


const inkomstLista= [];
const kostnadLista= [];

function countBudget(e) {
   e.preventDefault();

   //console.log("it works")
  let costSum= 0;
  let incomeSum=0;

  const select=  document.querySelector("select");

  console.log(select.value)

  const description = document.querySelector(".desc").value;

  console.log(description);
  const number = document.querySelector(".num").value;
  console.log(number)
  if(select.value=="+"){
   
    document
   .querySelector(".inkomst-container")
   .innerHTML += `<li class="inkomst-lista"> ${description} : ${number} </li>`
  
   inkomstLista.push(number)
   console.log(inkomstLista)

}
else if(select.value=="-"){
    document
    .querySelector(".kostnad-container")
    .innerHTML += `<li class="kostnad-lista"> ${description} :${number} </li>`

    kostnadLista.push(number)
}
else if(select.value=="choose") {
    // example

    alert("Hej välja mellan + / -")

}


inkomstLista.map( (e)=> {
 
    console.log(parseFloat(e))
    incomeSum += parseFloat(e)
})

//console.log(incomeSum)

kostnadLista.map( (e)=> {
costSum += e
})


document
.querySelector(".vinst")
.textContent = incomeSum -costSum;

}