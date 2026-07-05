// =============================
// NAVBAR SCROLL
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        header.style.background = "#8B1E1E";
        header.style.transition = "0.4s";

    }else{

        header.style.background = "rgba(0,0,0,.45)";

    }

});


// =============================
// SCROLL ANIMATION
// =============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>{

    observer.observe(card);

});


// =============================
// GALLERY POPUP
// =============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        let popup = document.createElement("div");

        popup.className = "popup";

        popup.innerHTML = `

            <span class="close">&times;</span>

            <img src="${image.src}">

        `;

        document.body.appendChild(popup);

        popup.querySelector(".close").onclick=function(){

            popup.remove();

        }

        popup.onclick=function(e){

            if(e.target===popup){

                popup.remove();

            }

        }

    });

});


// =============================
// BACK TO TOP
// =============================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// COUNTER
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const c=+counter.innerText;

        const increment=target/100;

        if(c<target){

            counter.innerText=Math.ceil(c+increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target+"+";

        }

    }

    updateCounter();

});

// =======================
// HAMBURGER MENU
// =======================

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("active");

});