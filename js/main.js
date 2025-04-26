const showArticlesBtn = document.getElementById("show-articles");
const showBooksBtn = document.getElementById("show-books");
const showVideosBtn = document.getElementById("show-videos");

const articlesSection = document.getElementById("articles-section");
const booksSection = document.getElementById("books-section");
const videosSection = document.getElementById("videos-section");

function hideAll() {
  articlesSection.classList.add("d-none");
  booksSection.classList.add("d-none");
  videosSection.classList.add("d-none");

  showArticlesBtn.classList.remove("btn-primary");
  showBooksBtn.classList.remove("btn-primary");
  showVideosBtn.classList.remove("btn-primary");

  showArticlesBtn.classList.add("btn-outline-primary");
  showBooksBtn.classList.add("btn-outline-primary");
  showVideosBtn.classList.add("btn-outline-primary");
}

showArticlesBtn.addEventListener("click", () => {
  hideAll();
  articlesSection.classList.remove("d-none");
  showArticlesBtn.classList.remove("btn-outline-primary");
  showArticlesBtn.classList.add("btn-primary");
});

showBooksBtn.addEventListener("click", () => {
  hideAll();
  booksSection.classList.remove("d-none");
  showBooksBtn.classList.remove("btn-outline-primary");
  showBooksBtn.classList.add("btn-primary");
});

showVideosBtn.addEventListener("click", () => {
  hideAll();
  videosSection.classList.remove("d-none");
  showVideosBtn.classList.remove("btn-outline-primary");
  showVideosBtn.classList.add("btn-primary");
});