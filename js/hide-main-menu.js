function hide(act) {
	document.getElementsByClassName('side-menu')[0].style.transition = 'all 0.3s ease';
	document.getElementsByClassName('main-wrapper')[0].style.transition = 'all 0.3s ease';
	switch(act) {
		case 1:
			document.getElementsByClassName('side-menu')[0].style.width = '0';
			document.getElementsByClassName('main-wrapper')[0].style.padding = '0';
			document.getElementsByClassName('burger')[0].style.display = 'block';
			break;
		case 2:
			document.getElementsByClassName('side-menu')[0].style.width = '240px';
			document.getElementsByClassName('main-wrapper')[0].style.padding = '0 0 0 240px';
			document.getElementsByClassName('burger')[0].style.display = 'none';
			break;
		default: return;
	}
}


