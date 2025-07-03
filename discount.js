// practice exercise ::

function metroTicket() {
  const femaleTicket = 2500;
  const maleTicket = 4000;
  const kidTicket = 2000;
  let oldPe_disc;
  let halfDisc;

  let mssg = null;

  let userAge = Number(document.querySelector("#userAge").value);

  let usergender = document.querySelector("#userGender").value;

  if (usergender === "Female") {
    if (userAge <= 5 && userAge > 0) {
      mssg = document.querySelector("#display_price").innerHTML =
        "You are under 5 years old so that, you do'nt need to pay...";
    } else if (userAge > 5 && userAge <= 8) {
      mssg = document.querySelector("#display_price").innerHTML =
        "Kids up to 8 years have  half ticket price which is Rs 1000";
    } else if (userAge > 8 && userAge < 100) {
      halfDisc = Math.round(2500 * (50 / 100));
      mssg = document.querySelector(
        "#display_price"
      ).innerHTML = `You are female so that you have 50% discount on the total price which is Rs ${halfDisc}`;
    } else {
      alert("Alien in the house...");
    }
  } else {
    if (userAge <= 5 && userAge > 0) {
      mssg = document.querySelector("#display_price").innerHTML =
        "You are under 5 years old so that, you do'nt need to pay...";
    } else if (userAge > 5 && userAge <= 8) {
      mssg = document.querySelector("#display_price").innerHTML =
        "Kids up to 8 years have  half ticket price which is Rs 1250";
    } else if (userAge > 65 && userAge < 100) {
      oldPe_disc = Math.round(4000 * (30 / 100));
      mssg = document.querySelector(
        "#display_price"
      ).innerHTML = `People over 65 years of age only pay 30% of the ticket which is
            ${oldPe_disc}`;
    } else if (userAge > 8 && userAge < 65) {
      mssg = document.querySelector("#display_price").innerHTML =
        "You need to pay full price.";
    } else {
      alert("Alien in the house...");
    }
  }
}
