AFRAME.registerComponent('cursor-listener', {
    init: function () {
        const cursor = document.getElementById("cursor");

        this.el.addEventListener('click', () => {
            nextPreset();
        });

        this.el.addEventListener("mouseenter", () => {
            cursor.setAttribute("material", "color: white");
        });

        this.el.addEventListener("mouseleave", () => {
            cursor.setAttribute("material", "color: black");
        });
    }
});