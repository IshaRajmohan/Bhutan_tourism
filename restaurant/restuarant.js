const restaurants = [
    {
        name: "Ambient Café",
        rating: 5,
        location: "Thimphu",
        description: "A cozy café known for its coffee and pastries.",
        imageUrl: "https://static.wanderon.in/wp-content/uploads/2024/03/featured1.jpg",
        link:"https://www.tripadvisor.in/Restaurant_Review-g293845-d1862113-Reviews-Ambient_Cafe-Thimphu_Thimphu_District.html"
    },
    
    
    {
        name: "Zombala 2",
        rating: 3,
        location: "Thimphu",
        description: "Popular spot for momos and traditional food.",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipO0UwCbY3qpIzg13eU3lo05AZkkrd4C7ieLK5os=w492-h369-k-no",
        link:"https://www.tripadvisor.in/Restaurant_Review-g293845-d2264697-Reviews-Zombala2_Restaurant-Thimphu_Thimphu_District.html"
    },
    {
        name: "Cloud 9",
        rating: 5,
        location: "Thimphu",
        description: "Modern restaurant with a fusion of local and international dishes.",
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/19/63/5d/31/cloud9-cafe-bar-at-our.jpg",
        link:"https://www.tripadvisor.in/Restaurant_Review-g293845-d7183112-Reviews-Cloud9_Cafe_bar-Thimphu_Thimphu_District.html"
    },
    
    
    {
        name: "Seasons Pizzeria",
        rating: 3,
        location: "Thimphu",
        description: "Best known for its pizzas, pasta, and relaxed atmosphere.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwxW4SO8UlUR3GimtzGVGNoB3SFVYcwvVcg&s",
        link:"https://www.tripadvisor.in/Restaurant_Review-g293845-d1120206-Reviews-Seasons_Restaurant-Thimphu_Thimphu_District.html"
    },
    {
        name: "Folk Heritage Restaurant",
        rating: 5,
        location: "Thimphu",
        description: "Traditional Bhutanese food served in a rustic setting.",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/53/73/60/folk-heritage-museum.jpg?w=1200&h=-1&s=1",
        link:"https://www.tripadvisor.in/Restaurant_Review-g293845-d2548477-Reviews-Folk_Heritage_Museum_Restaurant-Thimphu_Thimphu_District.html"
    },
    
    
    {
        name: "Druk Pizza",
        rating: 3,
        location: "Thimphu",
        description: "Popular for unique Bhutanese-style pizza with local ingredients.",
        imageUrl: "https://www.heavenlybhutan.com/wp-content/uploads/2019/05/Druk-Kitchen-Restaurant.png",
        link:"https://www.tripadvisor.in/Restaurant_Review-g293845-d2313890-Reviews-Druk_Pizza-Thimphu_Thimphu_District.html"
    }
];

function displayRestaurants(restaurantsToDisplay) {
    const restaurantsGrid = document.getElementById("restaurantsGrid");
    restaurantsGrid.innerHTML = "";

    restaurantsToDisplay.forEach((restaurant) => {
        const restaurantCard = document.createElement("div");
        restaurantCard.classList.add("restaurant-card");
        
        restaurantCard.innerHTML = `
            <img src="${restaurant.imageUrl}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-content">
                <h3 class="restaurant-title">${restaurant.name}</h3>
                <div class="restaurant-rating">${'★'.repeat(restaurant.rating)}</div>
                <div class="restaurant-location">${restaurant.location}</div>
                <p class="restaurant-description">${restaurant.description}</p>
                <a href="${restaurant.link}" class="book-button">Book Now</a>
            </div>
        `;
        
        restaurantsGrid.appendChild(restaurantCard);
    });
}

document.getElementById("search").addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase();
    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery)
    );
    displayRestaurants(filteredRestaurants);
});

document.querySelectorAll(".star-button").forEach((button) => {
    button.addEventListener("click", function () {
        document.querySelector(".star-button.active").classList.remove("active");
        this.classList.add("active");

        const starRating = this.getAttribute("data-stars");
        const filteredRestaurants =
            starRating === "all"
                ? restaurants
                : restaurants.filter((restaurant) => restaurant.rating == starRating);

        displayRestaurants(filteredRestaurants);
    });
});

displayRestaurants(restaurants);
// Function to smoothly scroll to a section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth"});
}

// Shrink logo on scroll
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        logo.classList.add("small-logo"); // Apply smaller 
    } else {
        logo.classList.remove("small-logo"); // Reset to or
    }
});