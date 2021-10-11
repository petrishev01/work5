window.addEventListener("DOMContentLoaded", function (event) {console.log("DOM fully loaded and parsed");});

function calculator() {
    let number = Number(document.getElementById("number").value);
    let cost = Number(document.getElementById("cost").value);


    let re = new RegExp(/^[0-9]+$/i);
    if (
        !(
            re.test(number) &&
            re.test(cost)
        )
    ) {
        alert("Проверьте правильность введённых данных, необходимо вводить только целые положительные числа!");
    } else if (number == "") {
        alert("Не указана цена товара");
    } else if (cost == "") {
        alert("Не указано количество товара");
    } else {
        const result = number * cost;
        document.getElementById("result").innerHTML = "Итоговая стоимость: " + result + " рублей";
    }
}