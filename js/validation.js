const form = document.getElementById("form");

const checkForm = (event) => {
  event.preventDefault();
  const username = event.target[0].value;
  const userSurname = event.target[1].value;
  const userEmail = event.target[2].value;
  const userInterested = [
    event.target[3],
    event.target[4],
    event.target[5],
    event.target[6],
  ];

  //sprawdzanie wpisanych danych

  if (!username || username.length === 0) {
    console.log("Invalid name");
    alert("Wprowadz imie");
    return;
  }

  if (!userSurname || userSurname.length === 0) {
    console.log("Invalid surname");
    alert("Wprowadz nazwisko");
    return;
  }

  if (!userEmail || userEmail.length === 0 || !userEmail.includes("@")) {
    console.log("Invalid email");
    alert("Wprowadz poprawny email");
    return;
  }

  //sprawdzanie zainteresowan

  const newArray = userInterested.filter((u) => u.checked === true);

  if (newArray.length === 0) {
    alert("Proszę zaznacz co Cię interesuje");
    return;
  }

  //wyswietlanie calosci

  console.log(username);
  console.log(userSurname);
  console.log(userEmail);
  newArray.map((u) => {
    console.log(u.value);
  });
};

form.addEventListener("submit", checkForm);
