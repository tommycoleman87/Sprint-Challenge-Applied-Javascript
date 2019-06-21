class Carousel {
    constructor(element){
        this.element = element;
        this.images = Array.from(this.element.querySelectorAll('img'));
        this.rightBtn = this.element.querySelector('.right-button');
        this.leftBtn = this.element.querySelector('.left-button');
        this.index = 0;
        console.log(this.leftBtn)
        console.log(this.images);
        this.images[this.index].style.display = 'flex';
        this.rightBtn.addEventListener('click', () => this.slideImgRight())
        this.leftBtn.addEventListener('click', () => this.slideImgRight())
    }

    slideImgRight(){
        switch(this.index === this.images.length - 1) {
            case true:
                this.images[this.index].style.display = 'none';
                this.index = 0;
                this.images[this.index].style.display = 'flex';
                break;

            case false:
                this.images[this.index].style.display = 'none';
                this.index++;
                this.images[this.index].style.display = 'flex';
                break;
        }
    }

    slideImgLeft(){
        switch(this.index === 0) {
            case true:
                this.images[this.index].style.display = 'none';
                this.index = this.images.length - 1;
                this.images[this.index].style.display = 'flex';

            case false:
                this.images[this.index].style.display = 'none';
                this.index--;
                this.images[this.index].style.display = 'flex';
                break;
        }
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
