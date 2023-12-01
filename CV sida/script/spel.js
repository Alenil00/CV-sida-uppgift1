// Hämta referensen till länken
const spelaBtn = document.getElementById('spelaBtn');
const spelaBtn2 = document.getElementById('spelaBtn2');


// Lägg till en händelse för klick
spelaBtn.addEventListener('click', function(event) {
  // Förhindra standardbeteendet för länken (att navigera till en ny sida)
  event.preventDefault();

  // Öppna länken i en ny flik eller ett nytt fönster
  const nyFlik = window.open("number.html", "_blank");
  if (nyFlik) {
    // Om fönstret öppnades, fokusera på den nya fliken/fönstret
    nyFlik.focus();
  } else {
    // Om blockerare för popup-fönster hindrade öppnandet, visa meddelande till användaren
    alert("Popup-fönster blockerades. Kontrollera din webbläsares inställningar.");
  }
});

// Lägg till en händelse för klick
spelaBtn2.addEventListener('click', function(event) {
  // Förhindra standardbeteendet för länken (att navigera till en ny sida)
  event.preventDefault();

  // Öppna länken i en ny flik eller ett nytt fönster
  const nyFlik = window.open("övning2.html", "_blank");
  if (nyFlik) {
    // Om fönstret öppnades, fokusera på den nya fliken/fönstret
    nyFlik.focus();
  } else {
    // Om blockerare för popup-fönster hindrade öppnandet, visa meddelande till användaren
    alert("Popup-fönster blockerades. Kontrollera din webbläsares inställningar.");
  }
});


