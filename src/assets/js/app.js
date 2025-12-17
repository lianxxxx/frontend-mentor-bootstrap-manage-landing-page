// for the nvabar functionality
      const navBar = document.getElementById("burgerBtn"); //burger button
      const closeBtn = document.getElementById("closeBtn"); //close button
      const navBarMenu = document.getElementById("navBarMenu"); //navbar menu
      const navLink = document.querySelectorAll(".nav-link"); //nav items

      //opening the navbar when the burger button is clicked
      navBar.addEventListener("click", () => {
        navBarMenu.classList.toggle("d-block");
        closeBtn.classList.toggle("d-none");
        navBar.classList.toggle("d-none");
      });

      //closing the navbar when the close button is clicked
      closeBtn.addEventListener("click", () => {
        closeBtn.classList.toggle("d-none");
        navBar.classList.toggle("d-none");
        navBarMenu.classList.remove("d-block");
      });

      //function for clicking the nav items
      navLink.forEach((n) =>
        n.addEventListener("click", () => {
          navBarMenu.classList.remove("d-block");
          navBar.classList.remove("d-none");
          closeBtn.classList.add("d-none");
        })
      );
 

//for image slider 

const cards = document.querySelectorAll('.testimonial .card');
const radios = document.querySelectorAll('.indicators input');
let currentIndex = 0;
let autoSlide = null;

// Move to specific card
function goToCard(index) {
  currentIndex = index;
  cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
  radios[index].checked = true;
}

// Start auto slide
function startAutoSlide() {
  if (!autoSlide) {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % radios.length;
      goToCard(currentIndex);
    }, 3000);
  }
}

// Stop auto slide
function stopAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = null;
}

// User clicks indicator
radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    goToCard(index);
    stopAutoSlide();
    startAutoSlide();
  });
});

// User swipes manually
document.querySelector('.testimonial').addEventListener('scroll', () => {
  stopAutoSlide();
  startAutoSlide();
});


const slider = document.querySelector('.testimonial');

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // slider is on screen → start auto slide
    startAutoSlide();
  } else {
    // slider off screen → stop auto slide
    stopAutoSlide();
  }
}, { threshold: 0.5 });

observer.observe(slider);


const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!emailInput.checkValidity()) {
    emailError.classList.remove('d-none'); // show error
    emailInput.classList.add('border', 'border-danger'); 
  } else {
    emailError.classList.add('d-none'); // hide error
    emailInput.classList.remove('border', 'border-danger'); // remove border if valid
  }
});