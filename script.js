// GSAP animation and Three.js for fireworks
document.getElementById("heartButton").addEventListener("click", () => {
    document.getElementById("heartButton").style.display = "none";
    createFireworks();
    showImages();
});

function createFireworks() {
    const fireworksContainer = document.getElementById("fireworks");

    for (let i = 0; i < 20; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        fireworksContainer.appendChild(firework);

        gsap.to(firework, {
            duration: 1.5,
            opacity: 0,
            scale: Math.random() * 2,
            rotation: Math.random() * 360,
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            onComplete: () => fireworksContainer.removeChild(firework),
        });
    }
}

function showImages() {
    const gallery = document.getElementById("gallery");
    gallery.classList.remove("hidden");

    const images = [
        "images/photo_1.jpg",
        "images/photo_2.jpg",
        "images/photo_3.jpg",
        "images/photo_4.jpg",
        "images/photo_5.jpg",
        "images/photo_6.jpg",
        "images/photo_7.jpg",
        "images/photo_8.jpg",
        "images/photo_9.jpg",
        "images/photo_10.jpg",
        "images/photo_11.jpg",
        "images/photo_12.jpg",
        "images/photo_13.jpg",
        "images/photo_14.jpg",
        "images/photo_15.jpg"
    ];

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);

        gsap.to(img, {
            opacity: 1,
            scale: 1,
            delay: index * 0.5,
        });
    });
}

