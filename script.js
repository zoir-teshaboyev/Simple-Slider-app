var range = document.getElementById("range");
var value = document.getElementById("value");
range.addEventListener("input", function () {
    value.textContent = range.value;
});
