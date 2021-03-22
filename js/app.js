(() => {
	'use strict';
	document.addEventListener('DOMContentLoaded', () => {
		
		const menuMovil = document.querySelector('.menu-movil i');

		const movil = document.querySelector('.movil');

		const x = document.querySelector('.x');

		menuMovil.addEventListener('click', () => {
			movil.style.margin = "0"
		})

		x.addEventListener('click', () => {
			movil.style.margin = "0 0 0 -16rem"
		})
	
	}
	)
})();