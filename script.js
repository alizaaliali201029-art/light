

const themeBtn = document.getElementById("themeBtn");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("siteSearch");
const tocToggle = document.getElementById("tocToggle");
const tocList = document.getElementById("tocList");



themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");
  themeBtn.textContent = darkMode ? "Light mode" : "Dark mode";
});




searchForm.addEventListener("submit", event => {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();

  
  document.querySelectorAll(".search-match").forEach(element => {
    element.classList.remove("search-match");
  });

  if (!query) return;

  const sections = [
    ...document.querySelectorAll("main h1, main h2, main h3")
  ];

  const match = sections.find(section =>
    section.textContent.toLowerCase().includes(query)
  );

  if (match) {
    match.scrollIntoView({ behavior: "smooth", block: "center" });
    match.classList.add("search-match");
  } else {
    const paragraphs = [
      ...document.querySelectorAll("main p, main li")
    ];

    const paragraphMatch = paragraphs.find(paragraph =>
      paragraph.textContent.toLowerCase().includes(query)
    );

    if (paragraphMatch) {
      paragraphMatch.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      paragraphMatch.classList.add("search-match");
    } else {
      alert("No matching text found on this page.");
    }
  }
});

sidebar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});
