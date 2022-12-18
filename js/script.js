{

  const welcome = () => {
    console.log("Witam wszystkich, którzy tu zaglądają :)!");
  }

  welcome();

  const onButtonsClick = (button, icon) => {
    button.addEventListener("click", () => {
      icon.classList.toggle("section__icon--open");
      button.innerText = icon.classList.contains("section__icon--open") ? "Ukryj" : "Kliknij, aby otworzyć link";

    });

  };

  const onButtonsHiddenClick = (button, section) => {
    button.addEventListener("click", () => {
      section.classList.toggle("section__hide");
      button.innerText = section.classList.contains("section__hide") ? "Pokaż treść" : "Ukryj treść";

    });

  };

  const init = () => {

    const buttonSicily = document.querySelector(".js-buttonSicily");
    const iconSicily = document.querySelector(".js-iconSicily");
    const buttonTatry = document.querySelector(".js-buttonTatry");
    const iconTatry = document.querySelector(".js-iconTatry");
    const buttonClimbing = document.querySelector(".js-buttonClimbing");
    const iconClimbing = document.querySelector(".js-iconClimbing");
    const buttonHideTravels = document.querySelector(".js-buttonHideTravels");
    const travels = document.querySelector(".js-travels");
    const buttonHideTrekking = document.querySelector(".js-buttonHideTrekking");
    const trekking = document.querySelector(".js-trekking");
    const buttonHideClimbing = document.querySelector(".js-buttonHideClimbing");
    const climbing = document.querySelector(".js-climbing");

    onButtonsClick(buttonSicily, iconSicily);
    onButtonsClick(buttonTatry, iconTatry);
    onButtonsClick(buttonClimbing, iconClimbing);
    onButtonsHiddenClick(buttonHideTravels, travels);
    onButtonsHiddenClick(buttonHideTrekking, trekking);
    onButtonsHiddenClick(buttonHideClimbing, climbing);


  };

  init();

}




