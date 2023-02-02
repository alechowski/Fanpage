const burgerBtn = document.querySelector('.navbar__burger');
const menuList = document.querySelector('.navbar__list');
const allMenuItems = document.querySelectorAll('.navbar__item');

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


burgerBtn.addEventListener('click', menuAnimation);