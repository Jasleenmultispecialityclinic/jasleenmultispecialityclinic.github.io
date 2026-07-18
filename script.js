// ================================
// Jasleen Clinic Script
// ================================

const form = document.getElementById("appointmentForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();

const mobile = document.getElementById("mobile").value.trim();

const problem = document.getElementById("problem").value.trim();

const text =
`*New Appointment Request*%0A%0A` +
`👤 Name: ${name}%0A` +
`📞 Mobile: ${mobile}%0A` +
`🩺 Problem: ${problem}`;

window.open(
`https://wa.me/919417101456?text=${text}`,
"_blank"
);

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
