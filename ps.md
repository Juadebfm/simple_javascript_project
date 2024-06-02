Step 1: Fetch Data from API and Store it in Local Storage
1.1. Function fetchAndStoreData():
1.1.1. Fetch data from the API using the fetch() function. `async function fetchAndStoreData()`
1.1.2. Get the response in await `const response = await fetch("https://fakestoreapi.com/products");`.
1.1.3. Convert the response to json using `json()` and store it in a variable _data_
1.1.4. Store the data variable in the localStorage using the setItem, 2 params "products" & `JSON.stringify(data)`

Step 2: Create Product Cards and Display Them
2.1. Function createProductCards():
2.1.2. Get the container element where the product cards will be displayed using document.getElementById().
2.1.3. Loop through the product data using forEach:
2.1.4.1. Create a new <div> element for each product card using document.createElement().
2.1.4.2. Set the class name for the product card <div> element to apply styling using element.className.
2.1.4.3. Populate the product card <div> with HTML content, including product details like image, title, description, price, and add to cart button. _productCard.innerHTML = ``_
2.1.4.4. Append each product card <div> to the container element using element.appendChild().

Step 3: Initialize the Application
3.1. Function init(): `async function init()`
3.2. `if (!localStorage.getItem("products")) {
    await fetchAndStoreData();
  }
  createProductCards();` check if the products json exist in the localstorage, if it doesn't create the product cards by calling the function.

Step 4: Event Listener for Page Load
4.1. Add an event listener for the 'DOMContentLoaded' event:
4.1.1. Call the init() function when the DOM content is fully loaded.


