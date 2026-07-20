const indiaBtn = document.querySelector(".india");
const internationalBtn = document.querySelector(".international");

if (indiaBtn) {
    indiaBtn.addEventListener("click", function () {
        localStorage.setItem("paymentDone", "India ₹300");
    });
}

if (internationalBtn) {
    internationalBtn.addEventListener("click", function () {
        localStorage.setItem("paymentDone", "International ₹500");
    });
}
