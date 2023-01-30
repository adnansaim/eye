
const eyeball = document.querySelector('.eyeball');


document.addEventListener('mousemove', function (e) {
    const x = e.clientX * 100 / window.innerWidth + '%';
    const y = e.clientY * 100 / window.innerHeight + '%';

    eyeball.style.left = x
    eyeball.style.top = y
    eyeball.style.transform = "translate(-" + x + ",-" + y + ")";
});
