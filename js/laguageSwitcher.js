const description = document.getElementById("header__description#h1");
const description_braces = document.getElementById(
  "header__description#braces"
);
const contact = document.getElementsByClassName("footer__links__mail")[0];

if (
  window.navigator.language === "pl-PL" ||
  window.navigator.language === "pl" ||
  window.navigator.language === "PL"
) {
  const description = document.getElementById("header__description#h1");
  const description_braces = document.getElementById(
    "header__description#braces"
  );
  const contact = document.getElementsByClassName("footer__links__mail")[0];

  console.log(window.navigator.language);
  description.innerHTML =
    "Jesteśmy domem produkcyjnym specjalizującym się w <strong>filmie oraz w fotografii.</strong> Działamy we<strong>Wrocławiu.</strong>";
  description_braces.innerText =
    "(Oczywiście mamy samochód i możemy wszędzie dojechać)";
  contact.innerText = "skontaktuj się z nami";
}
