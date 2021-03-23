const drawBtn = document.querySelector("#draw-btn");
const ipValue = document.querySelector("#value");
const drawContais = document.querySelector(".draw-contanier");
const feedback = document.querySelector("#feedback-error")

//set event for drawBtn

drawBtn.onclick = function () {

    drawContais.innerHTML = "";

    let value = ipValue.value;
    
    let arrValue = value.split(",").map(e => {
        return parseInt(e.trim());
    });

    let max = Math.max.apply(Math, arrValue);

    arrValue.forEach(e => {
        let chart = document.createElement("div");    

        if (arrValue.length > 8) {
            feedback.textContent = "max only 8 value";
            feedback.classList.add("active");
        } else if (arrValue.includes(NaN)){
            console.log(isNaN(arrValue));
            feedback.textContent = "value not validate!";
            feedback.classList.add("active");
        }
        else {
            feedback.classList.remove("active");
            chart.classList.add("chart");
            chart.innerHTML = e;

            if (e == max) {
                chart.style.height = 500 + "px";
            } else {
                chart.style.height = ((e * 500) / max) + "px";
            }

            drawContais.appendChild(chart);
        }
    });
}



