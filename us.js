// Seção de Gerais
const politicaLista = document.getElementById("gerais-lista");

fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
	.then(response => response.json())
	.then(data => {
		data.articles.forEach(article => {
			const li = document.createElement("li");
			const link = document.createElement("a");
			link.href = article.url;
			link.textContent = article.title;
			li.appendChild(link);
			politicaLista.appendChild(li);
		});
	})
	.catch(error => console.log(error));

// Seção de esportes
const esportesLista = document.getElementById("esportes-lista");

fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=YOUR_API_KEY")
	.then(response => response.json())
	.then(data => {
		data.articles.forEach(article => {
			const li = document.createElement("li");
			const link = document.createElement("a");
			link.href = article.url;
			link.textContent = article.title;
			li.appendChild(link);
			esportesLista.appendChild(li);
		});
	})
	.catch(error => console.log(error));

// Seção de entretenimento
const entretenimentoLista = document.getElementById("ciencia-lista");

fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=YOUR_API_KEY")
	.then(response => response.json())
	.then(data => {
		data.articles.forEach(article => {
			const li = document.createElement("li");
			const link = document.createElement("a");
			link.href = article.url;
			link.textContent = article.title;
			li.appendChild(link);
			entretenimentoLista.appendChild(li);
		});
	})
	.catch(error => console.log(error));

// Seção de negócios
const negociosLista = document.getElementById("tecnologia-lista");

fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=YOUR_API_KEY")
	.then(response => response.json())
	.then(data => {
		data.articles.forEach(article => {
			const li = document.createElement("li");
			const link = document.createElement("a");
			link.href = article.url;
			link.textContent = article.title;
			li.appendChild(link);
			negociosLista.appendChild(li);
		});
	})
	.catch(error => console.log(error));