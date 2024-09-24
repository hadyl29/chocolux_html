// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// slick slider
$('.chocolate_container').slick({
    infinite: true,
    center: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

/** google_map js **/




var swiper = new Swiper(".shop-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      924: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
     1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.image');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
  
        images.forEach(image => {
          if (filterValue === 'all' || image.classList.contains(filterValue)) {
            image.classList.remove('hide');
          } else {
            image.classList.add('hide');
          }
        });
      });
    });
  });
  