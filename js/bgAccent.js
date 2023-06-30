const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const animateBlob = (x, y, blobs) => {
    // console.log(x, y);
    blobs.forEach((blob, index) => {
        blob.animate(
            {
                left: `${x}px`,
                top: `${y}px`,
                backgroundPositionX: `${x}px`,
                backgroundPositionY: `${y}px`
            },
            { duration: (index + 1) * 500, fill: "forwards" }
        );
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const bgAccent = document.querySelector('#bg_accent');
    for (let index = 0; index < 5; index++) {
        const blob = document.createElement('div');
        blob.classList.add('blob')
        bgAccent.appendChild(blob);
    }
    const blobs = document.querySelectorAll(".blob");
    if ((window.innerWidth || document.documentElement.clientWidth) > 850) {
        document.body.onpointermove = (e) => {
            const { clientX, clientY } = e;
            animateBlob(clientX, clientY, blobs);
        };
    } else {
        setInterval(
            () => {
                animateBlob(
                    randomIntFromInterval(0, parseInt(document.documentElement.clientWidth)),
                    randomIntFromInterval(0, parseInt(document.documentElement.clientHeight))
                )
            },
            5000)
    }
})