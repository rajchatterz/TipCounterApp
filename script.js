const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const button = document.getElementById('calculate')
const total = document.getElementById('total')
button.addEventListener("click", (e) => {
    e.preventDefault()
    
    const displayBill = parseFloat(bill.value)
    const displayTip = parseFloat(tip.value)
    if (isNaN(displayBill) || isNaN(displayTip)) {
        alert("PLEASE ENTER NUMBER")
    }
    else {
        const result = displayBill + (displayBill * (displayTip / 100))
        const resultDisplay = result.toFixed(2)
        total.innerHTML=resultDisplay
    }
    
})