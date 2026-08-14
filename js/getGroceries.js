const API_URL =
    "https://grocery-api-o3m1.onrender.com/api/v1/products";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const formattedData = data.map(grocery => [
            grocery.product_id,
            grocery.product_name,
            grocery.category,
            grocery.price,
            grocery.quantity
        ]);

        new gridjs.Grid({
            columns: [
                "ID",
                "Product Name",
                "Category",
                "Price",
                "Quantity"
            ],
            data: formattedData,
            search: true,
            sort: true,
            pagination: {
                enabled: true,
                limit: 5
            },
            resizable: true
        }).render(document.getElementById("grid-container"));
    })
    .catch(error =>
        console.error("Error fetching data", error)
    );