const API_URL = "https://grocery-api-o3m1.onrender.com/api/v1/products";

// Load distinct product names into the drop-down list
fetch(`${API_URL}/names`)
    .then(response => response.json())
    .then(data => {
        const productSelect = document.getElementById("product_select");

        data.forEach(product => {
            const option = document.createElement("option");

            option.value = product.product_name;
            option.textContent = product.product_name;

            productSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error("Error loading product names:", error);
    });


// Auto-fill form when a product is selected
document.getElementById("product_select").addEventListener("change", function() {

    const selectedProduct = this.value;

    if (selectedProduct === "") {
        return;
    }

    fetch(`${API_URL}/name/${encodeURIComponent(selectedProduct)}`)
        .then(response => response.json())
        .then(product => {

            document.getElementById("product_id").value = product.product_id;
            document.getElementById("product_name").value = product.product_name;
            document.getElementById("category").value = product.category;
            document.getElementById("price").value = product.price;
            document.getElementById("quantity").value = product.quantity;

        })
        .catch(error => {
            console.error("Error loading selected product:", error);
        });

});


// Update existing grocery
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