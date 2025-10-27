document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) chrome.search.query({ text: query });
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = input.value.trim();
      if (query) chrome.search.query({ text: query });
    }
  });

  // Show UI after load
  document.getElementById("brand-title").style.display = "block";
  document.getElementById("search-container").style.display = "flex";
});
