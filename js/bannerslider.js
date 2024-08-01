let count = 1;
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

function increment() {
    if (count === 3) {
        count = 1;
    } else {
        count++;
    }
}

function showslide(n) {
    increment();

    if (count === 1) {
        slide1.style.display = "flex";
        slide2.style.display = "none";
        slide3.style.display = "none";
    } else if (count === 2) {
        slide1.style.display = "none";
        slide2.style.display = "flex";
        slide3.style.display = "none";
    } else {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "flex";
    }
}

setInterval(function () {
    showslide();
}, 3000);


document.querySelectorAll('.gly_img_box button').forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".img_popup img").src = btn.parentElement.childNodes[1].getAttribute("src");
        document.querySelector(".img_popup").style.display = "block";
    };

    btn.addEventListener("mouseover", () => {
        btn.parentElement.childNodes[1].style.transform = "scale(1.5)";
    });

    btn.addEventListener("mouseout", () => {
        btn.parentElement.childNodes[1].style.transform = "scale(1.0)";
    });
});

document.querySelector(".img_popup span").onclick = () => {
    document.querySelector('.img_popup').style.display = "none"
};



let swiper = new Swiper(".myswiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

 breakpoints: {
        350: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
  });