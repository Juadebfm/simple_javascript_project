const button = document.getElementById("btnSubmit");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const query = document.getElementById("query").value;

  const apiKey = "b96b785624c54e0eae6dcc63eef8aea8";

  const url = `https://newsapi.org/v2/everything?q=${query}`;

  const requestObj = {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  };

  fetch(url, requestObj)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      displayResults(data);
    })
    .catch((error) => console.log(error));
});

function displayResults(data) {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";

  resultDiv.classList.add("resultDiv");

  if (data.articles.length === 0) {
    resultDiv.innerHTML = "<p>No articles found.</p>";
    return;
  }

  data.articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article";

    // articleDiv.innerHTML = `
    // <div>
    // <h1>${article.title}</h1>
    // <p>${article.body}</p>
    // <a href={article.url} target="_blank">Read More</a>
    // </div>
    // `;

    const title = document.createElement("h2");
    title.textContent = article.title;

    title.classList.add("articleHeading");

    const para = document.createElement("p");
    para.textContent = article.description;

    const link = document.createElement("a");
    link.href = article.url;
    link.textContent = "Read More";
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = "Card Image";
    img.style.width = "100%";

    articleDiv.appendChild(title);
    articleDiv.appendChild(para);
    articleDiv.appendChild(link);
    articleDiv.appendChild(img);

    resultDiv.appendChild(articleDiv);
  });
}
