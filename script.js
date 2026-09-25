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
    nome: "VIVIU LOOP",
    titulo: "VOLTAR",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/fvv5t16gxxmk1s3/V%25C3%258CVIU_LOOP_-__VOLTAR.mp3/file",  
  },
  {
    nome: "EDDY X MINO MALONE X VIVIU LOOP ",
    titulo: "BRANCO",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/snvxjplh7lmlpoy/EDDY_X_MINO_MALONE_X_VIVIU_LOOP__-BRANCO.mp3/file",  
  },
  {
    nome: "MINO MALONE",
    titulo: "PASSOS",
    imagem: "Mino MALONE _-Passos.png",
    link: "https://www.mediafire.com/file/zonktwm3zsvbxuh/Mino_Malone_-_Passos_%25282022%2529.mp3/file",  
  },
  
    {
    nome: "VIVIU LOOP X DEBLO X ESDEF X LIL DRAX",
    titulo: "MENTE BLINDADA",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/99e5rz3p2u1c8be/VIVIU_LOOP_X_DEBLO_X_ESDEF_X_LIL_DRAX__-_MENTE_BLINDADA_%2528_Prod_MM_%2529_audio_of.mp3/file",  
  },

  {
    nome: "LA BLINGUA X VIVIU LOOP X MINO MALONE",
    titulo: "LOUVRE",
    imagem: "LA BLINGUA feat LATINO BARHOS e MINO MALONE_- LOUVRE.png",
    link: "https://www.mediafire.com/file/18s2zdm3a2rgc9i/LA_BLINGUA_X_MINO_MALONE_X_VIVIU_LOOP_-LOUVRE.mp3/file",
    
  },
  {
    nome: "MINO MALONE",
    titulo: "ESTRADA",
    imagem: "Mino MALONE_-estrada.webp",
    link: "https://www.mediafire.com/file/m71583mcn867ivy/Mino_Malone-Estrada_.mp3/file",
  },
  {
    nome: "MINO MALONE",
    titulo: "NINGUÉM",
    imagem: "MINO MALONE _- NINGUEM.png",
    link: "https://www.mediafire.com/file/4fs1vfpgzrr6fv2/MINO_MALONE_-Ninguem.mp3/file",
  },
  
    {
    nome: "VIVIU LOOP",
    titulo: "COLO PAI",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/6ci1rqapnoaeven/VIVIU_LOOP__-_Colo_Pai_%2528Prod_B%25C3%25BAssola_%2529_audio_Oficial_084538.mp3/file",  
  },
    {
    nome: "MINO MALONE",
    titulo: "INVISÍVEL",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/09xn531v5gzc7zs/Mino_Malone_-_Invis%25C3%25ADvel.mp3/file",  
  },
    {
    nome: "GUIDERASS DA BOSS",
    titulo: "ESSA MOÇA",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/5hb2v7ftui1u426/Guidrass_da_Boss_-Essa_mo%25C3%25A7a.mp3/file",  
  },
  
    {
    nome: "VIVIU LOOP",
    titulo: "FF",
    imagem: "SOMDANET CAPA GERAL.png",
    link: "https://www.mediafire.com/file/zxo274i7zpdycax/VIVIU_LOOP-_FF%2528audio_official%2529.mp3/file",  
  },
{
    nome: "Novos lançamentos",
    titulo: "aqui",
    imagem: "SOMDANET CAPA GERAL.png",
  },
  
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
