async function convertCurrency() {
    const baseCurrency = document.getElementById("baseCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const date = document.getElementById("fromdate").value;

    
  
    

    
    const response = await fetch(`https://api.polygon.io/v1/conversion/AUD/USD?amount=100&precision=2&apiKey=x6SiJTpjoM5w7tPRlGSWSAAkivBrT9x1`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    
    document.getElementById("result").innerText = `${baseCurrency} on ${date} = ${toCurrency} on ${date}`;
}