const burgerBtn = document.querySelector('.navbar__burger');
const menuList = document.querySelector('.navbar__list');
const allMenuItems = document.querySelectorAll('.navbar__item');
const arrowsBtn = document.querySelector('.header__arrows-box');
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.navbar__item-link');
const scrollSpySections = document.querySelectorAll('.section');
const homeLink = document.querySelector('.navbar__item-link');
const galleryImgs = document.querySelectorAll('.gallery__card-img');
const closeBtn = document.querySelector('.gallery__show-close');
const leftBtn = document.querySelector('.gallery__show-left');
const rightBtn = document.querySelector('.gallery__show-right');

let num;
let gallery;

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
	document.getElementById('members').scrollIntoView();
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 80) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				navLinks.forEach((item) =>
					item.classList.remove('navbar__item-link--active')
				);

				activeSection.classList.add('navbar__item-link--active');
			}
			if (window.scrollY < window.innerHeight) {
				navLinks.forEach((item) =>
					item.classList.remove('navbar__item-link--active')
				);
				homeLink.classList.add('navbar__item-link--active');
			}
		});
	}
};

const showGalleryImg = (e) => {
	num = e.target.dataset.number;
	[...gallery] = galleryImgs;


	changeGalleryImg()

	leftBtn.addEventListener('click', leftSwitch);
	rightBtn.addEventListener('click', rightSwitch);

	window.addEventListener('click', closeShow);
	window.addEventListener('keydown', closeByEsc);
};

const closeShow = (e) => {
	if (e.target === document.querySelector('.gallery__show-box')) {
		e.target.parentElement.style.display = 'none';
	}
	else {
		return;
	}
};

const closeGallery = () => {
	const showGallery = document.querySelector('.gallery__show');
	showGallery.style.display = 'none';
}

const closeByEsc = (e) => {
	if(e.key === 'Escape') {
		closeGallery();
	};
}

const leftSwitch = () => {
	num--
	if(num < 1) {
		num = 9	
	} 
	changeGalleryImg()	
}
const rightSwitch = () => {
	num++
	if(num > 9) {
		num = 1	
	} 
	changeGalleryImg()
}

const changeGalleryImg = () => {
	const img = gallery[num-1]
	const source = img.dataset.source;
	const author = img.dataset.author;
	const license = img.dataset.license;
	const alt = img.alt;
	const src = img.src;

	const showGallery = document.querySelector('.gallery__show');
	const showImg = document.querySelector('.gallery__show-img');
	const imgData = document.querySelector('.gallery__show-text');

	showGallery.style.display = 'block';
	showImg.src = src;
	showImg.alt = alt;

	imgData.innerText = `${source} / ${author} / ${license}`;
}

handleCurrentYear();
burgerBtn.addEventListener('click', menuAnimation);
arrowsBtn.addEventListener('click', scrollFunction);
window.addEventListener('scroll', handleScrollSpy);
galleryImgs.forEach((img) => img.addEventListener('click', showGalleryImg));
closeBtn.addEventListener('click', closeGallery);