const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const updateflag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

for (let select of dropdowns) {
  for (currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newoption.selected = true;
    } else if (select.name === "to" && currcode === "INR") {
      newoption.selected = true;
    }
    select.append(newoption);
  }

  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });

  updateflag(select);
}

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtvalue = amount.value;
  if (amtvalue === "" || amtvalue < 1) {
    amtvalue = 1;
    amount.value = 1;
  }

  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();

  let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];

  let finalAmount = amtvalue * rate;

  msg.innerText = `${amtvalue} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
});
