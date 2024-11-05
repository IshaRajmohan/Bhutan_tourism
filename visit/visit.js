
let attractions = [];
let selectedTag = 'all';

function fetchAttractions() {
    // Simulating API call with setTimeout
    setTimeout(() => {
        attractions = [
            {
                id: 1,
                name: "Tiger's Nest Monastery",
                image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Bhutan-Paro-Tigers-Nest-6-Website-1920x1080-fill-gravityauto.jpg",
                rating: 4.8,
                reviews: 1520,
                location: "Paro",
                description: "Iconic clifftop monastery with breathtaking views.",
                tags: ["Cultural", "Hiking"]
            },
            {
                id: 2,
                name: "Punakha Dzong",
                image: "https://www.andbeyond.com/wp-content/uploads/sites/5/bhutan-punakha-dzong-river.jpg",
                rating: 4.6,
                reviews: 980,
                location: "Punakha",
                description: "Majestic fortress at the confluence of two rivers.",
                tags: ["Historical", "Architecture"]
            },
            {
                id: 3,
                name: "Phobjikha Valley",
                image: "https://thrillingtravel.in/wp-content/uploads/2018/05/Phobjikha-valley_Bhutan-1024x683.jpg",
                rating: 4.7,
                reviews: 750,
                location: "Wangdue Phodrang",
                description: "Beautiful valley known for black-necked cranes.",
                tags: ["Nature", "Wildlife"]
            },
            {
                id: 4,
                name: "Thimphu Buddha",
                image: "https://media1.thrillophilia.com/filestore/p9t9uw3n8r6gss9ylp90t6z28rt9_shutterstock_1255335592.jpg",
                rating: 4.5,
                reviews: 1200,
                location: "Thimphu",
                description: "Giant Buddha statue overlooking the capital city.",
                tags: ["Cultural", "Sightseeing"]
            },
            {
                id: 5,
                name: "Dochula Pass",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Druk_Wangyal_Chortens%2C_Bhutan_01.jpg",
                rating: 4.4,
                reviews: 620,
                location: "Between Thimphu and Punakha",
                description: "Mountain pass with 108 memorial chortens and Himalayan views.",
                tags: ["Scenic", "Historical"]
            },
            {
                id: 6,
                name: "Haa Valley",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pjoDbD30g45q6A-8weGrfpneJGdgvq57Jw&s",
                rating: 4.3,
                reviews: 410,
                location: "Haa",
                description: "Remote and picturesque valley with traditional Bhutanese culture.",
                tags: ["Nature", "Cultural"]
            },
            {
                id: 7,
                name: "Jigme Dorji National Park",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4a/12/38/jomolhari-basecamp.jpg?w=1200&h=-1&s=1",
                rating: 4.9,
                reviews: 540,
                location: "Thimphu",
                description: "Biodiverse national park with stunning landscapes and wildlife.",
                tags: ["Nature", "Adventure"]
            },
            {
                id: 8,
                name: "Gangtey Monastery",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Gangteng_monastery_2019-08-23_b.jpg/640px-Gangteng_monastery_2019-08-23_b.jpg",
                rating: 4.6,
                reviews: 390,
                location: "Phobjikha",
                description: "Famous monastery known for its impressive architecture.",
                tags: ["Cultural", "Historical"]
            },
            {
                id: 9,
                name: "Bumthang Valley",
                image: "https://www.authenticindiatours.com/app/uploads/2022/04/Bumthang-Valley-Bhutan-1400x550-c-default.jpg",
                rating: 4.8,
                reviews: 680,
                location: "Bumthang",
                description: "Cultural heartland of Bhutan with ancient temples and monasteries.",
                tags: ["Cultural", "Nature"]
            },
            {
                id: 10,
                name: "Chale La Pass",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2q1cf9S1nHv3qNcXU0EVLza1Pe4JvKKiZA&s",
                rating: 4.5,
                reviews: 330,
                location: "Paro",
                description: "Scenic mountain pass with panoramic views.",
                tags: ["Scenic", "Adventure"]
            }
        ];
        renderAttractions();
        renderTagFilters();
    }, 1000);
}

function renderAttractions() {
    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    const filteredAttractions = attractions.filter(attraction => 
        (selectedTag === 'all' || attraction.tags.includes(selectedTag)) &&
        attraction.name.toLowerCase().includes(document.getElementById('search').value.toLowerCase())
    );

    filteredAttractions.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image">
            <div class="attraction-content">
                <h2 class="attraction-title">${attraction.name}</h2>
                <div class="attraction-rating">
                    <span class="star-icon">⭐</span>
                    <span>${attraction.rating}</span>
                    <span>(${attraction.reviews} reviews)</span>
                </div>
                <div class="attraction-location">
                    <span class="pin-icon">📍</span>
                    <span>${attraction.location}</span>
                </div>
                <p class="attraction-description">${attraction.description}</p>
                <div class="attraction-tags">
                    ${attraction.tags.map(tag => `<span class="attraction-tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="book-button">Book Now</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTagFilters() {
    const tagFilters = document.getElementById('tagFilters');
    const allTags = Array.from(new Set(attractions.flatMap(a => a.tags)));
    
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-button';
        button.textContent = tag;
        button.dataset.tag = tag;
        button.addEventListener('click', () => {
            selectedTag = tag;
            updateActiveTag();
            renderAttractions();
        });
        tagFilters.appendChild(button);
    });
}

function updateActiveTag() {
    document.querySelectorAll('.tag-button').forEach(button => {
        button.classList.toggle('active', button.dataset.tag === selectedTag);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAttractions();

    document.getElementById('search').addEventListener('input', renderAttractions);

    document.querySelector('.tag-button[data-tag="all"]').addEventListener('click', () => {
        selectedTag = 'all';
        updateActiveTag();
        renderAttractions();
    });
});
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