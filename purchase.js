// Javascript ist der Letzte baublock einer einfachen Webseite.
// Es wird verwendet, um die Webseite interaktiv zu machen, damit der User zum Beispiel auf ein Knopf drücken kann,
// welcher irgendeine Aktion ausführen soll.

// Mit document.getElementById() kann man ein Element von einem HTML File welches eine einzigartige Id hat referenzieren
// damit man zum beispiel den Inhalt ändern kann
const purchaseButton = document.getElementById("purchase-button");
const receiptSection = document.getElementById("purchase-receipt");
const receiptText = document.getElementById("receipt-text");

// Dieser Code wird nur ausgeführt, wenn der User auf den Purchase Button drückt
purchaseButton.addEventListener("click", function () {
  const quantity = parseFloat(document.getElementById("quantity").value);
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const price = 99;

  const totalPrice = quantity * price;
  receiptText.innerHTML = `
    Gekauft von: ${name}<br>
    Email: ${email}<br>
    Lieferungsadresse: ${address}<br>
    Anzahl: ${quantity}<br>
    Preis: $${totalPrice}
  `;
  receiptSection.style.display = "block";
});
