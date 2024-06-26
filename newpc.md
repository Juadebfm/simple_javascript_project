
1. JavaScript: Add an event listener to the form:

   - Get the form element by its id ("newsForm").
   - Add a "submit" event listener to the form.
   - In the event listener function:
     - Prevent the default form submission behavior using event.preventDefault().

2. JavaScript: Get the user's input:

   - Get the input field element by its id ("query").
   - Get the value of the input field.

3. JavaScript: Define the API key and construct the API URL:

   - Define a constant variable for the API key ("b96b785624c54e0eae6dcc63eef8aea8").
   - Construct the API URL using the base URL and the user's input as a query parameter. _const url = `https://newsapi.org/v2/everything?q=${query}`;_

4. JavaScript: Set up the fetch request options:

   - Create an object for the fetch request options.
   - Set the method to "GET".
   - Set the headers to include the Authorization header with the API key. _headers: {
        Authorization: apiKey,
      },_

5. JavaScript: Make the fetch request:

   - Use the fetch function to send the request to the API with the constructed URL and request options.
   - Handle the response:
     - If the response is not OK, throw an error with a message including the response status text.
     - Parse the JSON data from the response. `if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();`
   - Now after response we sort out the data
     - We console the data to log
     - and we call the `displayResults(data)` function.
   - Finally we catch error by consoling it.

6. JavaScript: Display the results:
   - Get the results div element by its id ("results").
   - Clear any previous results by setting its innerHTML to an empty string.
   - Check if the articles array in the response data is empty:
     - If empty, set the innerHTML of the results div to "<p>No articles found.</p>" and return. `if (data.articles.length === 0) {
    resultsDiv.innerHTML = "<p>No articles found.</p>";
    return;
  }`
   - Loop through each article in the articles array: `data.articles.forEach((article) => {})`
     - For each article:
       - Create a <div> element for the article container `articleDiv`.
       - Set the class name of the container to "article".
       - Create an <h2> element for the article title and set its text content.
       - Create a <p> element for the article description and set its text content.
       - Create an <a> element for the article link, set its href attribute to the article URL, set its text content to "Read more", and set the target attribute to "_blank".
       - Append the title, description, and link elements to the article container.
       - Append the article container to the results div.
