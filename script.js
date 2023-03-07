const noticiasLista = document.getElementById("noticias-lista");

fetch( // SE PREFERIR PT-BR, MUDE NA URL "country=us" para "country=br"
  "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=SUA_API_AQUI"
)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = article.title;
      li.appendChild(link);
      noticiasLista.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
