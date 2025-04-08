const noticias = [
    {
      id: 1,
      titulo: "Cidade Inteligente em Expansão",
      imagem: "noticia.jpg",
      descricao: "Tecnologia transforma o modo de viver nas metrópoles.",
      link: "detalhes.html"
    },
    {
      id: 2,
      titulo: "Nova Geração de Jornalistas",
      imagem: "noticia.jpg",
      descricao: "Jovens talentos renovam o jornalismo investigativo.",
      link: "detalhes.html"
    },
    {
      id: 3,
      titulo: "Notícia de Última Hora",
      imagem: "noticia.jpg",
      descricao: "Veja os destaques que estão mudando o mundo hoje.",
      link: "detalhes.html"
    }
  ];

  const container = document.getElementById("noticias");

noticias.forEach(noticia => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    <h2>${noticia.titulo}</h2>
    <p>${noticia.descricao}</p>
    <a href="${noticia.link}?id=${noticia.id}">Ver mais</a>
  `;
  container.appendChild(card);
});

  