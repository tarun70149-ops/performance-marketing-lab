const grid = document.getElementById("theme-grid");

window.PML_THEMES.forEach((theme, index) => {
  const card = document.createElement("article");
  card.className = "theme-card";
  card.innerHTML = `
    <div>
      <span class="theme-number">0${index + 1}</span>
      <h2>${theme.name}</h2>
      <p>${theme.description}</p>
      <div class="theme-meta">
        ${theme.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    <div><a class="theme-btn" href="${theme.path}">Open Theme →</a></div>
  `;
  grid.appendChild(card);
});
