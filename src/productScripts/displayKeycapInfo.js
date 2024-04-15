const baseURL = 'https://mechamod-backend.vercel.app'; // Update with your deployed URL

export async function fetchKeycaps() {
    try {
        const response = await fetch(`${baseURL}/keycaps`);
        console.log(`Connecting to ${baseURL}`);
        const keycaps = await response.json();

        // Sort keycaps based on order_position
        keycaps.sort((a, b) => a.order_position - b.order_position);

        keycaps.forEach((keycap, index) => {
            const containerId = `product-container${index}`;
            const containerElement = document.getElementById(containerId);

            if (containerElement) {
                // Update content inside each product container
                containerElement.querySelector('.product-left-text-title').innerHTML = keycap.name;

                // Format the price
                const priceNumber = parseFloat(keycap.price); // Convert price to number
                const formattedPrice = new Intl.NumberFormat('en-IN').format(priceNumber); // Format price with commas
                containerElement.querySelector('.price').innerHTML = `${formattedPrice}INR`; // Include currency symbol

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
