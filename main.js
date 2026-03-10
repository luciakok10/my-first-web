import confetti from 'canvas-confetti';

const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => {
    // 1. 變色邏輯
    const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // 2. 噴發特效
    confetti({
        particleCount: 500,
        spread: 200,
        origin: { y: 0.6 }
    });
});