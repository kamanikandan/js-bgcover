//Set content height to the image block
const rows = document.querySelectorAll('.row');
rows.forEach((row, index) => {
	let imgElement = row.querySelector('.col-img');
	let contentElement = row.querySelector('.content');
	let contentHeight = contentElement.clientHeight;
	imgElement.style.height = `${contentHeight}px`;
});

//bg-cover functionality
const boxes = document.querySelectorAll('.col-img');
boxes.forEach((box) => {
	let bh = box.clientHeight,
		bw = box.clientWidth,
		elImg = box.getElementsByTagName('img')[0],
		imgHeight = elImg.naturalHeight,
		imgWidth = elImg.naturalWidth;
	//Set width or height based on original height and width of the images
	imgHeight > imgWidth ? setImageWidth() : setImageHight();

	function setImageWidth() {
		elImg.classList.add('ww');
		elImg.classList.remove('wh');
	}
	function setImageHight() {
		elImg.classList.add('wh');
		elImg.classList.remove('ww');
	}
	let newImagewidth = elImg.clientWidth,
		newImageHeight = elImg.clientHeight,
		halfWidth = (newImagewidth - bw) / 2,
		halfHeight = (newImageHeight - bh) / 2;

	//Move image based on width or height of the newly updated width and height
	if (newImageHeight > newImagewidth) {
		elImg.style.marginTop = `-${halfHeight}px`;
		elImg.style.marginLeft = 0;
	} else if (newImageHeight < newImagewidth) {
		elImg.style.marginLeft = `-${halfWidth}px`;
		elImg.style.marginTop = 0;
	} else {
		elImg.style.width = '100%';
	}
});
