const API_URL = "https://grocery-api-o3m1.onrender.com/api/v1/products";

document.getElementById("addGroceryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const grocery = {
        product_name: document.getElementById("product_name").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("quantity").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(grocery)
    })
    .then(response => response.json())
    .then(data => {
        alert("Record has been saved.");
        document.getElementById("addGroceryForm").reset();
    })
    .catch(error => {
        console.error("Error adding grocery:", error);
    });
});