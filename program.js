var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-150px";
}

const programData = {
  1: [
    { img: "/images/subuh.jpg", title: "Sholat Subuh", date: "Setiap waktu sholat subuh" },
    { img: "/images/ngaji.jpeg", title: "Ngaji", date: "Setiap Senin & Kamis" },
    { img: "/images/sedekah.jpeg", title: "Sedekah", date: "Setiap Jumat" },
  ],
  2: [
    { img: "/images/kegiatan4.jpg", title: "Kegiatan 4", date: "Tanggal Kegiatan 4" },
    { img: "/images/kegiatan5.jpg", title: "Kegiatan 5", date: "Tanggal Kegiatan 5" },
    { img: "/images/kegiatan6.jpg", title: "Kegiatan 6", date: "Tanggal Kegiatan 6" },
  ],
  3: [
    { img: "/images/kegiatan7.jpg", title: "Kegiatan 7", date: "Tanggal Kegiatan 7" },
    { img: "/images/kegiatan8.jpg", title: "Kegiatan 8", date: "Tanggal Kegiatan 8" },
    { img: "/images/kegiatan9.jpg", title: "Kegiatan 9", date: "Tanggal Kegiatan 9" },
  ],
};

const totalPages = 5;
let currentPage = 1;

for (let i = 4; i <= totalPages; i++) {
  programData[i] = [
    { img: `/images/sample${i}_1.jpg`, title: `Judul Kegiatan ${i}-1`, date: `Tanggal ${i}-1` },
    { img: `/images/sample${i}_2.jpg`, title: `Judul Kegiatan ${i}-2`, date: `Tanggal ${i}-2` },
    { img: `/images/sample${i}_3.jpg`, title: `Judul Kegiatan ${i}-3`, date: `Tanggal ${i}-3` },
  ];
}

const paginationContainer = document.querySelector('.pagination');
const currentPageElem = document.getElementById('current-page');
const totalPagesElem = document.getElementById('total-pages');

totalPagesElem.textContent = totalPages;

function renderPagination() {
  paginationContainer.innerHTML = '';
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, totalPages);
  if (endPage - startPage < 4) {
    startPage = Math.max(endPage - 4, 1);
  }

  const prev = document.createElement('a');
  prev.href = "#";
  prev.textContent = "«";
  if (currentPage === 1) prev.className = "disabled";
  prev.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updatePaginationAndContent();
    }
  });
  paginationContainer.appendChild(prev);

  for (let i = startPage; i <= endPage; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = "#";
    pageLink.textContent = i;
    if (i === currentPage) pageLink.classList.add('active');

    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      updatePaginationAndContent();
    });

    paginationContainer.appendChild(pageLink);
  }

  const next = document.createElement('a');
  next.href = "#";
  next.textContent = "»";
  if (currentPage === totalPages) next.className = "disabled";
  next.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      updatePaginationAndContent();
    }
  });
  paginationContainer.appendChild(next);
}

function updateProgramContent(page) {
  const newsGrid = document.querySelector('.news-grid');
  newsGrid.innerHTML = '';
  if (!programData[page]) return;
  programData[page].forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <div class="news-image">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <div class="news-content">
        <h3 class="news-title">${item.title}</h3>
        <p class="news-date">${item.date}</p>
      </div>
    `;
    newsGrid.appendChild(card);
  });
}

function updatePaginationAndContent() {
  renderPagination();
  updateProgramContent(currentPage);
  currentPageElem.textContent = currentPage;
}

// Jalankan awal
updatePaginationAndContent();

