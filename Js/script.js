var prevScrollpos = window.scrollY;

window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header').classList.remove('sticky');
    } else {
        document.querySelector('.header').classList.add('sticky');
    }
    prevScrollpos = currentScrollPos;
}


function scrollToSection1() {
    const home = document.querySelector(".container");
    const posicao = home.offsetTop;

    window.scrollTo({
        top: posicao, behavior: 'smooth'
    });

}
function scrollToSection2() {
    const places = document.querySelector(".main__images");
    const posicao = places.offsetTop;

    window.scrollTo({
        top: posicao, behavior: 'smooth'
    });
}
function scrollToSection3() {
    const social = document.querySelector(".footer__social");
    const posicao = social.offsetTop;

    window.scrollTo({
        top: posicao, behavior: 'smooth'
    });
}


// ----------------------------darkmode-------------------------

const btnMode = document.querySelector('.header__header__nav--dark-mode');
const containerMode = document.querySelector('.container');
const imageButton = document.querySelector('.image-mode');


btnMode.addEventListener('click', () => {
    const sunModeActive = containerMode.classList.contains('dark-mode');
    containerMode.classList.toggle('dark-mode');

    if(sunModeActive){
        imageButton.setAttribute('src', '../img/ChangeTheme/moon-icon.svg')
    }
    else{
        imageButton.setAttribute('src', './img/ChangeTheme/sun-icon.svg')
    }
})


// ----------------------------end-darkmode--------------------

// ------------------Mexico------------------------
const btnText1 = document.querySelector('.btn-text1');
const text1 = document.querySelector('.paragraph1');

btnText1.addEventListener('click', () => {
    text1.classList.toggle('hidden');

    if (!text1.classList.contains('hidden')) {
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation1 = document.querySelector('.btn-location1');
const location1 = document.querySelector('.location1');

btnLocation1.addEventListener('click', () => {
    location1.classList.toggle('hidden');
    if (!location1.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

// ------------------End-Mexico------------------------

// ------------------Brazil------------------------

const btnText2 = document.querySelector('.btn-text2');
const text2 = document.querySelector('.paragraph2');

btnText2.addEventListener('click', () => {
    text2.classList.toggle('hidden');
    if (!text2.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation2 = document.querySelector('.btn-location2');
const location2 = document.querySelector('.location2');

btnLocation2.addEventListener('click', () => {
    location2.classList.toggle('hidden');
    if (!location2.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

// ------------------End-Brazil------------------------


// ------------------Italy------------------------

const btnText3 = document.querySelector('.btn-text3');
const text3 = document.querySelector('.paragraph3');

btnText3.addEventListener('click', () => {
    text3.classList.toggle('hidden');
    if (!text3.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation3 = document.querySelector('.btn-location3');
const location3 = document.querySelector('.location3');

btnLocation3.addEventListener('click', () => {
    location3.classList.toggle('hidden');
    if (!location3.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})
// ------------------End-Italy------------------------


// ------------------China------------------------
const btnText4 = document.querySelector('.btn-text4');
const text4 = document.querySelector('.paragraph4');

btnText4.addEventListener('click', () => {
    text4.classList.toggle('hidden');
    if (!text4.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation4 = document.querySelector('.btn-location4');
const location4 = document.querySelector('.location4');

btnLocation4.addEventListener('click', () => {
    location4.classList.toggle('hidden');
    if (!location4.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})
// ------------------End-China------------------------


// ------------------Peru------------------------
const btnText5 = document.querySelector('.btn-text5');
const text5 = document.querySelector('.paragraph5');

btnText5.addEventListener('click', () => {
    text5.classList.toggle('hidden');
    if (!text5.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation5 = document.querySelector('.btn-location5');
const location5 = document.querySelector('.location5');

btnLocation5.addEventListener('click', () => {
    location5.classList.toggle('hidden');
    if (!location5.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})
// ------------------End-Peru------------------------


// ------------------Jordan------------------------
const btnText6 = document.querySelector('.btn-text6');
const text6 = document.querySelector('.paragraph6');

btnText6.addEventListener('click', () => {
    text6.classList.toggle('hidden');
    if (!text6.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation6 = document.querySelector('.btn-location6');
const location6 = document.querySelector('.location6');

btnLocation6.addEventListener('click', () => {
    location6.classList.toggle('hidden');
    if (!location6.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location7.classList.add('hidden');
    }
})
// ------------------End-Jordan------------------------


// ------------------India------------------------
const btnText7 = document.querySelector('.btn-text7');
const text7 = document.querySelector('.paragraph7');

btnText7.addEventListener('click', () => {
    text7.classList.toggle('hidden');
    if (!text7.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
        location7.classList.add('hidden');
    }
})

const btnLocation7 = document.querySelector('.btn-location7');
const location7 = document.querySelector('.location7');

btnLocation7.addEventListener('click', () => {
    location7.classList.toggle('hidden');
    if (!location7.classList.contains('hidden')) {
        text1.classList.add('hidden');
        text2.classList.add('hidden');
        text3.classList.add('hidden');
        text4.classList.add('hidden');
        text5.classList.add('hidden');
        text6.classList.add('hidden');
        text7.classList.add('hidden');
        location1.classList.add('hidden');
        location2.classList.add('hidden');
        location3.classList.add('hidden');
        location4.classList.add('hidden');
        location5.classList.add('hidden');
        location6.classList.add('hidden');
    }
})

// ------------------End-India------------------------

// ------------------text area -------------------------
const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');

textArea.addEventListener('input', function() {
  const count = textArea.value.length;
  charCount.textContent = count;
});


// ------------------End-text area -------------------------