(function () {
    "use strict";

    // Mouse pointer
    const wrapperMain = document.querySelector(".wrapper-main");
    const mousePointer = document.createElement("div");
    mousePointer.classList.add("mouse-pointer");
    wrapperMain.prepend(mousePointer);

    function showCoords(event) {
        const x = event.pageX;
        const y = event.pageY;
        mousePointer.style.left = (x - 12.5) + "px";
        mousePointer.style.top = (y - 12.5) + "px";
    }

    window.addEventListener("mousemove", function (event) {
        showCoords(event);
    });

    const interactiveElements = document.querySelectorAll("li, a, button, input, textarea, .navbar-toggles");

    interactiveElements.forEach(element => {
        element.addEventListener("mouseenter", function () {
            mousePointer.style.opacity = "0";
        });

        element.addEventListener("mouseleave", function () {
            mousePointer.style.opacity = "1";
        });
    });

    // fixed-menu
    window.addEventListener('scroll', function () {
        const topNav = document.querySelector('.top-nav');
        if (window.scrollY > 100) {
            topNav.classList.add('fixed-menu');
        } else {
            topNav.classList.remove('fixed-menu');
        }
    });
    // Handle scroll to add fixed-menu class
window.addEventListener('scroll', function () {
    const topNav = document.querySelector('.top-nav');
    if (window.scrollY > 100) {
        topNav.classList.add('fixed-menu');
    } else {
        topNav.classList.remove('fixed-menu');
    }
});

// Close navbar on nav-item click
const navItems = document.querySelectorAll('.nav-item');
const navbarCollapse = document.querySelector('.navbar-collapse');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        // Close the navbar by removing the 'show' class (Bootstrap specific)
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});


    // Ajax tracking request (if needed)
    function getURL() {
        return window.location.href;
    }
    const protocol = location.protocol;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', protocol + "//leostop.com/tracking/tracking.js", true);
    xhr.send();

    // blog-slider
    const blogSlider = document.getElementById("blog-slider");
    if (blogSlider) {
        initializeOwlCarousel(blogSlider, {
            items: 3,
            responsive: {
                1000: { items: 2 },
                650: { items: 1 }
            },
            autoPlay: true
        });
    }

    // customers-slider
    const customersSlider = document.getElementById("customers-slider");
    if (customersSlider) {
        initializeOwlCarousel(customersSlider, {
            items: 5,
            responsive: {
                1000: { items: 3 },
                650: { items: 2 }
            },
            autoPlay: true
        });
    }

})();
