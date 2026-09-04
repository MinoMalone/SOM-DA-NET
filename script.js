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
    imagem: "https://www.google.com/search?q=imagens&client=ms-android-samsung-ss&hs=sQZq&sa=X&sca_esv=3715172283c963bb&aep=1&cs=1&biw=411&bih=810&sxsrf=APpeQnvpyULl9flwKGXfQVf4xFrCDPmfLA:1788520913846&udm=2&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszkLt6nAp8aiRKj5vMjqZApKYr2wv-EHakX1SS4JF8fY1OAHmsXq59YBfu7dh6O2RMEii36L8IEmfA7xPaUGdsGv0lsTowMuf1AaqmeAQZIOoRq1C3-Ms6kW72PEI7nOkGyVJc8tqrcx2k7SXlKQ_YivAxVweB7F_tQtwnXLHAGKcDrXBAYwrarOgo2ckvNVhCM28waA&ved=2ahUKEwiiyPjN59SWAxULW0EAHcUhMIsQtKgLegQIBxAJ#sv=CAMSVxoyKhBlLWtibmQxN3hZYjhTZThNMg5rYm5kMTd4WWI4U2U4TToOWXAtdFVHemNKNkNGc00gBCoXCgFzEhBlLWtibmQxN3hZYjhTZThNGAEwAUoECAEQAhgHIOqwtp8MSggQAhgBIAIoAQ",
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
