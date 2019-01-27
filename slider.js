function showSlider() {

    let position = 0;
    let arrayImg = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
    ]

    let contentItem = document.getElementsByClassName('content__body-item')[1];
    contentItem.className = 'content__body-item item-slider';

    let slider = document.createElement('div');
    slider.className = 'slider';
    contentItem.appendChild(slider);

    let sliderWrap = document.createElement('div');
    sliderWrap.className = 'slider__wrap';
    slider.appendChild(sliderWrap);

    for (let i = 0; i < arrayImg.length; i++) {
        let img = document.createElement('img');
        img.setAttribute('src', arrayImg[i]);
        img.setAttribute('alt', 'img');
        img.className = 'slider__img';
        sliderWrap.appendChild(img);
    }

    if(position < -2400){
        position = 0;
    }
    sliderWrap.style.left = position + 'px';
    position = position - 600;
    setTimeout(showNextSlide, 3000);

};
showSlider();