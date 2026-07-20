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

const continueBtn = document.getElementById("continueWhatsApp");

if (continueBtn) {
    continueBtn.addEventListener("click", function () {
        const message = localStorage.getItem("appointmentMessage");

        if (!message) {
            alert("Appointment details not found. Please fill the form again.");
            return;
        }

        const phone = "919417101456"; // WhatsApp number
        const url = `https://wa.me/${phone}?text=${message}`;

        window.location.href = url;
    });
}
