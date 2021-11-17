function calculator() {
    let price;
    let value;
    price = document.getElementById("cost").value;
    value = document.getElementById("number").value;
    const regular = /^[1-9][0-9]*$/;
    if (!regular.test(price) || !regular.test(value)) {
        alert("Неправильно введены значения");
        return true;
    }
    let totalResult = document.getElementById("result");
    totalResult.innerHTML = parseInt(price) * parseInt(value);
    return false;
}
window.addEventListener('DOMContentLoaded', function (calculator) {
    console.log("DOM fully loaded and parsed");
    let param = document.getElementById("result");
    param.addEventListener("click", calculator());
});