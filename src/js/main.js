const burgerBtn = document.querySelector('.navbar__burger');
const menuList = document.querySelector('.navbar__list');
const allMenuItems = document.querySelectorAll('.navbar__item');
const arrowsBtn = document.querySelector('.header__arrows-box');
const footerYear = document.querySelector(".footer__year");

const menuAnimation = () => {
	menuList.classList.toggle('navbar__list--active');
	document.body.classList.toggle('stop-scrolling');

	allMenuItems.forEach((item) => {
		item.addEventListener('click', () => {
			menuList.classList.remove('navbar__list--active');
			document.body.classList.remove('stop-scrolling');
		});
	});
};

const scrollFunction = () => {
	
	document.getElementById("members").scrollIntoView();
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
burgerBtn.addEventListener('click', menuAnimation);
arrowsBtn.addEventListener('click', scrollFunction);