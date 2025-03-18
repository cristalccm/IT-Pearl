async function convertCurrency() {
    const baseCurrency = document.getElementById('base-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    
    if (!amount || !date) {
        alert("Please enter a valid amount and date.");
        return;
    }
    
    const apiUrl = `https://api.exchangerate.host/${date}?base=${baseCurrency}&symbols=${targetCurrency}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.rates && data.rates[targetCurrency]) {
            const convertedAmount = (amount * data.rates[targetCurrency]).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency} on ${date}`;
        } else {
            document.getElementById('result').innerText = "Exchange rate not available for the selected date.";
        }
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        document.getElementById('result').innerText = "Error fetching exchange rate.";
    }
}