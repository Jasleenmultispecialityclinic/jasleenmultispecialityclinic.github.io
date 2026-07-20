// ================================
// Jasleen Clinic Script
// ================================

const form = document.getElementById("appointmentForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const mobile=document.getElementById("mobile").value;
const doctor=document.getElementById("doctor").value;
const department=document.getElementById("department").value;
const date=document.getElementById("date").value;
const slot=document.getElementById("slot").value;
const problem=document.getElementById("problem").value;

const paymentid=document.getElementById("paymentid").value;
const message = `
📌 New Appointment Request

👤 Name: ${name}
📱 Mobile: ${mobile}
👨‍⚕️ Doctor: ${doctor}
🏥 Department: ${department}
📅 Date: ${date}
🕒 Time Slot: ${slot}
📝 Problem: ${problem}
💳 Payment ID: ${paymentid}
`.trim();
localStorage.setItem("appointmentMessage", message);

window.location.href = "payment.html";

});

}

// Sticky Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>30){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 4px 18px rgba(0,0,0,.08)";

}

});

// Smooth Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(

".about-card,.service-card,.doctor-card,.review-card"

).forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".6s";

observer.observe(el);

});

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if(menuToggle && nav){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

