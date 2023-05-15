window.addEventListener('load', function() {
	var loader = document.querySelector('.loader');
	var content = document.querySelector('.content');
	content.style.display = 'none';
	loader.style.animation = 'fadeOut 1s ease-in-out forwards';

	setTimeout(function() {
		loader.style.display = 'none';
		content.style.display = 'block';
	}, 1000);
});