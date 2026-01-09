// Récupérer les articles depuis localStorage ou JSON externe
let articles = JSON.parse(localStorage.getItem("articles")) || [];

// Tri et affichage
const container = document.getElementById("articles");
articles.sort((a,b)=>new Date(b.date)-new Date(a.date));

articles.forEach(article => {
  const div = document.createElement("div");
  div.className = "article";
  div.innerHTML = `
    <h2>${article.titre}</h2>
    <div class="meta">Classe : ${article.classe} | Thème : ${article.theme} | Date : ${article.date}</div>
    <p>${article.contenu.replace(/\n/g,"<br>")}</p>
  `;
  container.appendChild(div);
});
