const result = () => window.prompt('inscriver votre resultat (v = victoire / D = defaite)')
const send = () => {
    const xhttp = new XMLHttpRequest();
    const name
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        name = document.getElementById("name").innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "/new/" + name, true);
    xhttp.send();
  }