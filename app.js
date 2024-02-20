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
      seat.classList.add("bg-green");
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

      //   grand total
      let grandTotal = totalPrice;
      document.getElementById("grand-total").innerText = grandTotal;

      if (selectedSeats >= 1 && selectedSeats < 4) {
        const inputPhoneNumber = document.getElementById("phoneNumber");
        inputPhoneNumber.addEventListener("input", function () {
          const value = inputPhoneNumber.value;
          const valueInNumber = parseInt(value);
          if (!isNaN(valueInNumber)) {
            const submitButton = document.getElementById("submitButton");
            submitButton.classList.remove("btn-disabled");
          }
        });
      }

      //   copun here
      else if (selectedSeats === 4) {
        const couponButton = document.getElementById("coupon-btn");
        const couponBox = document.getElementById("coupon-box");
        couponButton.classList.remove("btn-disabled");
        couponBox.classList.remove("input-disabled");
        couponButton.addEventListener("click", function () {
          const couponBoxValue = couponBox.value;
          if (couponBoxValue === "NEW15") {
            const couponGrandTotal = totalPrice - totalPrice * 0.15;
            document.getElementById("grand-total").innerText = couponGrandTotal;
            const couponBoxContainer = document.getElementById(
              "coupon-box-container"
            );
            couponBoxContainer.classList.add("hidden");
          } else if (couponBoxValue === "Couple 20") {
            const couponGrandTotal = totalPrice - totalPrice * 0.2;
            document.getElementById("grand-total").innerText = couponGrandTotal;
            const couponBoxContainer = document.getElementById(
              "coupon-box-container"
            );
            couponBoxContainer.classList.add("hidden");
          } else {
            alert("Please provide the right copupon");
          }
        });
      }
    }
  });
}

const cButton = document.getElementById("coupon-btn");
const cButtonClass = cButton.classList;
const phoneNumber = document.getElementById("phoneNumber");
const submitButton = document.getElementById("submitButton");

function calculateTotalPrice() {
  const totalPrice = 550 * selectedSeats;
  return totalPrice;
}
