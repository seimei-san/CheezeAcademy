// jsを記述する際はここに記載していく
'use strict';

// Display Photo from ABOUT into Modal 

const modal = document.getElementById('modal');
const show_01_img = document.getElementById('about_01_img');
const show_02_img = document.getElementById('about_02_img');
const show_03_img = document.getElementById('about_03_img');
const show_04_img = document.getElementById('about_04_img');
const backGround = document.getElementById('modal__background');
const close = document.getElementById('modal__close');
const show = document.getElementById('modal__show');
const showImage = document.getElementById('modal__img');
const modalText = document.getElementById('modal__text');


show_01_img.addEventListener('click', () => {
    showImage.src = "img/about_01.jpg";
    modalText.textContent = "卒業生が作り出すチーズは、世界の食卓で大人気！";
    modal.classList.add('is-show');
    backGround.classList.add('is-show');
});
show_02_img.addEventListener('click', () => {
    showImage.src = "img/about_02.jpg";
    modalText.textContent = "本物のチーズは、雄大な自然に育まれる";
    modal.classList.add('is-show');
    backGround.classList.add('is-show');
});
show_03_img.addEventListener('click', () => {
    showImage.src = "img/about_03.jpg";
    modalText.textContent = "チーズアカデミー25期生の黒澤正明さん、チーズ界の変革者！";
    modal.classList.add('is-show');
    backGround.classList.add('is-show');
});
show_04_img.addEventListener('click', () => {
    showImage.src = "img/about_04.jpg";
    modalText.textContent = "自然に育まれたチーズで作るピザは最高！";
    modal.classList.add('is-show');
    backGround.classList.add('is-show');
    
});


close.addEventListener('click', () => {
    modal.classList.remove('is-show');
    // backGround.classList.remove('is-show');
});

backGround.addEventListener('click', () => {
    close.click()
});

// Alert in NEWS 
const news_box_1 = document.getElementById("news_box_1");
const news_box_2 = document.getElementById("news_box_2");
const news_box_3 = document.getElementById("news_box_3");
console.log(news_box_1);
news_box_1.addEventListener('click', () => {
    alert('[News その1]がクリックされました');
});
news_box_2.addEventListener('click', () => {
    alert('[News その2]がクリックされました');
});
news_box_3.addEventListener('click', () => {
    alert('[News その3]がクリックされました');
});

// More Button in NEWS
const button_more = document.getElementById('button_more');
button_more.addEventListener('click', () => alert('[More]ボタンがクリックされました'));

// Submit Button in CONTACT
const button_submit = document.getElementById('button_submit');
button_submit.addEventListener('click', () => alert('[送信]ボタンがクリックされました'));
