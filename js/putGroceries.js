const API_URL = "https://grocery-api-o3m1.onrender.com/api/v1/products";

document.getElementById("modifyGroceryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const id = document.getElementById("product_id").value;

    const grocery = {
        product_name: document.getElementById("product_name").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("quantity").value
    };

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(grocery)
    })
    .then(response => response.json())
    .then(data => {
        alert("Grocery updated successfully!");
        document.getElementById("modifyGroceryForm").reset();
    })
    .catch(error => {
        console.error("Error updating grocery:", error);
    });
});