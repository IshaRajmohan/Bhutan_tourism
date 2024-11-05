// // Function to smoothly scroll to a section
// function scrollToSection(id) {
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
// }

// // Shrink logo on scroll
// const logo = document.getElementById("logo");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//         logo.classList.add("small-logo"); // Apply s+maller size
//     } else {
//         logo.classList.remove("small-logo"); // Reset to original size
//     }
// });
// // script.js
// // script.js
// const tooltip = document.getElementById('tooltip');
// const tooltipImg = document.getElementById('tooltip-img');
// const tooltipDescription = document.getElementById('tooltip-description');

// const placesInfo = {
//     paro: {
//         description: "Paro is famous for its scenic landscapes and the iconic Tiger's Nest Monastery. It is also home to Bhutan's only international airport.",
//         image: "https://www.holidify.com/images/bgImages/PARO.jpg" // Update with the actual image path,
        
//     },
//     chhukha: {
//         description: "Chukha is notable for the Chukha Hydroelectric Plant, a significant economic contributor. It features picturesque landscapes and rivers.",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNO_m4HmQWPtNjDH0qPF02Dp1vRc9AsdHzA&s" // Update with the actual image path
//     },
//     ha: {
//         description: "Haa is renowned for its scenic beauty and cultural heritage, including the Haa Tsechu festival. The region offers a tranquil environment.",
//         image: "https://media.istockphoto.com/id/637152206/photo/bhutan-haa.jpg?s=612x612&w=0&k=20&c=6A5YrKNOrW6b_M53HJCJ2yKJ6Ls-ENunKf3BdJhDmOk=" // Update with the actual image path
//     },
//     samtse :{ 
//         description: "Samtekh is known for its diverse landscapes and rich cultural heritage. The district features traditional practices and local craftsmanship.",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPefonPURn1ay2llblmhA9xCNZQxSFACbR9A&s" // Update with the actual image path
//     },
    
//     thimpu :{ 
//         description: "Thimphu is the capital city, known for its modern infrastructure and traditional culture. It hosts key institutions, including the government and the King’s palace.",
//         image: "https://cdn.britannica.com/02/75702-050-C11357BD/Schoolchildren-hill-Thimpu-Bhutan.jpg" // Update with the actual image path
//     },
     

// tsirang: { 
//     description: "Tsirang is known for its agricultural lands and beautiful valleys. The district showcases a mix of ethnic cultures and traditional practices.",
//         image: "https://www.heavenlybhutan.com/wp-content/uploads/2020/09/Tsirang-Town.jpg" // Up
//  },

// dagana :{
//     description: "Dagana is recognized for its agricultural productivity, especially rice farming. The district showcases rich natural resources and cultural heritage.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Chukha_Bhutan-2004-a.JPG/350px-Chukha_Bhutan-2004-a.JPG" // Up
// },

// punakha: { 
//     description: "Punakha, the ancient capital, features the stunning Punakha Dzong at the confluence of two rivers. The district is known for its rich agricultural lands.",
//         image: "https://cdn.britannica.com/84/137384-050-6F2A5AB4/dzong-Punakha-Bhutan.jpg" // Up
//  },

// wangdue :{ 
//     description: "Wangdue Phodrang is known for its picturesque landscapes and the historic Wangdue Phodrang Dzong. The area is a gateway to various trekking routes.",
//         image: "https://static.wanderon.in/wp-content/uploads/2024/06/things-to-do-in-wangdue-phodrang.jpg" // Up
// },

// sarpang: { 
//     description: "Sarpang is known for its agricultural lands and cultural traditions. The district is rich in natural resources and ethnic diversity.",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtP2yAOUkF8F4PEo362EpGWlWyA1n3zdDprg&s" // Up
//  },


// trongsa: { 
//     description: "Trongsa is centrally located and famous for the impressive Trongsa Dzong, which has historical significance. The district offers stunning views of the Himalayas.",
//         image: "https://media.istockphoto.com/id/498062597/photo/the-dzong-of-trongsa.jpg?s=612x612&w=0&k=20&c=RDKN0SWcooMxn0PCYCGfAztKXW_5zTRgIHKlr6jlMm4=" // Up
//  },

// bumthang: {
//     description: "Bumthang is considered the spiritual heart of Bhutan, with numerous ancient temples and beautiful valleys. It hosts unique cultural festivals.",
//     image: "https://static.wanderon.in/wp-content/uploads/2024/05/bumthang-valley-bhutan-image.jpg" // Up

//  },


// zhemgang :{ 
//     description: "Zhemgang is known for its lush forests and diverse wildlife. It is a biodiversity hotspot, offering a glimpse into traditional Bhutanese life.",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJp7SJWTQ1P9oEupacfsiWGFkp7aE4pKkEHw&s" // Up
//  },


// trashigang: {
//     description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
//         image: "https://static.wanderon.in/wp-content/uploads/2024/05/trashigang.jpg" // Up
//  },

// monggar :{ 
//     description: "Paro: A picturesque valley known for the iconic Paro Taktsang (Tiger's Nest) monastery.",
//         image: "https://c8.alamy.com/comp/WT31PK/street-life-in-the-small-town-mongar-in-east-bhutan-WT31PK.jpg" // Up
//  },

// pem :{  
//     description: "Pema Gatshel is characterized by its rich cultural traditions and historical significance. The district features beautiful landscapes and local crafts.",
//         image: "https://kuenselonline.com/wp-content/uploads/2022/09/Pema-Gatshel-Sept-17-2022-1.jpg" // Up
// },


// lhuentse :{
    
//     description: "Lhuentse is famous for its traditional weaving and vibrant festivals. It features beautiful landscapes and historical significance.",
//         image: "https://www.bhutaninbound.com/blog/wp-content/uploads/2020/11/Feature-Photo-Lhuntse-1024x540.jpg" // Up
    
//  },


// samdrup :{
//     description: "Samdrup Jongkhar is an important border town with India, serving as a trade hub. It features diverse cultures and beautiful landscapes.",
//         image: "https://www.visitbhutan.com/cms/images/8730visit%20bhutan%20Samdrup%20Jongkhar%20Image%20(7).jpg" // Up
//  },

// gasa: {
//     description: "Gasa is known for its hot springs and stunning natural scenery. It is a remote area with rich biodiversity and trekking opportunities.",
//         image: "https://c8.alamy.com/comp/HJ5TWM/looking-down-the-mo-chhu-valley-from-gasa-dzong-bhutan-HJ5TWM.jpg" // Up
// },

// trashi :{ 
//     description: "Trashiyangtse is known for the ancient Chorten Kora stupa and rich culture. The area is celebrated for traditional crafts, especially woodwork.",
//         image: "https://www.shutterstock.com/image-photo/trashi-chhoe-dzong-thimphu-bhutan-260nw-452531443.jpg" // Up
//  }

//     // Add more places and their descriptions/images here
// };

// document.querySelectorAll('path').forEach(path => {
//     path.addEventListener('mouseover', function (e) {
//         const placeId = this.id;
//         tooltipImg.src = placesInfo[placeId].image; // Set image source
//         tooltipDescription.textContent = placesInfo[placeId].description; // Set tooltip text
//         tooltip.style.left = e.pageX + 'px'; // Position tooltip
//         tooltip.style.top = (e.pageY - 30) + 'px'; // Position tooltip above cursor
//         tooltip.style.visibility = 'visible'; // Show tooltip
//         tooltip.classList.add('fade-in'); // Add fade-in class
//         tooltip.style.opacity = 1; // Fade in effect
//     });

//     path.addEventListener('mousemove', function (e) {
//         tooltip.style.left = e.pageX + 'px'; // Update position on move
//         tooltip.style.top = (e.pageY - 30) + 'px'; // Update position on move
//     });

//     path.addEventListener('mouseout', function () {
//         tooltip.style.visibility = 'hidden'; // Hide tooltip
//         tooltip.style.opacity = 0; // Fade out effect
//         tooltip.classList.remove('fade-in'); // Remove fade-in class
//     });
// });

// /*carousel*/

// let currentIndex = 0;
// const slides = document.querySelectorAll('.carousel-slide');
// const totalSlides = slides.length;

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
//     updateCarousel();
// }

// function updateCarousel() {
//     const offset = currentIndex * -100; // Negative percentage to shift left
//     document.getElementById('carouselInner').style.transform = `translateX(${offset}%)`;
// }

// // Automatically cycle through slides every 3 seconds
// setInterval(nextSlide, 4000);

// // Optional: add smooth transition by duplicating the first slide at the end
// const firstSlide = slides[0].cloneNode(true);
// document.getElementById('carouselInner').appendChild(firstSlide);



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

// Tooltip functionality
const tooltip = document.getElementById('tooltip');
const tooltipImg = document.getElementById('tooltip-img');
const tooltipDescription = document.getElementById('tooltip-description');
const tooltipTitle = document.getElementById('tooltip-title'); // Get the title element

const placesInfo = {
    paro: {
        title: "Paro",
        description: "Paro is famous for its scenic landscapes and the iconic Tiger's Nest Monastery. It is also home to Bhutan's only international airport.",
        image: "https://www.holidify.com/images/bgImages/PARO.jpg"
    },
    chhukha: {
        title: "Chukha",
        description: "Chukha is notable for the Chukha Hydroelectric Plant, a significant economic contributor. It features picturesque landscapes and rivers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNO_m4HmQWPtNjDH0qPF02Dp1vRc9AsdHzA&s"
    },
    ha: {
        title: "Haa",
        description: "Haa is renowned for its scenic beauty and cultural heritage, including the Haa Tsechu festival. The region offers a tranquil environment.",
        image: "https://media.istockphoto.com/id/637152206/photo/bhutan-haa.jpg?s=612x612&w=0&k=20&c=6A5YrKNOrW6b_M53HJCJ2yKJ6Ls-ENunKf3BdJhDmOk="
    },
    samtse: { 
        title: "Samtekh",
        description: "Samtekh is known for its diverse landscapes and rich cultural heritage. The district features traditional practices and local craftsmanship.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPefonPURn1ay2llblmhA9xCNZQxSFACbR9A&s"
    },
    thimpu: { 
        title: "Thimphu",
        description: "Thimphu is the capital city, known for its modern infrastructure and traditional culture. It hosts key institutions, including the government and the King’s palace.",
        image: "https://cdn.britannica.com/02/75702-050-C11357BD/Schoolchildren-hill-Thimpu-Bhutan.jpg"
    },
    tsirang: { 
        title: "Tsirang",
        description: "Tsirang is known for its agricultural lands and beautiful valleys. The district showcases a mix of ethnic cultures and traditional practices.",
        image: "https://www.heavenlybhutan.com/wp-content/uploads/2020/09/Tsirang-Town.jpg"
    },
    dagana: {
        title: "Dagana",
        description: "Dagana is recognized for its agricultural productivity, especially rice farming. The district showcases rich natural resources and cultural heritage.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Chukha_Bhutan-2004-a.JPG/350px-Chukha_Bhutan-2004-a.JPG"
    },
    punakha: { 
        title: "Punakha",
        description: "Punakha, the ancient capital, features the stunning Punakha Dzong at the confluence of two rivers. The district is known for its rich agricultural lands.",
        image: "https://cdn.britannica.com/84/137384-050-6F2A5AB4/dzong-Punakha-Bhutan.jpg"
    },
    wangdue: { 
        title: "Wangdue Phodrang",
        description: "Wangdue Phodrang is known for its picturesque landscapes and the historic Wangdue Phodrang Dzong. The area is a gateway to various trekking routes.",
        image: "https://static.wanderon.in/wp-content/uploads/2024/06/things-to-do-in-wangdue-phodrang.jpg"
    },
    sarpang: { 
        title: "Sarpang",
        description: "Sarpang is known for its agricultural lands and cultural traditions. The district is rich in natural resources and ethnic diversity.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtP2yAOUkF8F4PEo362EpGWlWyA1n3zdDprg&s"
    },
    trongsa: { 
        title: "Trongsa",
        description: "Trongsa is centrally located and famous for the impressive Trongsa Dzong, which has historical significance. The district offers stunning views of the Himalayas.",
        image: "https://media.istockphoto.com/id/498062597/photo/the-dzong-of-trongsa.jpg?s=612x612&w=0&k=20&c=RDKN0SWcooMxn0PCYCGfAztKXW_5zTRgIHKlr6jlMm4="
    },
    bumthang: {
        title: "Bumthang",
        description: "Bumthang is considered the spiritual heart of Bhutan, with numerous ancient temples and beautiful valleys. It hosts unique cultural festivals.",
        image: "https://static.wanderon.in/wp-content/uploads/2024/05/bumthang-valley-bhutan-image.jpg"
    },
    zhemgang: { 
        title: "Zhemgang",
        description: "Zhemgang is known for its lush forests and diverse wildlife. It is a biodiversity hotspot, offering a glimpse into traditional Bhutanese life.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJp7SJWTQ1P9oEupacfsiWGFkp7aE4pKkEHw&s"
    },
    trashigang: {
        title: "Trashigang",
        description: "Trashigang is a district known for its vibrant culture and stunning landscapes, including the scenic Trashigang Dzong.",
        image: "https://static.wanderon.in/wp-content/uploads/2024/05/trashigang.jpg"
    },
    monggar: { 
        title: "Monggar",
        description: "Monggar is known for its beautiful valleys and traditional architecture, showcasing the rich culture of Bhutan.",
        image: "https://c8.alamy.com/comp/WT31PK/street-life-in-the-small-town-mongar-in-east-bhutan-WT31PK.jpg"
    },
    pem: {  
        title: "Pema Gatshel",
        description: "Pema Gatshel is characterized by its rich cultural traditions and historical significance. The district features beautiful landscapes and local crafts.",
        image: "https://kuenselonline.com/wp-content/uploads/2022/09/Pema-Gatshel-Sept-17-2022-1.jpg"
    },
    lhuentse: {
        title: "Lhuentse",
        description: "Lhuentse is famous for its traditional weaving and vibrant festivals. It features beautiful landscapes and historical significance.",
        image: "https://www.bhutaninbound.com/blog/wp-content/uploads/2020/11/Feature-Photo-Lhuntse-1024x540.jpg"
    },
    samdrup: {
        title: "Samdrup Jongkhar",
        description: "Samdrup Jongkhar is an important border town with India, serving as a trade hub. It features diverse cultures and beautiful landscapes.",
        image: "https://www.visitbhutan.com/cms/images/8730visit%20bhutan%20Samdrup%20Jongkhar%20Image%20(7).jpg"
    },
    gasa: {
        title: "Gasa",
        description: "Gasa is known for its hot springs and stunning natural scenery. It is a remote area with rich biodiversity and trekking opportunities.",
        image: "https://c8.alamy.com/comp/HJ5TWM/looking-down-the-mo-chhu-valley-from-gasa-dzong-bhutan-HJ5TWM.jpg"
    },
    trashi: { 
        title: "Trashiyangtse",
        description: "Trashiyangtse is known for the ancient Chorten Kora stupa and rich culture. The area is celebrated for traditional crafts, especially woodwork.",
        image: "https://www.shutterstock.com/image-photo/trashi-chhoe-dzong-thimphu-bhutan-260nw-452531443.jpg"
    }
};

// Mouseover event listeners for map paths
document.querySelectorAll('path').forEach(path => {
    path.addEventListener('mouseover', function (e) {
        const placeId = this.id;
        tooltipImg.src = placesInfo[placeId].image; // Set image source
        tooltipDescription.textContent = placesInfo[placeId].description; // Set tooltip text
        tooltipTitle.textContent = placesInfo[placeId].title; // Set tooltip title
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

// Carousel functionality
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

// Automatically cycle through slides every 4 seconds
setInterval(nextSlide, 4000);

// Optional: add smooth transition by duplicating the first slide at the end
const firstSlide = slides[0].cloneNode(true);
document.getElementById('carouselInner').appendChild(firstSlide);


