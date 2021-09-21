/* 
    Задание 1:

    Доделать слайдер с урока

    автоматическое переключение слайдов с интвервалом в 2 секунды

*/
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      trans = document.querySelector('.trans');
let index = 0;    

const prepareCurrentSlide = (i) => {
    activeSlide(index);
    activeDot(index); 
}

const activeSlide = n => {
    for(slide of slides) {
        console.log(slide);
        /*Не понятен момент: вывожу в цикле slide, почему во втором элементе уже добавлен класс active, хотя добавление происходит после цикла. Он не должен вывоиться без класса active?*/
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};
const activeDot = n => {
    for(dot of dots) {
        console.log(dot);
        /*Не понятен момент: вывожу в цикле slide, почему во втором элементе уже добавлен класс active, хотя добавление происходит после цикла. Он не должен вывоиться без класса active?*/
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const nextSlide = () => {
    if(index == slides.length-1) {
        index = 0;
        console.log(index);
        prepareCurrentSlide (index);
    } else {
        index++;
        prepareCurrentSlide (index);
        console.log(index);
    }
};

const prevSlide = () => {
    if(index == 0) {
        index = slides.length-1;
        console.log(index);
        prepareCurrentSlide (index);
    } else {
        index--;
        prepareCurrentSlide (index);
        console.log(index);
    }
};

dots.forEach((item, indexDot) => {
    //console.log(item);
    //console.log(indexDot);
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide (index);
    })

})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let intId = setInterval(nextSlide, 2000);
trans.addEventListener('click', () => {
    console.log('stop')
    clearInterval(intId);
})
/* 
    Задание 2:

    Доделать tabs с урока
Внутри третьей вкладки добавить функционал табов. Количество вкладок:  Контент внутри - на ваш вкус 

*/
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const ttabs = document.getElementById('ttabs');
const ccontent = document.querySelectorAll('.ccontent');
//console.log(tabs);
//console.log(content);
/*
const changeClass = (el) => {
    //console.log('el:' + el);
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
    //console.log(tabs.children)
} */

const changeClass = (el, arr) => {
    //console.log('el:' + el);
    for(let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('active');
    }
    el.classList.add('active');
    //console.log(tabs.children)
}; 
tabs.addEventListener('click', (e) => {
    //console.log('e:' + e);
    const currentTab = e.target.dataset.btn;
    changeClass(e.target, tabs.children);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currentTab) {
            content[i].classList.add('active')
        };
    }
});
ttabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.bttn;
    changeClass(e.target, ttabs.children);
    for(let i = 0; i < ccontent.length; i++) {
        ccontent[i].classList.remove('active');
        if(ccontent[i].dataset.ccontent === currentTab) {
            ccontent[i].classList.add('active')
        }
    }
})
//---Modal window
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.querySelector('.wrapper-modal');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);