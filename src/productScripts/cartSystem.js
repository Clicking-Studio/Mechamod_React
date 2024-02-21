const baseURL = 'https://mechamod-backend.vercel.app'; // Update with your deployed URL
console.log('cartSystem script loaded');

export async function addToCart(keycapOrderPosition) {
    try {
        const response = await fetch(`${baseURL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order_position: keycapOrderPosition }),
        });

        const keycap = await response.json();

        alert(`Added ${keycap.name} to the cart!`);
        displayCart();
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function displayCart() {
    try {
        const response = await fetch(`${baseURL}/cart`);

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
        const headerNames = ['', '']; // Removed 'Quantity' from header names

        headerNames.forEach(name => {
            const th = document.createElement('th');
            th.textContent = name;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        // Add items to the table
        cartItems.forEach(item => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;

            const priceCell = document.createElement('td');
            priceCell.textContent = `₹ ${item.price}`;

            row.appendChild(nameCell);
            row.appendChild(priceCell);

            table.appendChild(row);
        });

        cartElement.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
    }
}


// Fetch cart items when the cart page loads
// document.addEventListener('DOMContentLoaded', displayCart);
