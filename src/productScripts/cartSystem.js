const baseURL = 'https://mechamod-backend.vercel.app'; // Update with your deployed URL
console.log('cartSystem script loaded');

export async function addToCart(keycapId) {
    try {
        let sessionID = localStorage.getItem('sessionID'); // Retrieve session ID from localStorage
        if (!sessionID) {
            // If session ID does not exist in localStorage, generate a new one
            sessionID = generateSessionID();
            localStorage.setItem('sessionID', sessionID); // Store session ID in localStorage
        }
        console.log(`SESSION: ${sessionID}`)
        const response = await fetch(`${baseURL}/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keycap_id: keycapId, session_id: sessionID }), // Include session ID in the request body
        });

        if (response.ok) {
            // If response is successful, parse the JSON response
            const addedItem = await response.json();
            alert(`Added ${addedItem.keycap.name} to the cart!`);
            displayCart();
        } else if (response.status === 400) {
            // If item already exists in cart, parse the JSON response and display the message
            const errorData = await response.json();
            alert(errorData.message);
        } else {
            // Handle other errors here
            throw new Error('Failed to add item to cart');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to generate a session ID
function generateSessionID() {
    // Generate a random session ID using a UUID generator library or a custom implementation
    // For example, using uuid package:
    // return uuid.v4();
    // Here's a simple implementation using Math.random():
    return Math.random().toString(36).substr(2, 9);
}

export async function displayCart() {
    try {
        const sessionID = localStorage.getItem('sessionID'); // Retrieve session ID from localStorage

        if (!sessionID) {
            console.error('Session ID not found');
            return;
        }

        const response = await fetch(`${baseURL}/getCart?session_id=${sessionID}`); // Include session ID as a query parameter

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cartItems = await response.json();

        const cartElement = document.getElementById('cart');
        cartElement.innerHTML = '';

        // Create a table
        const table = document.createElement('table');

        // Create table header
        const headerRow = document.createElement('tr');
        const headerNames = ['Image', 'Name', 'Price']; // Updated header names

        headerNames.forEach(name => {
            const th = document.createElement('th');
            th.textContent = name;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        // Add items to the table
        for (const item of cartItems) {
            const row = document.createElement('tr');

            // Fetch keycap details for each item
            const keycapResponse = await fetch(`${baseURL}/keycaps/${item.keycap_id}`);
            const keycapData = await keycapResponse.json();

            // Create cells for image, name, and price
            const imageCell = document.createElement('td');
            const imageElement = document.createElement('img');
            imageElement.src = keycapData.image_path;
            imageElement.alt = keycapData.name;
            imageElement.width = 100;
            imageCell.appendChild(imageElement);

            const nameCell = document.createElement('td');
            nameCell.textContent = keycapData.name;

            const priceCell = document.createElement('td');
            priceCell.textContent = `₹ ${keycapData.price}`;

            // Append cells to the row
            row.appendChild(imageCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);

            // Append the row to the table
            table.appendChild(row);
        }

        // Append the table to the cart element
        cartElement.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
    }
}


 //Fetch cart items when the cart page loads
//document.addEventListener('DOMContentLoaded', displayCart);
