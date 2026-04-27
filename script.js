const apiKey = "https://api.exchangerate-api.com/v4/latest/";
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
fetch(apiKey + "USD")
  .then(res => res.json())
  .then(data => {
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      let option1 = document.createElement("option");
      let option2 = document.createElement("option");
      option1.value = option2.value = currency;
      option1.text = option2.text = currency;
      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
  });
function convert() {
  let amount = document.getElementById("amount").value;
  let from = fromCurrency.value;
  let to = toCurrency.value;
  fetch(apiKey + from)
    .then(res => res.json())
    .then(data => {
      let rate = data.rates[to];
      let result = amount * rate;
      document.getElementById("result").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    });
}