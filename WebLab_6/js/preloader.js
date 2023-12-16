document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(".preloader").style.display = "flex";
        document.querySelector(".content").style.display = "none";
    } else {

        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }
};