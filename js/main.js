const adviceArea = document.querySelector('.advice-app__advice')
const adviceBtn = document.querySelector('.advice-app__button')
const adviceNumber = document.querySelector('.advice-app__title--number');
let lastAdvice;

const API_LINK = 'https://api.adviceslip.com/advice'

const generateAdvice = () => {
	fetch(API_LINK)
		.then(res => res.json())
		.then(data => {
			const adviceID = data.slip.id;
			const advice = data.slip.advice;
			adviceNumber.textContent = adviceID;
			adviceArea.textContent = advice;
		})
		.catch(() => {
			adviceArea.style.color = '#cf1717'
			adviceArea.textContent = 'Something was wrong 😕'
		})
}

window.addEventListener('DOMContentLoaded', generateAdvice);
adviceBtn.addEventListener('click', generateAdvice);
