const $ = (elem) => { return document.querySelector(elem) };

const subtotal = $('#subtotal')
const taxRate = $('#taxRate')
const salesTax = $('#salesTax')
const total = $('#total')
const btnClear = $('#btnClear')

function processEntries() {
    salesTax.value = total.value = ""
    if ((subtotal.value > 0 && subtotal.value < 10000) && (taxRate.value > 0 && taxRate.value < 12)) {
        salesTax.value = ((subtotal.value * taxRate.value) / 100).toFixed(2)
        total.value = (+salesTax.value + (+subtotal.value)).toFixed(2)
    } else alert("Subtotal must be > 0 and < 10000 Tax, Rate must be > 0 and < 12")
    subtotal.focus()

}

function clear() {
    subtotal.value = taxRate.value =
        salesTax.value = total.value = ""

    subtotal.focus()
}

subtotal.addEventListener('click', clear)
taxRate.addEventListener('click', clear)

btnClear.addEventListener('click', clear)

document.body.onload = function() {
    $("button#btnCalculate").addEventListener('click', processEntries)
    subtotal.focus()
}