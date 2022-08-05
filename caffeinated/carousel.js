const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');
const itemCount = 1;

class Carousel {
  constructor(container, items, controls, count) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    this.carouselCount = count;
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {
    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
      this.setItemCount(-1);
      console.log(this.carouselArray[2].id);
    } else if(direction.className == 'gallery-controls-next') {
      this.carouselArray.push(this.carouselArray.shift());
      this.setItemCount(1);
      console.log(this.carouselArray[2].id);
    }

    document.getElementById("item").innerText = this.carouselArray[2].id
    document.getElementById("product-label").innerText = this.carouselArray[2].id;

    this.updateGallery();
  }

  // Update the item-count on products.html
  setItemCount(iter) {
    this.carouselCount += iter;

    if(this.carouselCount == 6 && this.carouselCount % 6 == 0){
      this.carouselCount = 1;
    } else if(this.carouselCount == 0 && this.carouselCount % 6 == 0){
      this.carouselCount = 5;
    }

    document.getElementById("count").innerText = "[" + this.carouselCount + "/5]"
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls, itemCount);

exampleCarousel.setControls();
exampleCarousel.useControls();