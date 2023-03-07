// Seção de Gerais
const politicaLista = document.getElementById("gerais-lista");

fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=c4b913c495fe4138b231641539267631")
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

fetch("https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=c4b913c495fe4138b231641539267631")
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

fetch("https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=c4b913c495fe4138b231641539267631")
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

fetch("https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=c4b913c495fe4138b231641539267631")
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