const baseURL = 'https://mechamod-backend.vercel.app/'; // Update with your deployed URL

export async function fetchKeycaps() {
    try {
        const response = await fetch(`${baseURL}/keycaps`);
        console.log(`connecting to ${baseURL}`)
        const keycaps = await response.json();

        // Sort keycaps based on order_position
        keycaps.sort((a, b) => a.order_position - b.order_position);

        keycaps.forEach((keycap, index) => {
            const containerId = `product-container${index}`;
            const containerElement = document.getElementById(containerId);

            if (containerElement) {
                // Update content inside each product container
                containerElement.querySelector('.product-left-text-title').innerHTML = keycap.name;
                containerElement.querySelector('.price').innerHTML = `₹ ${keycap.price}`;
                containerElement.querySelector('.product-left-text-header').innerHTML = keycap.description;
                // Update other elements as needed
            }
        });
    } catch (error) {
        console.error('Error fetching keycaps:', error);
    }
}

// Fetch keycaps when the page loads
// document.addEventListener('DOMContentLoaded', fetchKeycaps);
