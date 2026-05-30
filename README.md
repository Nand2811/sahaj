

<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Sahaj Enterprise</title>

<link rel="icon" href="logo.png">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>

<style>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --primary:#fbc02d;
  --accent:#ff6f00;
  --bg:#fffde7;
  --text:#2c2c2c;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Poppins',sans-serif;
  background:var(--bg);
  color:var(--text);
  transition:0.4s;
  overflow-x:hidden;
}

body.dark-mode{
  background:#121212;
  color:#f0f0f0;
}

/* Loader */

#loader{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#fffde7;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
}

.loader-circle{
  width:60px;
  height:60px;
  border:6px solid #fbc02d;
  border-top:6px solid #ff6f00;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin{
  100%{
    transform:rotate(360deg);
  }
}

/* Navbar */

.navbar{
  background:linear-gradient(90deg,#fdd835,#ffb300);
  padding:18px 30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:sticky;
  top:0;
  z-index:1000;
  flex-wrap:wrap;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

body.dark-mode .navbar{
  background:linear-gradient(90deg,#222,#333);
}

.logo{
  font-size:1.7rem;
  font-weight:700;
}

.nav-links{
  display:flex;
  align-items:center;
  gap:20px;
  transition:0.4s;
}

.nav-links a{
  text-decoration:none;
  color:#000;
  font-weight:600;
  transition:0.3s;
  position:relative;
}

.nav-links a::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-5px;
  width:0;
  height:2px;
  background:#fff;
  transition:0.3s;
}

.nav-links a:hover::after{
  width:100%;
}

body.dark-mode .nav-links a{
  color:#fff;
}

/* Toggle */

.toggle-container{
  display:flex;
  align-items:center;
}

#darkModeToggle{
  display:none;
}

.toggle-label{
  width:75px;
  height:38px;
  background:linear-gradient(135deg,#ffd54f,#ffb300);
  border-radius:50px;
  position:relative;
  cursor:pointer;
  transition:0.4s;
  box-shadow:0 4px 10px rgba(0,0,0,0.2);
}

.toggle-ball{
  position:absolute;
  width:30px;
  height:30px;
  border-radius:50%;
  background:#fff;
  top:4px;
  left:4px;
  transition:0.4s;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:16px;
}

.toggle-ball::before{
  content:"☀️";
}

#darkModeToggle:checked + .toggle-label{
  background:linear-gradient(135deg,#232526,#414345);
}

#darkModeToggle:checked + .toggle-label .toggle-ball{
  transform:translateX(37px);
  background:#1e1e1e;
}

#darkModeToggle:checked + .toggle-label .toggle-ball::before{
  content:"🌙";
}

/* Hamburger */

.hamburger{
  display:none;
  flex-direction:column;
  gap:5px;
  cursor:pointer;
}

.hamburger div{
  width:25px;
  height:3px;
  background:#000;
  transition:0.3s;
}

body.dark-mode .hamburger div{
  background:#fff;
}

/* Sections */

section{
  padding:90px 25px;
}

/* Typography */

h2{
  font-size:2.4rem;
  margin-bottom:20px;
  font-weight:700;
}

p{
  line-height:1.8;
}

/* Hero */

.hero{
  text-align:center;
  padding:130px 20px;
  background:linear-gradient(to right,#fff8e1,#fffde7);
}

body.dark-mode .hero{
  background:linear-gradient(to right,#1b1b1b,#121212);
}

.hero h2{
  font-size:3rem;
}

.hero p{
  font-size:1.2rem;
  opacity:0.8;
}

/* Products */

.product-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:25px;
  margin-top:30px;
}

.product-card{
  background:#fff;
  padding:25px;
  border-radius:18px;
  box-shadow:0 8px 20px rgba(0,0,0,0.08);
  transition:0.4s;
  text-align:center;
  font-weight:500;
  opacity:0;
  transform:translateY(50px);
}

.product-card.show{
  opacity:1;
  transform:translateY(0);
}

.product-card:hover{
  transform:translateY(-10px);
  box-shadow:0 12px 30px rgba(0,0,0,0.15);
}

body.dark-mode .product-card{
  background:#1f1f1f;
}

/* Forms */

form{
  max-width:750px;
  margin:auto;
  background:#ffffffdd;
  padding:40px;
  border-radius:20px;
  box-shadow:0 10px 25px rgba(0,0,0,0.1);
}

body.dark-mode form{
  background:#1e1e1e;
}

label{
  display:block;
  margin-bottom:18px;
  font-weight:500;
}

input,
textarea,
select{
  width:100%;
  padding:14px;
  margin-top:8px;
  border-radius:12px;
  border:1px solid #ccc;
  font-family:inherit;
  font-size:15px;
}

body.dark-mode input,
body.dark-mode textarea,
body.dark-mode select{
  background:#2a2a2a;
  border:1px solid #555;
  color:#fff;
}

textarea{
  resize:none;
}

button{
  padding:13px 22px;
  border:none;
  border-radius:30px;
  background:var(--accent);
  color:#fff;
  font-weight:600;
  cursor:pointer;
  margin-top:10px;
  transition:0.3s;
  font-size:15px;
}

button:hover{
  transform:scale(1.05);
}

/* Product Item */

.product-item{
  background:#fff;
  border:1px dashed #ccc;
  padding:18px;
  border-radius:12px;
  margin-bottom:15px;
}

body.dark-mode .product-item{
  background:#2c2c2c;
  border:1px dashed #555;
}

.remove-btn{
  background:#d32f2f;
}

/* Footer */

footer{
  background:linear-gradient(90deg,#fdd835,#ffb300);
  padding:50px 20px;
  margin-top:40px;
}

body.dark-mode footer{
  background:linear-gradient(90deg,#222,#333);
}

.footer-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
  max-width:1200px;
  margin:auto;
}

.footer-box h3{
  margin-bottom:15px;
}

.footer-box p,
.footer-box a{
  line-height:2;
  text-decoration:none;
  color:inherit;
}

.footer-bottom{
  text-align:center;
  margin-top:35px;
  padding-top:20px;
  border-top:1px solid rgba(0,0,0,0.2);
}

/* Mobile */

@media(max-width:768px){

  .nav-links{
    width:100%;
    flex-direction:column;
    overflow:hidden;
    max-height:0;
    opacity:0;
    margin-top:10px;
  }

  .nav-links.active{
    max-height:500px;
    opacity:1;
    padding:15px 0;
  }

  .hamburger{
    display:flex;
  }

  .hero h2{
    font-size:2rem;
  }

  h2{
    font-size:2rem;
  }

}

</style>
</head>

<body>

<!-- Loader -->

<div id="loader">
  <div class="loader-circle"></div>
</div>

<header class="navbar">

  <div class="logo">
    Sahaj Enterprise
  </div>

  <div class="nav-links" id="navLinks">

    <a href="#home">
      <i class="fa-solid fa-house"></i>
      Home
    </a>

    <a href="#products">
      <i class="fa-solid fa-box-open"></i>
      Products
    </a>

    <a href="#purchase">
      <i class="fa-solid fa-cart-shopping"></i>
      Purchase
    </a>

    <a href="#contact">
      <i class="fa-solid fa-phone"></i>
      Contact
    </a>

    <div class="toggle-container">

      <input type="checkbox" id="darkModeToggle">

      <label for="darkModeToggle" class="toggle-label">
        <span class="toggle-ball"></span>
      </label>

    </div>

  </div>

  <div class="hamburger" id="hamburger">
    <div></div>
    <div></div>
    <div></div>
  </div>

</header>

<!-- Hero -->

<section id="home" class="hero">

  <h2>Your Trusted Packaging Partner</h2>

  <p>
    Plastics • Biodegradable • Stationery • Packaging Solutions
  </p>

</section>

<!-- Products -->

<section id="products">

  <h2 style="text-align:center;">Our Products</h2>

  <div class="product-grid" id="productGrid"></div>

</section>

<!-- Purchase -->

<section id="purchase">

  <h2 style="text-align:center;">
    Quotation Request
  </h2>

  <form>

    <label>
      Customer Name

      <input
      type="text"
      id="pname"
      placeholder="Enter Customer Name"
      required>

    </label>

    <label>
      Mobile Number

      <input
      type="tel"
      id="mobile"
      placeholder="Enter Mobile Number"
      required>

    </label>

    <div id="productContainer"></div>

    <button type="button" onclick="addProduct()">
      ➕ Add Product
    </button>

    <button type="button" onclick="sendPurchaseToWhatsApp()">
      📩 Quotation Request
    </button>

  </form>

</section>

<!-- Contact -->

<section id="contact">

  <h2 style="text-align:center;">
    Contact Us
  </h2>

  <form onsubmit="sendContact(event)">

    <label>
      Name

      <input
      type="text"
      id="cname"
      placeholder="Enter Your Name"
      required>

    </label>

    <label>
      Mobile

      <input
      type="tel"
      id="cmobile"
      placeholder="Enter Mobile Number"
      required>

    </label>

    <label>
      Email

      <input
      type="email"
      id="cemail"
      placeholder="Enter Email Address"
      required>

    </label>

    <label>
      Message

      <textarea
      id="cmessage"
      placeholder="Write Your Message"
      required></textarea>

    </label>

    <button type="submit">
      📨 Send Inquiry
    </button>

  </form>

</section>

<!-- Footer -->

<footer>

  <div class="footer-grid">

    <div class="footer-box">

      <h3>
        <i class="fa-solid fa-building"></i>
        Sahaj Enterprise
      </h3>

      <p>
        Trusted supplier of packaging,
        biodegradable and stationery products.
      </p>

    </div>

    <div class="footer-box">

      <h3>
        <i class="fa-solid fa-link"></i>
        Quick Links
      </h3>

      <p><a href="#home">Home</a></p>
      <p><a href="#products">Products</a></p>
      <p><a href="#purchase">Purchase</a></p>
      <p><a href="#contact">Contact</a></p>

    </div>

    <div class="footer-box">

      <h3>
        <i class="fa-solid fa-address-card"></i>
        Contact Info
      </h3>

      <p>
        <i class="fa-solid fa-location-dot"></i>

        <a
        href="https://www.google.com/maps?q=22.235291922195938,70.6784906555683"
        target="_blank">

        Krishna Complex, GIDC Metoda

        </a>

      </p>

      <p>
        <i class="fa-solid fa-phone"></i>
        Paresh: 99799 50667
      </p>

      <p>
        <i class="fa-solid fa-phone"></i>
        Kuldip: 95862 70971
      </p>

      <p>
        <i class="fa-brands fa-whatsapp"></i>
        WhatsApp Available
      </p>

    </div>

  </div>

  <div class="footer-bottom">

    © 2026 Sahaj Enterprise. All Rights Reserved.

  </div>

</footer>

<script>

/* WhatsApp Number */

const WHATSAPP_NUMBER = "919016655358";

/* Loader */

window.addEventListener("load", () => {

  document.getElementById("loader").style.display = "none";

});

/* Products */

const PRODUCTS = [

  "PVC સીન્ક / PVC Sink",
  "LD સીન્ક / LD Sink",
  "LD સ્ટ્રેચ ફીલ્મ / LD Stretch Film",
  "PP બેગ / PP Bag",
  "LD બેગ / LD Bag",
  "HM બેગ / HM Bag",
  "LL બેગ / LL Bag",
  "બબલ રોલ / Bubble Roll",
  "A4 પ્રિન્ટ પેપર / A4 Print Paper",
  "BOPP ટેપ / BOPP Tape",
  "BOPP બેગ / BOPP Bag",
  "LD રોલ / LD Roll",
  "બોક્સ પટ્ટી / Box Tape",
  "ફાઈબર / Fiber",
  "તાલપત્રી / Palm Leaf Plate",
  "ફોમ રોલ / Foam Roll",
  "પેપર કપ / Paper Cup",
  "પેપર બેગ / Paper Bag"

];

const productGrid =
document.getElementById("productGrid");

const productContainer =
document.getElementById("productContainer");

/* Product Cards */

PRODUCTS.forEach((product,index) => {

  const card =
  document.createElement("div");

  card.className = "product-card";

  card.innerHTML = `
    <i class="fa-solid fa-box" style="font-size:35px;color:#ff6f00;margin-bottom:15px;"></i>
    <h3>${product}</h3>
  `;

  productGrid.appendChild(card);

  setTimeout(() => {

    card.classList.add("show");

  }, index * 120);

});

/* Create Select */

function createSelect(){

  const select =
  document.createElement("select");

  select.required = true;

  select.innerHTML =
  `<option value="">-- Select Product --</option>`;

  PRODUCTS.forEach(product => {

    const option =
    document.createElement("option");

    option.value = product;

    option.textContent = product;

    select.appendChild(option);

  });

  return select;

}

/* Add Product */

function addProduct(){

  const div =
  document.createElement("div");

  div.className = "product-item";

  div.appendChild(createSelect());

  const qty =
  document.createElement("label");

  qty.innerHTML = `
    Quantity
    <input type="number" min="1" value="1">
  `;

  div.appendChild(qty);

  const removeBtn =
  document.createElement("button");

  removeBtn.type = "button";

  removeBtn.className = "remove-btn";

  removeBtn.textContent = "Remove";

  removeBtn.onclick = () => div.remove();

  div.appendChild(removeBtn);

  productContainer.appendChild(div);

}

/* Send WhatsApp */

function sendPurchaseToWhatsApp(){

  const name =
  document.getElementById("pname").value.trim();

  const mobile =
  document.getElementById("mobile").value.trim();

  if(name === "" || mobile.length !== 10){

    alert("Enter valid Name & 10 digit Mobile Number");

    return;

  }

  let msg =
  `*Quotation Request*%0A%0A`;

  msg +=
  `Customer Name: ${name}%0A`;

  msg +=
  `Mobile Number: ${mobile}%0A%0A`;

  msg +=
  `*Product List*%0A`;

  let hasProduct = false;

  document
  .querySelectorAll(".product-item")
  .forEach(item => {

    const product =
    item.querySelector("select").value;

    const qty =
    item.querySelector("input").value;

    if(product){

      hasProduct = true;

      msg +=
      `• ${product} - Qty: ${qty}%0A`;

    }

  });

  if(!hasProduct){

    alert("Please Add Product");

    return;

  }

  const url =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  window.open(url,"_blank");

}

/* Contact Form */

function sendContact(e){

  e.preventDefault();

  let msg =
  `*New Inquiry*%0A%0A`;

  msg +=
  `Name: ${cname.value}%0A`;

  msg +=
  `Mobile: ${cmobile.value}%0A`;

  msg +=
  `Email: ${cemail.value}%0A`;

  msg +=
  `Message: ${cmessage.value}`;

  const url =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  window.open(url,"_blank");

  e.target.reset();

}

/* Dark Mode */

const toggle =
document.getElementById("darkModeToggle");

if(localStorage.getItem("darkMode") === "enabled"){

  document.body.classList.add("dark-mode");

  toggle.checked = true;

}

toggle.addEventListener("change", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    localStorage.setItem("darkMode","enabled");

  }else{

    localStorage.setItem("darkMode","disabled");

  }

});

/* Hamburger */

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* Auto Close Menu */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    if(window.innerWidth <= 768){

      navLinks.classList.remove("active");

    }

  });

});

</script>

</body>
</html>
