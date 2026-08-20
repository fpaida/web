# CMPS262 Grocery Web Frontend

## Description

This project is the frontend web application for the Grocery API I developed for CMPS262 at Point Park University.

The application connects to a RESTful API and allows users to view, add, search, and modify grocery products. The goal of this project was to practice connecting a frontend website to a backend API and a PostgreSQL database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [How to Use the Application](#how-to-use-the-application)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Course](#course)
- [Project Links](#project-links)

## Features

- View grocery products
- Search and sort products
- Paginate product results
- Add new grocery products
- Modify existing grocery products
- Select an existing product from a drop-down menu
- Automatically fill the update form with the selected product information
- Connect to a REST API hosted on Render
- Display API data using Grid.js

## Technologies

### Frontend

- HTML
- CSS
- JavaScript
- Grid.js
- Fetch API

### Backend Connection

The frontend connects to a backend built with:

- Node.js
- Express
- PostgreSQL
- REST API
- Render

### Development Tools

- Visual Studio Code
- Git
- GitHub
- GitHub Pages

## Installation and Setup

To run this project locally, you need Git, a web browser, and an internet connection because the frontend connects to the deployed Grocery API.

Clone the repository:

```bash
git clone https://github.com/fpaida/web.git
cd web
```

There are no npm packages to install for the frontend because the application uses HTML, CSS, and JavaScript.

Open `index.html` in a browser to start the application.

The application can also be run using a local development server such as the Live Server extension in Visual Studio Code.

## How to Use the Application

The application has three main pages.

### View Data

The View Data page displays the grocery products stored in the database.

The frontend sends a GET request to the Grocery API and displays the results using Grid.js.

The user can search the products, sort the columns, and move through the results using pagination.

### Add Data

The Add Data page is used to add a new grocery product.

The user enters:

- Product name
- Category
- Price
- Quantity

When the form is submitted, the frontend sends a POST request to the Grocery API.

After the product is successfully added, the application displays:

`Record has been saved.`

### Update Data

The Update Data page is used to modify an existing grocery product.

The user first selects a product from the drop-down menu. The application retrieves the current product information from the API and automatically fills the form.

The user can then change the product name, category, price, or quantity.

When the form is submitted, the frontend sends a PUT request to the API.

After the update is successful, the application displays:

`Grocery updated successfully!`

The updated product can then be verified on the View Data page.

## API Integration

The frontend communicates with my Grocery API hosted on Render.

### Base URL

```text
https://grocery-api-o3m1.onrender.com/api/v1/products
```

The frontend currently uses the following endpoints:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/v1/products` | Retrieve all grocery products |
| GET | `/api/v1/products/names` | Retrieve product names for the update drop-down |
| GET | `/api/v1/products/name/:productName` | Retrieve a selected product |
| POST | `/api/v1/products` | Add a new grocery product |
| PUT | `/api/v1/products/:id` | Update an existing grocery product |

For example, the View Data page retrieves products using JavaScript:

```javascript
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        // Display the grocery products
    });
```

When a new product is added, the frontend sends a POST request with product information such as:

```json
{
  "product_name": "Bananas",
  "category": "Produce",
  "price": 2.99,
  "quantity": 20
}
```

## Project Structure

```text
web/
├── index.html
├── add.html
├── modify.html
├── README.md
├── js/
│   ├── getGroceries.js
│   ├── postGroceries.js
│   └── putGroceries.js
└── stylesheets/
    └── hometheme.css
```

## Screenshots

The following screenshots show the main features of the Grocery Web Application.

### View Data

The View Data page displays the grocery products returned by the API. It also provides search, sorting, and pagination.

<!-- Add screenshot here -->
<!-- <img src="images/view-data.png" width="700" alt="View grocery products"> -->

### Add Data

The Add Data page allows the user to enter and save a new grocery product.

<!-- Add screenshot here -->
<!-- <img src="images/add-data.png" width="700" alt="Add grocery product"> -->

### Update Data

The Update Data page allows the user to select an existing product. The current information is automatically loaded into the form so that it can be modified.

<!-- Add screenshot here -->
<!-- <img src="images/update-data.png" width="700" alt="Update grocery product"> -->

## Contributing

This project was created for my CMPS262 coursework, but contributions can be made using the normal GitHub workflow.

1. Fork the repository.
2. Clone the repository.
3. Create a new branch.
4. Make and test the changes.
5. Commit the changes.
6. Push the branch to GitHub.
7. Create a pull request.

When making changes, keep the HTML, CSS, and JavaScript organized and use clear Git commit messages.

## License

This project was created for educational purposes as part of my CMPS262 coursework at Point Park University.

This project is licensed under the MIT License.

## Author

Fabrice Paida  
Applied Computer Science - Networking & Security  
Point Park University

## Course

**Course:** CMPS262  
**Instructor:** Professor Jeff Seaman  
**Institution:** Point Park University  
**Semester:** Summer 2026

## Project Links

**Frontend Repository:**  
https://github.com/fpaida/web

**Live Website:**  
https://fpaida.github.io/web/

**Backend Repository:**  
https://github.com/fpaida/grocery-api

**Cloud API:**  
https://grocery-api-o3m1.onrender.com/api/v1/products