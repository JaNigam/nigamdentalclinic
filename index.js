
//responsive navigation bar


var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },


    breakpoints: {
        640: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});



var swiper = new Swiper(".swiper-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    autoplay: {
    delay:2000,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




//form testing
function formTesting() {
    if (document.getElementById('name').value == '') {
        alert('Please enter your name');
        return false;
    }
    if (document.getElementById('email').value == '') {
        alert('Please enter your email');
        return false;
    }
    if (document.getElementById('message').value == '') {
        alert('Please enter your message');
        return false;
    }
    if (document.getElementById('phone').value == '') {
        alert('Please enter your message');
        return false;
    }
    if(document.getElementById('phone').value.length < 10){
        alert('Please enter a valid phone number');
        return false;
    }
    else {
        alert("Form Submitted Successfully");
    }

}


