/*===== MENU SHOW & HIDE =====*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

/*===== REMOVE MENU ON LINK CLICK =====*/
navLinks.forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("show");
}));

/*===== ACTIVE LINK HIGHLIGHT =====*/
function scrollActive() {
    const scrollY = window.pageYOffset;
    document.querySelectorAll("section[id]").forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
ScrollReveal().reveal(".home__data, .about__img, .skills__box, .work__img, .contact__container", {
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true
});

/*===== CONTACT FORM SUBMISSION USING EMAILJS =====*/
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Rc8aCulxzBQkORIIZ"); // Your Public Key

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm("service_7fhg4t7", "template_rcw3jjz", this)
            .then(() => {
                alert("Message Sent Successfully!");
                this.reset();
            }, (error) => {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});

/*===== WORK SECTION - SHOW HIDDEN CARDS =====*/
document.addEventListener("DOMContentLoaded", function () {
    const workButtons = document.querySelectorAll(".work-btn"); // Select all buttons
    const workCards = document.querySelectorAll(".work__card"); // Select all hidden cards

    workButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor action

            let targetId = this.getAttribute("data-target"); // Get target card ID

            // Hide all cards first
            workCards.forEach(card => {
                card.style.display = "none";
            });

            // Show all cards that match the clicked category
            document.querySelectorAll(`.work__card[data-category="${targetId}"]`).forEach(card => {
                card.style.display = "block";
            });
        });
    });
});

