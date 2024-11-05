// Function to smoothly scroll to a section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Shrink logo on scroll
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        logo.classList.add("small-logo"); // Apply smaller size
    } else {
        logo.classList.remove("small-logo"); // Reset to original size
    }
});
// script.js
// script.js
const tooltip = document.getElementById('tooltip');
const tooltipImg = document.getElementById('tooltip-img');
const tooltipDescription = document.getElementById('tooltip-description');

const placesInfo = {
    paro: {
        description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Update with the actual image path
    },
    chhukha: {
        description: "Chhukha: Known for its hydroelectric project and beautiful landscapes.",
        image: "images/chhukha.jpg" // Update with the actual image path
    },
    ha: {
        description: "Ha: A peaceful valley, famous for its scenic beauty and traditional culture.",
        image: "images/ha.jpg" // Update with the actual image path
    },
    samtse :{ 
        description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Update with the actual image path
    },
    
    thimpu :{ 
        description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Update with the actual image path
    },
     

tsirang: { 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },

dagana :{
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
},

punakha: { 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },

wangdue :{ 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
},

sarpang: { 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },


trongsa: { 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },

bumthang: {
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up

 },


zhemgang :{ 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },


trashigang: {
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },

monggar :{ 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },

pem :{  
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
},


lhuentse :{
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },


samdrup :{
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 },

gasa: {
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
},

trashi :{ 
    description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
        image: "landingImage.jpg" // Up
 }

    // Add more places and their descriptions/images here
};

document.querySelectorAll('path').forEach(path => {
    path.addEventListener('mouseover', function (e) {
        const placeId = this.id;
        tooltipImg.src = placesInfo[placeId].image; // Set image source
        tooltipDescription.textContent = placesInfo[placeId].description; // Set tooltip text
        tooltip.style.left = e.pageX + 'px'; // Position tooltip
        tooltip.style.top = (e.pageY - 30) + 'px'; // Position tooltip above cursor
        tooltip.style.visibility = 'visible'; // Show tooltip
        tooltip.classList.add('fade-in'); // Add fade-in class
        tooltip.style.opacity = 1; // Fade in effect
    });

    path.addEventListener('mousemove', function (e) {
        tooltip.style.left = e.pageX + 'px'; // Update position on move
        tooltip.style.top = (e.pageY - 30) + 'px'; // Update position on move
    });

    path.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden'; // Hide tooltip
        tooltip.style.opacity = 0; // Fade out effect
        tooltip.classList.remove('fade-in'); // Remove fade-in class
    });
});

/*carousel*/

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
    updateCarousel();
}

function updateCarousel() {
    const offset = currentIndex * -100; // Negative percentage to shift left
    document.getElementById('carouselInner').style.transform = `translateX(${offset}%)`;
}

// Automatically cycle through slides every 3 seconds
setInterval(nextSlide, 4000);

// Optional: add smooth transition by duplicating the first slide at the end
const firstSlide = slides[0].cloneNode(true);
document.getElementById('carouselInner').appendChild(firstSlide);





