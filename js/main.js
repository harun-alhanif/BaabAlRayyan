// Resources page functionality - Only run if elements exist
const showArticlesBtn = document.getElementById("show-articles");
const showBooksBtn = document.getElementById("show-books");
const showVideosBtn = document.getElementById("show-videos");

const articlesSection = document.getElementById("articles-section");
const booksSection = document.getElementById("books-section");
const videosSection = document.getElementById("videos-section");

// Only setup resources functionality if all elements exist
if (showArticlesBtn && showBooksBtn && showVideosBtn && 
    articlesSection && booksSection && videosSection) {
  
  function hideAll() {
    articlesSection.classList.add("d-none");
    booksSection.classList.add("d-none");
    videosSection.classList.add("d-none");

    showArticlesBtn.classList.remove("btn-primary");
    showBooksBtn.classList.remove("btn-primary");
    showVideosBtn.classList.remove("btn-primary");

    showArticlesBtn.classList.add("btn-outline-primary");
    showBooksBtn.classList.add("btn-outline-primary");
    showVideosBtn.classList.add("btn-outline-primary");
  }

  showArticlesBtn.addEventListener("click", () => {
    hideAll();
    articlesSection.classList.remove("d-none");
    showArticlesBtn.classList.remove("btn-outline-primary");
    showArticlesBtn.classList.add("btn-primary");
  });

  showBooksBtn.addEventListener("click", () => {
    hideAll();
    booksSection.classList.remove("d-none");
    showBooksBtn.classList.remove("btn-outline-primary");
    showBooksBtn.classList.add("btn-primary");
  });

  showVideosBtn.addEventListener("click", () => {
    hideAll();
    videosSection.classList.remove("d-none");
    showVideosBtn.classList.remove("btn-outline-primary");
    showVideosBtn.classList.add("btn-primary");
  });
}

// Initialize Swiper for Subjects Carousel - SIMPLIFIED VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Subjects Swiper...');
    
    if (typeof Swiper !== 'undefined') {
        console.log('✅ Swiper library loaded');
        
        const swiperElement = document.querySelector('.subjects-swiper');
        if (swiperElement) {
            console.log('✅ Swiper element found');
            
            const subjectsSwiper = new Swiper('.subjects-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },
                
                loop: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                
                navigation: {
                    nextEl: '.subjects-swiper .swiper-button-next',
                    prevEl: '.subjects-swiper .swiper-button-prev',
                },
                
                pagination: {
                    el: '.subjects-swiper .swiper-pagination',
                    clickable: true,
                },
                
                on: {
                    init: function () {
                        console.log('🎉 Subjects Swiper initialized successfully!');
                        console.log('📊 Total slides:', this.slides.length);
                        console.log('📊 Slides per view:', this.slidesPerView);
                    },
                    slideChange: function () {
                        console.log('🔄 Slide changed to:', this.activeIndex);
                    }
                }
            });
            
            console.log('✅ Subjects Swiper instance created:', subjectsSwiper);
            
        } else {
            console.error('❌ Swiper element (.subjects-swiper) not found!');
        }
    } else {
        console.error('❌ Swiper library not loaded!');
    }
});