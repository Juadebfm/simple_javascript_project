Step 1: Fetch Data from API and Store it in Local Storage
1.1. Function fetchDataAndStore():
1.1.1. Fetch data from the API using fetch().
1.1.2. Convert the response to JSON format using .json().
1.1.3. Store the data in local storage using localStorage.setItem(). `localStorage.setItem("data", JSON.stringify(data))`

Step 2: Call the createCard function for each data node
` data.forEach((post) => {
        createCard(post);
      });`

Step 3:
Create a function called createCard() that takes a single argument called post.
3.1. Create a div element with the class "card" and append it to the DOM.
3.2. Create a h2 element with the text content of the post.title and append it to the div element.
3.3. Create a p element with the text content of the post.body and append it to the div element.
3.4 Create a userId element with the textcontent `User ID: ${post.userId}`
3.5. Append the userId element to the div element.
3.6. Append card to the document body `document.body.appendChild(card);`


Call the fetchDataAndStore() function
