function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100;
  var result = document.getElementById("result");

  if (weight > 0 && height > 0) {
    var bmi = (weight / (height * height)).toFixed(2);
    let message = `Ваш индекс массы тела - ${bmi}.`;
    if (bmi < 18.5) {
      message +=
        " Вам нужно увеличить потребление калорий и набрать дополнительный вес.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message += " Вы в норме!";
    } else if (bmi >= 25 && bmi < 30) {
      message +=
        " Вам нужно больше заниматься спортом и следить за своим питанием!";
    } else if (bmi >= 30 && bmi < 35) {
      message += " У вас первая стадия ожирения, обратитесь к врачу!";
    } else if (bmi >= 35 && bmi < 40) {
      message += " У вас вторая стадия ожирения, обратитесь к врачу!";
    } else if (bmi >= 40) {
      message += " У вас третья стадия ожирения, срочно обратитесь к врачу!";
    }

    result.innerHTML = message;
  } else {
    result.innerHTML = "Введите данные";
  }
}
