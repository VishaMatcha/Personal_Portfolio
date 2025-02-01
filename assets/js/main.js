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
    const workCardsContainer = document.querySelector(".work__cards"); // Container for all work cards

    workButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor action

            let targetId = this.getAttribute("data-target"); // Get target category

            // Find all cards related to the clicked category
            const targetCards = document.querySelectorAll(`.work__card[data-category="${targetId}"]`);

            // Check if at least one target card is currently visible
            let isVisible = Array.from(targetCards).some(card => card.style.display === "block");

            // Hide all cards first
            document.querySelectorAll(".work__card").forEach(card => {
                card.style.display = "none";
            });

            // If the cards were already visible, hide them
            if (!isVisible) {
                targetCards.forEach(card => {
                    card.style.display = "block";
                });
            }
        });
    });
});