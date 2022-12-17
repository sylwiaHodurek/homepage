{


    const welcome = () => {
        console.log("Witam wszystkich, którzy tu zaglądają :)!");
    }

    welcome();

    // let buttonSicily = document.querySelector(".js-buttonSicily");
    // let iconSicily = document.querySelector(".js-iconSicily");
    // let buttonHideTravels = document.querySelector(".js-buttonHideTravels")
    // let travels = document.querySelector(".js-travels")
    // // let buttonTatry = document.querySelector(".js-buttonTatry");
    // let iconTatry = document.querySelector(".js-iconTatry");
    // let buttonHideTrekking = document.querySelector(".js-buttonHideTrekking")
    // let trekking = document.querySelector(".js-trekking")
    // let buttonClimbing = document.querySelector(".js-buttonClimbing");
    // let iconClimbing = document.querySelector(".js-iconClimbing");
    // let buttonHideClimbing = document.querySelector(".js-buttonHideClimbing")
    // let climbing = document.querySelector(".js-climbing")


    // const onButtonsTravelClick = (button, travels,iconSicily) => {
    //     button.addEventListener("click", () => {
    //         iconSicily.classList.toggle(".section__button");
    //         iconSicily.innerText = buttonSicily.contains(".section__button") ? "Ukryj" : "Kliknij, aby otworzyć link";


    //     })
    // };


    // const init = () => {

    //     const buttonSicily = document.querySelector(".js-buttonSicily");
    //     const iconSicily = document.querySelector(".js-iconSicily");
    //     const buttonHideTravels = document.querySelector(".js-buttonHideTravels");
    //     const travels = document.querySelector(".js-travels");


    //     onButtonsTravelClick(buttonSicily);
    //     onButtonsTravelClick(iconSicily);
    //     onButtonsTravelClick(buttonHideTravels);
    //     onButtonsTravelClick(travels);


    // };

    // init();

    // }



    const hideSection = (section, button) => {
        button.addEventListener("click", () => {
            section.classList.toggle(".section__button--hideButton");
            button.innerText = section.classList.contains(".section__button--hideButton") ? "Pokaż treść" : "Ukryj treść";
        });
    };

    const init = () => {

        const travels = document.querySelector(".js-travels");
        const buttonHideTravels = document.querySelector(".js-buttonHideTravels");
        const buttonHideTrekking = document.querySelector(".js-buttonHideTrekking");
        const trekking = document.querySelector(".js-trekking");
        const buttonHideClimbing = document.querySelector(".js-buttonHideClimbing");
        const climbing = document.querySelector(".js-climbing");


        hideSection(travels);
        hideSection(buttonHideTravels);
        hideSection(buttonHideTrekking);
        hideSection(trekking);
        hideSection(buttonHideClimbing);
        hideSection(climbing);


    };

    init();


}
// buttonSicily.addEventListener("click", () => {
//     iconSicily.classList.toggle("js-openIcon");

//     if (iconSicily.classList.contains("js-openIcon")) {
//         buttonSicily.innerText = ("Ukryj")

//     }
//     else {
//         buttonSicily.innerText = ("Kliknij, aby otworzyć link")

//     }

// });

// buttonHideTravels.addEventListener("click", () => {
//     travels.classList.toggle("js-hideTravels");

//     buttonHideTravels.innerText = travels.classList.contains("js-hideTravels") ? "Pokaż treść" : "Ukryj treść";

// });

// // buttonTatry.addEventListener("click", () => {
// //     iconTatry.classList.toggle("js-openIcon");

// //     if (iconTatry.classList.contains("js-openIcon")) {
// //         buttonTatry.innerText = ("Ukryj")

// //     }
// //     else {
// //         buttonTatry.innerText = ("Kliknij, aby otworzyć link")

// //     }

// // });

// // buttonHideTrekking.addEventListener("click", () => {
// //     trekking.classList.toggle("js-hideTrekking");

// //     buttonHideTrekking.innerText = trekking.classList.contains("js-hideTrekking") ? "Pokaż treść" : "Ukryj treść";

// // });

// // buttonClimbing.addEventListener("click", () => {
// //     iconClimbing.classList.toggle("js-openIcon");

// //     if (iconClimbing.classList.contains("js-openIcon")) {
// //         buttonClimbing.innerText = ("Ukryj")

// //     }
// //     else {
// //         buttonClimbing.innerText = ("Kliknij, aby otworzyć link")

// //     }

// // });

// // buttonHideClimbing.addEventListener("click", () => {
// //     climbing.classList.toggle("js-hideClimbing");

// //     buttonHideClimbing.innerText = climbing.classList.contains("js-hideClimbing") ? "Pokaż treść" : "Ukryj treść";

// // })
