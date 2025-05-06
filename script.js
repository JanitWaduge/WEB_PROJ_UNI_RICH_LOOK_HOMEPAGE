const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.arrow.prev');
  const nextBtn = document.querySelector('.arrow.next');
  const slider = document.querySelector('.hero-slider');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % totalSlides;
    updateSlider(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider(prevIndex);
  }

  // Autoplay functionality
  let autoPlay = setInterval(nextSlide, 2000);

  // Pause on hover
  const sliderWrapper = document.querySelector('.hero-slider-wrapper');
  sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
  sliderWrapper.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, 2000);
  });

  // Navigation controls
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Dot indicators
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      let index = parseInt(dot.dataset.slide);
      updateSlider(index);
    });
  });
