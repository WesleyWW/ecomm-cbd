//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');


//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        navList.classList.add('show');
    
        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        navList.classList.remove('show');
    
        //Set Menu State
        showMenu = false;
    }
}

// FAQ
// const faqs = document.querySelector('.faq-container');
// const faqs = document.querySelectorAll('.faq-group');
// const answerBtn = faq.querySelector('.get-answer');  

// let showAnswer = false;
// answerBtn.addEventListener('click', toggleAnswer);

// function toggleAnswer() {
//     const answer = this.querySelector(':scope .answer')
//     if(!showAnswer) {
//         answer.classList.add('show');
//         showAnswer = true;
//     }else{
//         answer.classList.remove('show');
//         showAnswer = false;
//     }
// }

const answers = document.querySelectorAll('.faq-group');

answers.forEach(
    function(currentValue, CurrentIndex, listObj) {

       const answer = answers[CurrentIndex];
        answer.addEventListener('click', () => {
            answer.querySelector('.answer').classList.toggle('show');
        });
    }  
);