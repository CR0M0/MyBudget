function process() {
  var amount = parseInt(document.querySelector("#amount").value);
  var category = document.querySelector("#category").value;
  var date = document.querySelector("#date").value;
  var note = document.querySelector("#note").value;

  var income = parseInt(document.getElementById("income").innerText);
  var expenses = parseInt(document.getElementById("expenses").innerText);
  var balance = parseInt(document.getElementById("balance").innerText);

  if (category == "income") {
    income += amount;
  } else {
    expenses += amount;
  }



  balance = income - expenses;

  document.querySelector("#income").innerHTML = income;
  document.querySelector("#expenses").innerHTML = expenses;
  document.querySelector("#balance").innerHTML = balance;
}
