const items = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const itemWidth = 280.51;
const itemMargin = 20;
const itemsPerSlide = 4;
const slideWidth = itemWidth * itemsPerSlide + itemMargin * (itemsPerSlide - 1);
let currentIndex = 0;

// Move the carousel to the next slide
const moveToNextSlide = () => {
  currentIndex += itemsPerSlide;
  if (currentIndex > items.children.length - itemsPerSlide) {
    currentIndex = 0;
  }
  items.style.transform = `translateX(-${currentIndex * (itemWidth + itemMargin)}px)`;
}

// Move the carousel to the previous slide
const moveToPrevSlide = () => {
  currentIndex -= itemsPerSlide;
  if (currentIndex < 0) {
    currentIndex = items.children.length - itemsPerSlide;
  }
  items.style.transform = `translateX(-${currentIndex * (itemWidth + itemMargin)}px)`;
}

// Move the carousel automatically
const autoPlay = () => {
  setInterval(moveToNextSlide, 5000);
}

// Attach event listeners to the buttons
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

// Start the auto-play feature
autoPlay();


