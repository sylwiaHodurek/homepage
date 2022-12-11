console.log("Cześć!");

let buttonSicily = document.querySelector(".js-buttonSicily");
let iconSicily = document.querySelector(".js-iconSicily");
let buttonHideTravels = document.querySelector(".js-buttonHideTravels")
let travels = document.querySelector(".js-travels")
let buttonTatry = document.querySelector(".js-buttonTatry");
let iconTatry = document.querySelector(".js-iconTatry");
let buttonHideTrekking = document.querySelector(".js-buttonHideTrekking")
let trekking = document.querySelector(".js-trekking")
let buttonClimbing = document.querySelector(".js-buttonClimbing");
let iconClimbing = document.querySelector(".js-iconClimbing");
let buttonHideClimbing = document.querySelector(".js-buttonHideClimbing")
let climbing = document.querySelector(".js-climbing")


buttonSicily.addEventListener("click", () => {
    iconSicily.classList.toggle("js-openIcon");

    if (iconSicily.classList.contains("js-openIcon")) {
        buttonSicily.innerText = ("Ukryj")

    }
    else {
        buttonSicily.innerText = ("Kliknij, aby otworzyć link")

    }

});

buttonHideTravels.addEventListener("click", () => {
    travels.classList.toggle("js-hideTravels");

    buttonHideTravels.innerText = travels.classList.contains("js-hideTravels") ? "Pokaż treść" : "Ukryj treść";

});

buttonTatry.addEventListener("click", () => {
    iconTatry.classList.toggle("js-openIcon");

    if (iconTatry.classList.contains("js-openIcon")) {
        buttonTatry.innerText = ("Ukryj")

    }
    else {
        buttonTatry.innerText = ("Kliknij, aby otworzyć link")

    }

});

buttonHideTrekking.addEventListener("click", () => {
    trekking.classList.toggle("js-hideTrekking");

    buttonHideTrekking.innerText = trekking.classList.contains("js-hideTrekking") ? "Pokaż treść" : "Ukryj treść";

});

buttonClimbing.addEventListener("click", () => {
    iconClimbing.classList.toggle("js-openIcon");

    if (iconClimbing.classList.contains("js-openIcon")) {
        buttonClimbing.innerText = ("Ukryj")

    }
    else {
        buttonClimbing.innerText = ("Kliknij, aby otworzyć link")

    }

});

buttonHideClimbing.addEventListener("click", () => {
    climbing.classList.toggle("js-hideClimbing");

    buttonHideClimbing.innerText = climbing.classList.contains("js-hideClimbing") ? "Pokaż treść" : "Ukryj treść";

});
