// Funktion för att skapa rutor med information från JSON
function skapaRutor(data) {
  const container = document.getElementById('container');

  container.innerHTML = '';

  data.forEach(function(post) {
    const ruta = document.createElement('div');
    ruta.classList.add('ruta');

    const rubrik = document.createElement('h2');
    rubrik.textContent = post.rubrik;

    const info = document.createElement('p');
    info.textContent = post.info;

    ruta.appendChild(rubrik);
    ruta.appendChild(info);

    container.appendChild(ruta);
  });
}


  async function getJson() {
    try {
      const response = await fetch('../data/cv.json');
      const data = await response.json();
      skapaRutor(data);
    } catch (error) {
      console.error('Det gick inte att hämta data: ', error);
    }
  }
  
  // Anropa funktionen för att hämta och skapa rutor med informationen från JSON
  getJson();

