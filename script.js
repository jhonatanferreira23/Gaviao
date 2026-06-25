const image = document.getElementById("playerImage");
const button = document.getElementById("changeBorder");

button.addEventListener("click", () => {
    const colors = [
        "#004d98",
        "#a50044",
        "#ffd700",
        "#00ff00",
        "#ff4500"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    image.style.borderColor = randomColor;
});
