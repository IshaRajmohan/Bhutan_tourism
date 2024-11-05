
        let hotels = [];
        let selectedStars = 'all';

        function fetchHotels() {
            // Simulating API call with setTimeout
            setTimeout(() => {
                hotels = [
                    {
                        id: 1,
                        name: "Amankora Paro",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr0-cUp45gAuyajETS6TMr2wTgTJcd13wCg&s",
                        rating: 5,
                        reviews: 320,
                        location: "Paro",
                        description: "Luxury resort with stunning views of Tiger's Nest Monastery.",
                        price: 1500,
                        link: "https://www.aman.com/book/amankora#/booking/step-1?data=('h5hd!'amankora'~aAdt3f5fr!'chain'~os-'16840'95at!2~cn!0~cg-.al7po3co3gp3rn-9y3rk3re-.rr*).ax!0~cy!'USD'~ds!('pAls3as3st*)~my7sAcAne*)*!null-!%5B.%5D~3*~5s-('7!false~9%5D).rAe3%01A9753.-*_"
                        
                    },
                    {
                        id: 2,
                        name: "Uma by COMO, Paro",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCO1egrntyhbgCGP_VxmvLvDnasFACFATQQw&s",
                        rating: 4,
                        reviews: 280,
                        location: "Paro",
                        description: "Intimate, luxury lodge with traditional Bhutanese design.",
                        price: 800,
                        link:"https://www.comohotels.com/bhutan/como-uma-paro"
                    },
                    {
                        id: 3,
                        name: "Taj Tashi",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv-hbSynmeMi64ixMN-1QLMnnyqVeF0Hp7w&s",
                        rating: 5,
                        reviews: 450,
                        location: "Thimphu",
                        description: "Luxury hotel blending Bhutanese tradition with modern design.",
                        price: 1200,
                        link:"https://www.tripadvisor.in/Hotel_Review-g293845-d1006021-Reviews-Pemako_Thimphu-Thimphu_Thimphu_District.html"
                    },
                    {
                        id: 4,
                        name: "Zhiwa Ling Heritage",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8sLwp9yzLEtB3KZV4MEjaTNOJe0Z7Evxqg&s",
                        rating: 4,
                        reviews: 200,
                        location: "Paro",
                        description: "Bhutanese-owned 5-star hotel showcasing local architecture.",
                        price: 600,
                        link:"https://www.tripadvisor.in/Hotel_Review-g293845-d12865667-Reviews-Zhiwa_Ling_Ascent-Thimphu_Thimphu_District.html"
                    },
                    {
                        id: 5,
                        name: "Le Meridien Thimphu",
                        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a6/6c/c2/exterior-night-view.jpg?w=700&h=-1&s=1",
                        rating: 5,
                        reviews: 380,
                        location: "Thimphu",
                        description: "Modern luxury hotel in the heart of Thimphu.",
                        price: 950,
                        link:"https://www.tripadvisor.in/Hotel_Review-g293845-d7377963-Reviews-Le_Meridien_Thimphu-Thimphu_Thimphu_District.html"
                    },
                    {
                        id: 6,
                        name: "Gangtey Lodge",
                        image: "https://www.heavenlybhutan.com/wp-content/uploads/2019/04/Gangtey-Lodge-Phobjikha.jpg",
                        rating: 5,
                        reviews: 150,
                        location: "Phobjikha Valley",
                        description: "Remote luxury lodge with panoramic valley views.",
                        price: 1100,
                        link:"https://www.tripadvisor.in/Hotel_Review-g3856737-d5494353-Reviews-Gangtey_Lodge_Bhutan-Gangtey_Wangdue_Phodrang_District.html"
                    }
                ];
                renderHotels();
                renderStarFilters();
            }, 1000);
        }

        function renderHotels() {
            const grid = document.getElementById('hotelsGrid');
            grid.innerHTML = '';

            const filteredHotels = hotels.filter(hotel => 
                (selectedStars === 'all' || hotel.rating === parseInt(selectedStars)) &&
                hotel.name.toLowerCase().includes(document.getElementById('search').value.toLowerCase())
            );

            filteredHotels.forEach(hotel => {
                const card = document.createElement('div');
                card.className = 'hotel-card';
                card.innerHTML = `
                    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    <div class="hotel-content">
                        <h2 class="hotel-title">${hotel.name}</h2>
                        <div class="hotel-rating">
                            ${'⭐'.repeat(hotel.rating)}
                            <span>(${hotel.reviews} reviews)</span>
                        </div>
                        <div class="hotel-location">
                            <span class="pin-icon">📍</span>
                            <span>${hotel.location}</span>
                        </div>
                        <p class="hotel-description">${hotel.description}</p>
                        <p class="hotel-price">From $${hotel.price} per night</p>
                        <a href="${hotel.link}" class="book-button">Book Now</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function renderStarFilters() {
            const starFilters = document.getElementById('starFilters');
            const maxStars = Math.max(...hotels.map(h => h.rating));
            
            for (let i = 3; i <= maxStars; i++) {
                const button = document.createElement('button');
                button.className = 'star-button';
                button.textContent = `${i} Stars`;
                button.dataset.stars = i;
                button.addEventListener('click', () => {
                    selectedStars = i.toString();
                    updateActiveStars();
                    renderHotels();
                });
                starFilters.appendChild(button);
            }
        }

        function updateActiveStars() {
            document.querySelectorAll('.star-button').forEach(button => {
                button.classList.toggle('active', button.dataset.stars === selectedStars);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            fetchHotels();

            document.getElementById('search').addEventListener('input', renderHotels);

            document.querySelector('.star-button[data-stars="all"]').addEventListener('click', () => {
                selectedStars = 'all';
                updateActiveStars();
                renderHotels();
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
