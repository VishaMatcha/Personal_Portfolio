document.addEventListener("DOMContentLoaded", function () {
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
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });

    /*===== ACTIVE LINK HIGHLIGHT =====*/
    function scrollActive() {
        const scrollY = window.pageYOffset;

        document.querySelectorAll("section[id]").forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute("id"),
                sectionLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

            if (sectionLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionLink.classList.add("active-link");
                } else {
                    sectionLink.classList.remove("active-link");
                }
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
    emailjs.init("Rc8aCulxzBQkORIIZ"); // Your Public Key

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            emailjs.sendForm("service_7fhg4t7", "template_rcw3jjz", this)
                .then(() => {
                    alert("Message Sent Successfully!");
                    this.reset();
                })
                .catch(error => {
                    alert("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                });
        });
    }

    /*===== WORK SECTION - SHOW HIDDEN CARDS =====*/
    const workButtons = document.querySelectorAll(".work-btn");

    workButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor action

            let targetId = this.getAttribute("data-target"); // Get target category
            const targetCards = document.querySelectorAll(`.work__card[data-category="${targetId}"]`);

            // Toggle visibility
            let isVisible = Array.from(targetCards).some(card => card.style.display === "block");

            document.querySelectorAll(".work__card").forEach(card => (card.style.display = "none"));

            if (!isVisible) {
                targetCards.forEach(card => (card.style.display = "block"));
            }
        });
    });

    /*===== SKILLS SECTION - SHOW/HIDE CARDS =====*/
    const skillsButtons = document.querySelectorAll(".skills-btn");

    skillsButtons.forEach(button => {
        button.addEventListener("click", function () {
            let target = this.getAttribute("data-target");
            const targetCard = document.querySelector(`.skills__card[data-category="${target}"]`);

            // Hide all skill cards
            document.querySelectorAll(".skills__card").forEach(card => (card.style.display = "none"));

            // Show selected skill card
            if (targetCard) {
                targetCard.style.display = "block";
            }
        });
    });
});
            
