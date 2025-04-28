var range = document.getElementById("range") as HTMLInputElement;
var value = document.getElementById("value") as HTMLDivElement;

range.addEventListener("input", () => {
    value.textContent = range.value;
})