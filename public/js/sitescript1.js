const ipWidth = document.getElementById("width");
const ipheight = document.getElementById("height");
const ipType = document.getElementsByClassName("type");
const hinh = document.getElementById("hinh");
const feedback = document.querySelector("#feedback-error");
const drawBtn = document.getElementById("draw-btn");
let errorMsg = document.createElement("div");

// lay loai hinh
function getType() {
    for (let i = 0; i < ipType.length; i++) {
        if (ipType[i].checked) {
            return ipType[i].value;
        }
    }
}

// event cho draw btn

drawBtn.addEventListener("click", function () {
    let width = parseInt(ipWidth.value);
    let height = parseInt(ipheight.value);
    let type = getType();
    let error = "";

    if (width <= 0
        || width > 800
        || height <= 0
        || height > 1000
        || isNaN(width)
        || isNaN(height)) {
        feedback.textContent = "value not validate!";
        feedback.classList.add("active");
    } else {
        feedback.textContent = "";
        feedback.classList.remove("active");
        if (type == "circle") {
            hinh.setAttribute("style", `width:${width}px; height:${height}px;border-radius:50%`);
        } else {
            hinh.setAttribute("style", `width:${width}px; height:${height}px;border-radius:12px`);
        }
    }

})