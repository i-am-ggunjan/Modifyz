let form = document.forms[0];
let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorAddress = document.getElementById("errorAddress");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.Name.value;
  const email = form.Email.value;
  const address = e.target.Address.value;
  const message = e.target.Message.value;

  if (name == null || name == "") {
    errorName.innerHTML = "Name can't be empty";
    return false;
  } else if (
    email.indexOf("@") > email.indexOf(".") ||
    email == null ||
    email == ""
  ) {
    console.log(email.indexOf("@"));
    errorEmail.innerHTML = "Enter valid Email";
    return false;
  } else if (address == null || address == "") {
    errorAddress.innerHTML = "Address can't be empty";
    return false;
  } else if (message == null || message == "") {
    errorMessage.innerHTML = "Message can't be empty";
    return false;
  }

  const obj = {
    name,
    email,
    address,
    message,
  };
  fetch("http://192.168.1.3:3000/first", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  }).then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  });
});
