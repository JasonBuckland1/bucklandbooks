
const bookPages = ["img/booksimg/toyboat/toyboat1.png", "img/booksimg/toyboat/toyboat2.png", "img/booksimg/toyboat/toyboat3.png", "img/booksimg/toyboat/toyboat4.png", "img/booksimg/toyboat/toyboat5.png", "img/booksimg/toyboat/toyboat6.png", "img/booksimg/toyboat/toyboat7.png", "img/booksimg/toyboat/toyboat8.png"];
let currentPage = 0;

function openBook() {
  document.getElementById("bookPopup").style.display = "block";
  document.getElementById("bookImage").src = bookPages[currentPage];
}

function closeBook() {
  document.getElementById("bookPopup").style.display = "none";
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    document.getElementById("bookImage").src = bookPages[currentPage];
  }
}

function nextPage() {
  if (currentPage < bookPages.length - 1) {
    currentPage++;
    document.getElementById("bookImage").src = bookPages[currentPage];
  }
}