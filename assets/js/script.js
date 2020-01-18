// Smooth Scroll

var posY = 0;
var jarak = 15;

function smoothScroll(id) {

	var target = document.getElementById(id).offsetTop; // jarak atas dan div

	var scrollAnimate = setTimeout(function(){
		smoothScroll(id)
	}, 5);

	posY = posY + jarak;

	if (posY >= target) {
		clearTimeout(scrollAnimate);
		posY = 0;
	} else {
		window.scroll(0, posY);
	}

	return false;

}


// Validasi Formular

function validasi(form) {

	var lolos = true;

	for (var i = 0; i < 3; i++) {
		
		if (form[i].value.trim().length <= 0) {

			switch (i) {
				case 0: errorText = 'Nama';	break;
				case 1: errorText = 'Email'; break;
				case 2: errorText = 'Pesan'; break;
				default:
			}

			// jika belum ada error
			if (form[i].nextElementSibling.className != 'error') {
				form[i].style.borderColor = '#DC1F00';
				form[i].insertAdjacentHTML('afterend', "<div class='error'>" + errorText +" Tidak boleh kosong!</div>");
			}

			lolos = false;
		} else {
			// sebelumnya sudah ada error, hapus error
			if (form[i].nextElementSibling.className == 'error') {
				form[i].style.borderColor = '#eaeaea';
				form[i].nextElementSibling.remove();
			}
		}

	}

	return lolos;

}

// Image Gallery

var target_gambar 	= document.getElementById('target_gambar');
var array_gambar  	= document.getElementById('karya-lain').children;
var no_sekarang		= 0;

function ganti_gambar(gambar) {
	target_gambar.src = gambar.getAttribute('src');
	no_sekarang = gambar.className;
}

function ganti_sebelum() {
	no_sekarang = no_sekarang - 1;
	if (no_sekarang < 0) no_sekarang = 2;
	target_gambar.src = array_gambar[no_sekarang].getAttribute("src");
}

function ganti_berikut() {
	no_sekarang = no_sekarang + 1;
	if (no_sekarang > 2) no_sekarang = 2;
	target_gambar.src = array_gambar[no_sekarang].getAttribute("src");
}

