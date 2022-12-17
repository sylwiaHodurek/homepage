
  {  
    const welcome = () => {
        console.log("Witam wszystkich, którzy tu zaglądają :)!");
    }

    welcome();


    let buttonSicily = document.querySelector(".js-buttonSicily");
    let iconSicily = document.querySelector(".js-iconSicily");
    
    buttonSicily.addEventListener("click", () => {
      iconSicily.classList.toggle("js-openIcon");
    
     
        buttonSicily.innerText =  iconSicily.classList. contains ("js-openIcon") ? "Ukryj" : "Kliknij, aby otworzyć link";
     
    });
   


    // let buttonHideTravels = document.querySelector(".js-buttonHideTravels");
    // let travels = document.querySelector(".js-travels");
    
    // buttonHideTravels.addEventListener("click", () => {
    //   travels.classList.toggle("js-hideTravels");
    
    //   buttonHideTravels.innerText = travels.classList.contains("js-hideTravels")
    //     ? "Pokaż treść"
    //     : "Ukryj treść";
    // });
    
    // let buttonTatry = document.querySelector(".js-buttonTatry");
    // let iconTatry = document.querySelector(".js-iconTatry");
    
    // buttonTatry.addEventListener("click", () => {
    //   iconTatry.classList.toggle("js-openIcon");
    
    //   if (iconTatry.classList.contains("js-openIcon")) {
    //     buttonTatry.innerText = "Ukryj";
    //   } else {
    //     buttonTatry.innerText = "Kliknij, aby otworzyć link";
    //   }
    // });
    
    // let buttonHideTrekking = document.querySelector(".js-buttonHideTrekking");
    // let trekking = document.querySelector(".js-trekking");
    
    // buttonHideTrekking.addEventListener("click", () => {
    //   trekking.classList.toggle("js-hideTrekking");
    
    //   buttonHideTrekking.innerText = trekking.classList.contains("js-hideTrekking")
    //     ? "Pokaż treść"
    //     : "Ukryj treść";
    // });
    
    // let buttonClimbing = document.querySelector(".js-buttonClimbing");
    // let iconClimbing = document.querySelector(".js-iconClimbing");
    
    // buttonClimbing.addEventListener("click", () => {
    //   iconClimbing.classList.toggle("js-openIcon");
    
    //   if (iconClimbing.classList.contains("js-openIcon")) {
    //     buttonClimbing.innerText = "Ukryj";
    //   } else {
    //     buttonClimbing.innerText = "Kliknij, aby otworzyć link";
    //   }
    // });
    
    // let buttonHideClimbing = document.querySelector(".js-buttonHideClimbing");
    // let climbing = document.querySelector(".js-climbing");
    
    // buttonHideClimbing.addEventListener("click", () => {
    //   climbing.classList.toggle("js-hideClimbing");
    
    //   buttonHideClimbing.innerText = climbing.classList.contains("js-hideClimbing")
    //     ? "Pokaż treść"
    //     : "Ukryj treść";
    // });
    