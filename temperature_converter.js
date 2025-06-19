let inputValue = document.getElementById("D");
let type = document.getElementById("type");
let result = document.getElementById("result");
let types = document.getElementById("type2");
let convert = document.getElementById("convert")


type.onchange = () => {
    if(type.value === "celsius"){
    types.innerHTML="Enter in Fahrenheit:-";
} else if(type.value === "fahrenheit"){
    types.innerHTML="Enter in Celsius:-";
}
}
convert.onclick = () => {
    let value = parseFloat(inputValue.value);

    if (isNaN(value)) {
        result.value = "Invalid input";
        return;
    }

    if (type.value === "fahrenheit") {
        let celsius = (value - 32) * 5 / 9;
        result.value = celsius.toFixed(2); // 2 decimal places
    } else if (type.value === "celsius") {
        let fahrenheit = value * (9 / 5) + 32;
        result.value = fahrenheit.toFixed(2);
    }
};
