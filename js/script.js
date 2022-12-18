{

  const welcome = () => {
    console.log("Witam wszystkich, którzy tu zaglądają :)!");
  }

  welcome();

  const onButtonsClick = (button, icon) => {
    button.addEventListener("click", () => {
      icon.classList.toggle("js-openIcon");
      button.innerText = icon.classList.contains("js-openIcon") ? "Ukryj" : "Kliknij, aby otworzyć link";

    });

  };

  const onButtonsHiddenClick = (button, section) => {
    button.addEventListener("click", () => {
      section.classList.toggle("js-hideTravels");
      button.innerText = section.classList.contains("js-hideTravels") ? "Pokaż treść" : "Ukryj treść";

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




