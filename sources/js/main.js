let cartItems = new Array();
let total = 0;
function authenticate() {
  let errors = new Array();

  let pass = document.getElementById("pass");
  var name = document.getElementById("name");
  var mail = document.getElementById("mail");
  var family = document.getElementById("family");
  var budget = document.getElementById("budget");

  if (name.value.length < 6)
    errors.push("Name must contain atleast 6 characters");

  if (pass.value.length < 5)
    errors.push("\nPassword must contain atleast 5 characters");

  if (errors.length) {
    alert(errors);
    document.loginForm.action = "#";
    errors.length = 0;
  } else {
    document.loginForm.action = "backpack.html";
    alert("Login successful");
    errors.push("redirecting");
    localStorage.setItem("Name", name.value);
    localStorage.setItem("Pass", pass.value);
  }
}

function cart(destination, price) {
  alert("successfully added to cart");
  cartItems.push("\n" + destination);
  total += price;
  localStorage.setItem("Bill", total);
}

// function displayCart() {
//   alert(cartItems);
// }

function placeOrder() {
  let checkPass = prompt("Enter your password for ID verification");
  if (checkPass !== localStorage.getItem("Pass")) {
    alert("incorrect password");
  } else {
    alert(
      "Your order has been placed.\n" +
        "Bill in the name of " +
        localStorage.getItem("Name")
    );
  }
}

function emptyCart() {
  alert("cart is now empty");
  localStorage.setItem("Bill", 0);
}
