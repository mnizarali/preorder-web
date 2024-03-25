// parallax effects
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // hero
    $('.main').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
    });

    // item muncul
    if (wScroll > $('.content-card').offset().top - 1000) {
        $('.content-card').each(function (i) {
            setTimeout(function () {
                $('.content-card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        })
    };

    // card testi
    if (wScroll > $('.main-testi').offset().top - 1000) {
        $('.main-testi').each(function (i) {
            setTimeout(function () {
                $('.main-testi').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        })
    };

    // sec order
    if (wScroll > $('.form-input').offset().top - 700) {
        $('.form-input').each(function (i) {
            setTimeout(function () {
                $('.form-input').eq(i).addClass('muncul');
            }, 100 * (i + 1));
        })
    };
    if (wScroll > $('.image-order-item').offset().top - 1000) {
        $('.image-order-item').each(function (i) {
            setTimeout(function () {
                $('.image-order-item').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        })
    };
})


// navbar animation
const header = document.querySelector('header');
const navItem = document.querySelectorAll('.nav-item');
const navMenu = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger-inp');
const hamItem = document.querySelectorAll('.ham-item');
const btnInside = document.querySelector('.inside-links');
const btnOutside = document.querySelector('.outside-links');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        header.style.backgroundColor = '#fff';
        // header.style.borderRadius = '15px';
        // header.style.width = '85%';
        // header.style.left = '7%';
        // header.style.top = '30px';
        btnOutside.style.color = '#ff4500';
        hamItem.forEach(item => {
            item.style.backgroundColor = '#FF3D00';
        });;
        navItem.forEach(item => {
            item.style.color = '#000';
        });
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderRadius = '0';
        header.style.width = '100%';
        header.style.left = '0';
        header.style.top = '0';
        navMenu.style.color = '#fffff';
        btnOutside.style.color = '#fff';
        navItem.forEach(item => {
            item.style.color = '#fff';
        });
        hamItem.forEach(item => {
            item.style.backgroundColor = '#fff';
        });
    }
});

hamburger.addEventListener('click', () => {
    if (hamburger.checked) {
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }
})

// navbar show dan hide
let lastScrollTop = 0;

header.classList.add("visible");

window.addEventListener(
    "scroll",
    () => {
        var {
            scrollY
        } = window;
        if (scrollY > lastScrollTop) {
            // downward scroll
            header.classList.remove("visible");
        } else if (scrollY < lastScrollTop) {
            // upward scroll
            header.classList.add("visible");
        }

        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
    }, {
        passive: true
    }
);


// navtabs
const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content-box');

// Menjadikan kelas tab-btn pertama sebagai active secara default
tabs[0].classList.add('active');
allContent[0].classList.add('active');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');

        allContent.forEach(content => {
            content.classList.remove('active')
        });
        allContent[index].classList.add('active');
    })
})


// order
var quantityInput = document.querySelector('.jumlah');

quantityInput.addEventListener('input', function () {
    var variant = document.querySelector('select[name="varian"]').value;
    var quantity = quantityInput.value;

    if (variant !== '') {
        var pricePerItemText;
        if (variant === 'Bakso Bumbu Rujak') {
            pricePerItemText = document.querySelector('.content-card:nth-child(1) .btn-card').textContent;
        } else if (variant === 'Bakso Bumbu Geprek') {
            pricePerItemText = document.querySelector('.content-card:nth-child(2) .btn-card').textContent;
        }
        var pricePerItem = parseInt(pricePerItemText.replace('Rp. ', '').replace('.', ''));

        var totalPrice = pricePerItem * quantity;
        document.querySelector('.total-harga').value = 'Rp. ' + totalPrice.toLocaleString('id-ID') + ' -';
    }
});

// alamat order
const alamatSelect = document.getElementById('alamat');
const alamatInput = document.getElementById('alamat-input');

alamatSelect.addEventListener('change', function () {
    if (alamatSelect.value === 'Wikrama') {
        alamatInput.disabled = true;
        alamatInput.readOnly = false;
        alamatInput.placeholder = '';
        alamatInput.removeAttribute('name');
        alamatSelect.setAttribute('name', 'alamat');
        alamatInput.value = '';
    } else if (alamatSelect.value === 'Rumah atau lokasi yang anda inginkan') {
        alamatInput.disabled = false;
        alamatInput.readOnly = false;
        alamatInput.placeholder = 'tuliskan alamat yang anda inginkan';
        alamatInput.setAttribute('name', 'alamat');
        alamatSelect.removeAttribute('name');
        alamatInput.value = '';
    }
});

// slick main
