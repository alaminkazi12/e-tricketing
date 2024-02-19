// scrolling effect
function goToParibahan() {
  document.getElementById("paribahan-section").scrollIntoView({
    behavior: "smooth",
  });
}

// now ticket section

const totalSeatsElement = document.getElementById("total-seats");
const selectedSeatsNumber = document.getElementById("selected-seats");
let totalSeatsNumber = parseInt(totalSeatsElement.innerText);
const allSeats = document.getElementsByClassName("seatButton");
let selectedSeats = 0;

for (const seat of allSeats) {
  seat.addEventListener("click", function () {
    if (!seat.classList.contains("disabled") && selectedSeats < 4) {
      seat.classList.add("bg-green"); // This should be "bg-green" instead of "bg-[#1DD100]"
      seat.classList.add("disabled");
      selectedSeats++;
      totalSeatsNumber--;
      selectedSeatsNumber.innerText = selectedSeats;
      totalSeatsElement.innerText = totalSeatsNumber;

      // append the seat name to the summary section
      const seatName = seat.innerText;
      const li = document.createElement("li");
      li.innerText = seatName;
      const li2 = document.createElement("li");
      li2.innerText = "Economoy";
      const li3 = document.createElement("li");
      li3.innerText = 550;

      const seatContainer = document.getElementById("selected-seats-container");
      seatContainer.appendChild(li);
      seatContainer.appendChild(li2);
      seatContainer.appendChild(li3);

      //   now pricing functionality

      const totalPrice = 550 * selectedSeats;
      document.getElementById("total-price").innerText = calculateTotalPrice();
    }
  });
}

function calculateTotalPrice() {
  const totalPrice = 550 * selectedSeats;
  return totalPrice;
}
