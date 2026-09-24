const backToTop = document.createElement("button");

backToTop.textContent = "↑";

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.display = "none";
backToTop.style.padding = "10px 14px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.fontSize = "20px";
backToTop.style.zIndex = "1000";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});