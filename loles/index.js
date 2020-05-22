window.onload = () => {
    let a = 50;
    setInterval(() => {
        a+=20;
        document.querySelector('.sub').style.fontSize = a+'px';
    }, 1000);
};