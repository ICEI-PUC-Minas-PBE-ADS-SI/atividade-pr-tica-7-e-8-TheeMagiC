const noticias = [
    {
      id: 1,
      titulo: "Cidade Inteligente em Expansão",
      imagem: "noticia.jpg",
      descricao: "Tecnologia transforma o modo de viver nas metrópoles.",
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      data: "07/03/2025",
      autor: "Caua Moreira",
      categoria: "Tecnologia",
      visualizacoes: 1200
    },
    {
      id: 2,
      titulo: "Nova Geração de Jornalistas",
      imagem: "noticia.jpg",
      descricao: "Jovens talentos renovam o jornalismo investigativo.",
      conteudo: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      data: "06/03/2025",
      autor: "Maria Silva",
      categoria: "Cultura",
      visualizacoes: 980
    },
    {
      id: 3,
      titulo: "Notícia de Última Hora",
      imagem: "noticia.jpg",
      descricao: "Veja os destaques que estão mudando o mundo hoje.",
      conteudo: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      data: "05/03/2025",
      autor: "João Santos",
      categoria: "Política",
      visualizacoes: 1500
    }
  ];
  
  // ⬇️ SE ESTIVER NA PÁGINA INICIAL, GERA OS CARDS
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    const container = document.getElementById("noticias");
    console.log('Container encontrado:', container);
  
    noticias.forEach(noticia => {
      const card = document.createElement("div");
      card.classList.add("col-md-6");
      card.innerHTML = `
        <article class="news-card">
          <div class="news-image">
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <span class="category-tag">${noticia.categoria}</span>
          </div>
          <div class="news-content">
            <h3>${noticia.titulo}</h3>
            <div class="news-meta">
              <span><i class="bi bi-calendar3"></i> ${noticia.data}</span>
              <span><i class="bi bi-person"></i> ${noticia.autor}</span>
            </div>
            <p>${noticia.descricao}</p>
            <a href="./detalhes.html?id=${noticia.id}" class="read-more">Ler mais <i class="bi bi-arrow-right"></i></a>
          </div>
        </article>
      `;
      container.appendChild(card);
    });
  }
  
  // ⬇️ SE ESTIVER NA PÁGINA DE DETALHES, EXIBE UMA NOTÍCIA
  function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }
  
  function renderizarDetalhes() {
    const id = getIdFromUrl();
    console.log('ID da notícia:', id);
    
    if (!id) {
      console.log('ID não encontrado na URL');
      document.body.innerHTML = "<div class='container'><p>ID da notícia não fornecido.</p><a href='index.html'>Voltar para a página inicial</a></div>";
      return;
    }
  
    const noticia = noticias.find(item => item.id == id);
    console.log('Notícia encontrada:', noticia);
    
    if (!noticia) {
      console.log('Notícia não encontrada para o ID:', id);
      document.body.innerHTML = "<div class='container'><p>Notícia não encontrada.</p><a href='index.html'>Voltar para a página inicial</a></div>";
      return;
    }
  
    document.getElementById("titulo").textContent = noticia.titulo;
    document.getElementById("imagem").src = noticia.imagem;
    document.getElementById("imagem").alt = noticia.titulo;
    document.getElementById("conteudo").textContent = noticia.conteudo;
    document.getElementById("data").textContent = noticia.data;
    document.getElementById("autor").textContent = noticia.autor;
    document.getElementById("categoria").textContent = noticia.categoria;
    document.getElementById("visualizacoes").textContent = noticia.visualizacoes;
  }
  
  if (window.location.pathname.includes("detalhes.html")) {
    renderizarDetalhes();
  }
  