const blobs = document.querySelectorAll(".blob");

const animateBlob = (x, y) => {
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


document.body.onpointermove = (e) => {
    const { clientX, clientY } = e;
    animateBlob(clientX, clientY);
};

if ((window.innerWidth || document.documentElement.clientWidth) > 850) {
    // do something
}
