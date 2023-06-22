function convert(){

let cm = Number(document.getElementById("input").value)
let inchval = cm/2.54
let result = document.getElementById("result")
result.innerHTML = inchval.toFixed(3) + "Inches"
}
