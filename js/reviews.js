// Static Reviews
document.addEventListener('DOMContentLoaded', () => {
    const reviews = new Reviews();
    reviews.initialize();
});

class Reviews {
    constructor() {
        this.reviews = [
            {
                author_name: "Kimberly Bell",
                profile_photo: "images/reviews/kimberly.png",
                rating: 5,
                date: new Date('2024-10-21'), // 5 days ago
                text: `Cappadocia-Wonderful travel service located in Goreme. Fatih did an amazing job handling all arrangements for our Red Tour, Green Tour, Hot Air Balloon trip and transfers from and to the airport. He even recommended restaurants and other suggestions for a perfect vacation. Highly recommend his company and his exceptional customer service.`
            },
            {
                author_name: "Husain Massawi",
                profile_photo: "images/reviews/husain.png",
                rating: 5,
                date: new Date('2025-9-21'), // 5 days ago
                text: `We had booked our hot air balloon ride for 18th September, but due to weather conditions, it was gonna get cancelled. Mr. Fatih immediately informed us and, at the very last minute, managed to arrange another booking for us one day prior at a very reasonable price.
His quick responses, honesty, and the way he went out of his way to help us made the whole experience stress-free. Truly grateful for his hospitality and service. Thank you, Sir — we will definitely pray for your well-being. 🙏

Trust this person for all your tours as you will definitely appreciate it. He personally overlooks that your trip is going well and also listens to us. Because of him we truly had fun.`
            },
            {
                author_name: "Sharon O.J.",
                profile_photo: "images/reviews/sharon.png",
                rating: 5,
                date: new Date('2024-10-21'), // 5 days ago
                text: `From our captivating tour of Cappadocia to the seamless transportation arrangements in Istanbul, our experience with Fatih's agency has been nothing short of exceptional. We initially reserved a balloon trip through them, and it exceeded all expectations. The trip was impeccably organized, striking the perfect balance between quality and price.

We were fortunate to have Mr. Mustafa as our driver. His friendliness and great English made communication easy and enjoyable. Originally booked for just one day tour in Cappadocia, we ended up spending two days with him, including an unplanned visit to Mount Erciyes, which turned out to be an unforgettable experience.

Their recommendations enriched our journey, and Fatih went above and beyond to assist us every step of the way.

Without hesitation, we wholeheartedly recommend Fatih's agency. Thank you for making our time in Turkey truly unforgettable!`
            },
            {
                author_name: "Joelle Lim",
                profile_photo: "images/reviews/joelle.png",
                rating: 5,
                date: new Date('2024-12-21'), // 5 days ago
                text: `Fatih was extremely sincere and offered the best deal for the hot air balloon flight. Unfortunately didn't get to take the ride due to an oversight by the balloon company, of no fault of Fatih's at all. He responded to messages as early as 6am, rushed to the office at 7.30am before opening hours, and even provided breakfast while patiently waiting for the discussion with the hot air balloon company to be concluded. He also very kindly provided the refund on the spot. While the ride was a missed opportunity, Fatih's hospitality was impeccable. Highly recommended tour agency for a great deal and great attitude. Thank you so much for doing your best! Welcoming you to Singapore anytime!
            `},
            {
                author_name: "Richard Burton",
                profile_photo: "images/reviews/richard.png",
                rating: 5,
                date: new Date('2024-10-21'), // 5 days ago
                text: `Fatih was excellent in getting me great excursions at very reasonable prices. He scheduled a balloon flight that was spectacular. Later that morning he put me on a ‘Green Tour’ of the area. It was perfect. The guide speaks excellent English and did a fantastic job of walking and talking, setting a nice pace for the entire group.
Lastly, Fatih arranged my flight back to Istanbul and an early morning shuttle.
I am extremely happy to have used his services.`},
            {
                author_name: "Simone Vincent",
                profile_photo: "images/reviews/simone.png",
                rating: 5,
                date: new Date('2024-10-21'), // 5 days ago
                text: `Fatih did an amazing job at organising a hot air balloon flight for us. He was great with communication and was very accommodating when we were uncertain about the upcoming weather conditions - he kept an eye out for cancellations on alternate days and looked for cheaper flights so we could book the best deal possible. Thank you, Fatih!
                `},
            {
                author_name: "Waseemah Isaacs",
                profile_photo: "images/reviews/waseemah.png",
                rating: 5,
                date: new Date('2024-10-21'), // 5 days ago
                text: `I would recommend Capahenas Travel Agency to anyone visiting Cappadocia. Fatih arranged all our transfers and excursions (Hot Air Balloon, ATV, Green tour etc). He is a one stop shop offering that personal touch, only a whatsapp away. He kept us updated on all our activities and because of his excellent service my family and I had an unforgettable experience!`},
        ];
    }

    initialize() {
        this.updateReviewsSlider(this.reviews);
    }

    formatRelativeTime(date) {
        const now = new Date();
        const diffInMs = now - date;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        if (diffInYears > 0) {
            return `${diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`;
        } else if (diffInMonths > 0) {
            return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
        } else if (diffInDays > 6) {
            const weeks = Math.floor(diffInDays / 7);
            return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
        } else if (diffInDays > 0) {
            return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
        } else {
            const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
            if (diffInHours > 0) {
                return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
            }
            const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
            if (diffInMinutes > 0) {
                return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
            }
            return 'just now';
        }
    }

    generateStarRating(rating) {
        const fullStar = '★';
        const emptyStar = '☆';
        return Array(5)
            .fill('')
            .map((_, index) => index < rating ? fullStar : emptyStar)
            .join('');
    }

    createReviewElement(review) {
        return `
            <div class="swiper-slide">
                <div class="review-card">
                    <div class="review-header">
                        <img src="${review.profile_photo}" alt="${review.author_name}" 
                             class="reviewer-photo">
                        <div class="reviewer-info">
                            <div class="reviewer-name">${review.author_name}</div>
                            <div class="review-stars">${this.generateStarRating(review.rating)}</div>
                        </div>
                    </div>
                    <p class="review-text">${review.text}</p>
                    <div class="review-date">${this.formatRelativeTime(review.date)}</div>
                </div>
            </div>
        `;
    }

    updateReviewsSlider(reviews) {
        const swiperWrapper = document.querySelector('#reviews-swiper .swiper-wrapper');

        if (swiperWrapper) {
            // Destroy existing swiper instance if it exists
            if (window.reviewsSwiper) {
                window.reviewsSwiper.destroy(true, true);
            }

            swiperWrapper.innerHTML = reviews.map(review => this.createReviewElement(review)).join('');

            // Initialize a new Swiper instance
            window.reviewsSwiper = new Swiper('#reviews-swiper', {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: false,
                speed: 500,
                grabCursor: true,
                allowTouchMove: true,
                autoplay: {
                    enabled: false,
                    delay: 999999999
                },
                loop: false,
                watchOverflow: true,
                simulateTouch: true,
                preventInteractionOnTransition: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        centeredSlides: false
                    },
                    1024: {
                        slidesPerView: 3,
                        centeredSlides: false
                    }
                },
                // Event listeners for hiding swipe hint
                on: {
                    slideChange: function () {
                        this.hideSwipeHint();
                    },
                    touchStart: function () {
                        this.hideSwipeHint();
                    },
                    touchMove: function () {
                        this.hideSwipeHint();
                    }
                }
            });

            // Hide swipe hint function
            window.reviewsSwiper.hideSwipeHint = function() {
                const swipeHint = document.getElementById('swipe-hint');
                if (swipeHint) {
                    swipeHint.style.opacity = '0';
                    swipeHint.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        swipeHint.style.display = 'none';
                    }, 500);
                }
            };

            // Hide hint on navigation button clicks
            const nextBtn = document.querySelector('.swiper-button-next');
            const prevBtn = document.querySelector('.swiper-button-prev');
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => window.reviewsSwiper.hideSwipeHint());
            }
            if (prevBtn) {
                prevBtn.addEventListener('click', () => window.reviewsSwiper.hideSwipeHint());
            }

            // Auto-hide hint after 8 seconds
            setTimeout(() => {
                if (window.reviewsSwiper && window.reviewsSwiper.hideSwipeHint) {
                    window.reviewsSwiper.hideSwipeHint();
                }
            }, 8000);

            // Kesinlikle otomatik kaydırmayı devre dışı bırak
            if (window.reviewsSwiper.autoplay) {
                window.reviewsSwiper.autoplay.stop();
            }
        } else {
            console.log('No reviews to display or swiper wrapper not found');
        }
    }
}