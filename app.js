const body = document.getElementsByTagName("body")[0];
const navigation = document.getElementsByTagName("nav")[0];

function showSticky(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
       navigation.style.display = "flex";
    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        navigation.style.display = "none";
    }
}
window.addEventListener("scroll", showSticky);

function nav() {
    const btn = document.querySelectorAll('.hamburger-nav');
    const close = document.querySelector('#mobile-nav img');
    const nav = document.getElementById("mobile-nav");
    const a = document.querySelectorAll("#mobile-nav .nav a");

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            nav.style.display = "flex";
            body.style.overflow = "hidden";
            btn[i].classList.remove('hamburger-nav');
            navigation.style.display = 'none';
        });
        close.addEventListener('click', () => {
            nav.style.display = "none";
            body.style.overflow = "auto";
            btn[i].classList.add('hamburger-nav');
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) navigation.style.display = "flex";
        });
    }

    window.onclick = (e) => {
        for (let j = 0; j < a.length; j++) {
            if (e.target == a[j]) {
                nav.style.display = "none";
                body.style.overflow = "auto";
                for (let i = 0; i < btn.length; i++) btn[i].style.display = 'inline-block';
            }
        }
    }
}
nav();

function expand() {
    const btn = document.getElementById("expand");
    const panel = document.querySelector(".transformacije .container");

    btn.addEventListener('click', () => {
        if (panel.style.height === "auto") {
            panel.style.height = "322px";
            btn.innerHTML = "PRIKAŽI VIŠE";
        } else {
            panel.style.height = "auto";
            btn.innerHTML = "PRIKAŽI MANJE";
        }
    });
}
expand();

function showSection() {
    const btns = document.querySelectorAll('.container-price a');
    const section = document.querySelector('.more');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            section.style.display = 'block';
        });
    }
}
showSection();

function videoModal(src) {
    const modal = document.querySelector('.video-player');
    const video = document.querySelector('.video-player video');
    const close = document.querySelector('.video-player img');

    modal.style.display = 'flex';
    video.src = src;
    body.style.overflow = 'hidden';

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        video.src = '';
        body.style.overflow = 'auto';
    });
}
