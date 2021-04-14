document.getElementById("button1").addEventListener("click", loadOneCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

// Load Single Customer
function loadOneCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "onecustomer.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  };
  xhr.send();
}

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
      const customers = JSON.parse(this.responseText);
      let output = "<hr>";
      customers.forEach((customer) => {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };
  xhr.send();
}

// Load Customers
function loadZemlje() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.eu/rest/v2/all", true);
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const sveZemlje = JSON.parse(this.responseText);
      // console.log(sveZemlje);
      let output = "";
      let trazimZemlju = sveZemlje.find((data) => {
        return data.alpha2Code === "HR";
      });
      // console.log(trazimZemlju);
      sveZemlje.forEach(function (zemlja) {
        output += `
        <ul>
          <li>Naziv: ${zemlja.name}</li>
          <li>Stanovmika: ${zemlja.population}</li>
          <li>Glavni grad: ${zemlja.capital}</li>
          <li>Povrsina: ${zemlja.area}</li>
          <li>Valuta: ${zemlja.currencies[0].code}, ${zemlja.currencies[0].name}</li>
          <img src="${zemlja.flag}" alt="Zastava" width="100" height="65" style="border: 1px solid black">
        </ul>
      `;
      });
      document.getElementById("zemlje").innerHTML = output;
    }
  };
}

loadZemlje();
