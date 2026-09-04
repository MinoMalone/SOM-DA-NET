/*
===========================================================
COLOQUE AQUI OS DADOS DAS NOVAS PUBLICAÇÕES
Cada objeto abaixo representa uma publicação.

- nome: nome que aparece na publicação
- titulo: título clicável
- imagem: URL direta da imagem
- link: endereço para onde o título deve levar
- data: data exibida na publicação

A IMAGEM É RENDERIZADA AUTOMATICAMENTE pelo navegador.
===========================================================
*/

const posts = [
  {
    nome: "MINO MALONE",
    titulo: "Passos",
    imagem: "https://www.google.com/search?client=ms-android-samsung-ss&hs=dQZq&sca_esv=16ca2773c34d1859&sxsrf=APpeQnv6WcXMdSlKNNlwsDue8Z1R2Yd9jg:1788519988071&udm=2&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszkLt6nAp8aiRKj5vMjqZApKYr2wv-EHakX1SS4JF8fY0zEzkt7qoIfzn_Tr7gIF0k2GAysmhlBpy0e0Q9fn3ugLSGNLqbWPtqd4V5ekVZgDDuwT93pZMz0mpeZ7qTwQPl5q4Jzs6P9A-87G0lzEvYuKTq09LwxES3BFL2zT9WT1HgGO0Qx-fRZxL2qmiu1Gmbi6E-BQ&q=passos+mino+malone&sa=X&ved=2ahUKEwj5zr-U5NSWAxXiQ0EAHQcICEAQtKgLegQIFhAB&biw=411&bih=810&dpr=1.75#sv=CAMSVxoyKhBlLUhkTDA0QWVwVU4yX1JNMg5IZEwwNEFlcFVOMl9STToOamZrQkRBQkpSeHZLcE0gBCoXCgFzEhBlLUhkTDA0QWVwVU4yX1JNGAEwAUoECAEQAhgHIM6On9YGSggQAhgBIAIoAQ",
    link: "https://example.com",
    data: "Hoje"
  },
  {
    nome: "Aventuras",
    titulo: "Como se preparar para uma aventura ao ar livre",
    imagem: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=900&q=80",
    link: "https://example.com",
    data: "Ontem"
  },
  {
    nome: "Dev News",
    titulo: "As principais tendências em tecnologia",
    imagem: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "https://example.com",
    data: "2 dias atrás"
  }
];

/*
EXEMPLO PARA NOVA PUBLICAÇÃO — COPIE E COLOQUE DENTRO DO ARRAY "posts":

{
  nome: "Nome do Autor",
  titulo: "Título da nova publicação",
  imagem: "https://site.com/imagem.jpg",
  link: "https://site.com/pagina",
  data: "Hoje"
},

Não é necessário alterar o restante do código.
*/

const feed = document.getElementById("feed");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const refreshBtn = document.getElementById("refreshBtn");

function renderPosts(list) {
  feed.innerHTML = "";

  list.forEach(post => {
    const article = document.createElement("article");
    article.className = "post";

    article.innerHTML = `
      <img class="post-image"
           src="${escapeAttribute(post.imagem)}"
           alt="${escapeAttribute(post.titulo)}"
           loading="lazy"
           onerror="this.style.display='none'">

      <div class="post-content">
        <div class="post-name">${escapeHTML(post.nome)}</div>
        <div class="post-date">${escapeHTML(post.data || "")}</div>

        <a class="post-title"
           href="${escapeAttribute(post.link)}"
           target="_blank"
           rel="noopener noreferrer">
          ${escapeHTML(post.titulo)}
        </a>
      </div>
    `;

    feed.appendChild(article);
  });

  noResults.hidden = list.length !== 0;
}

function searchPosts() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    renderPosts(posts);
    return;
  }

  const results = posts.filter(post =>
    `${post.nome} ${post.titulo}`.toLowerCase().includes(query)
  );

  renderPosts(results);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

searchInput.addEventListener("input", searchPosts);

/*
O botão ATUALIZAR serve somente para atualizar/recarregar a página.
Ele não adiciona publicações.
*/
refreshBtn.addEventListener("click", () => {
  window.location.reload();
});

renderPosts(posts);
