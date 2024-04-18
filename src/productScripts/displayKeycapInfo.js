const baseURL = 'https://mechamod-backend.vercel.app'; // Update with your deployed URL

export async function fetchKeycaps() {
    try {
        const response = await fetch(`${baseURL}/keycaps`);
        console.log(`Connecting to ${baseURL}`);
        const keycaps = await response.json();

        keycaps.forEach((keycap, index) => {
            const containerId = `product-container${index}`;
            const containerElement = document.getElementById(containerId);

            if (containerElement) {
                // Update content inside each product container
                containerElement.querySelector('.product-left-text-title').innerHTML = keycap.name;

                // Format the price
                const priceNumber = parseFloat(keycap.price);
                const formattedPrice = new Intl.NumberFormat('en-IN').format(priceNumber);
                containerElement.querySelector('.price').innerHTML = `${formattedPrice} INR`;

                containerElement.querySelector('.product-left-text-header').innerHTML = keycap.description;

                // Update bullet points
                const bulletList = containerElement.querySelector('.product-left-text-bottom');
                bulletList.innerHTML = ''; // Clear existing list items

                // Add each bullet point from the keycap object
                if (keycap.bullet1) {
                    const bullet1 = document.createElement('li');
                    bullet1.textContent = keycap.bullet1;
                    bulletList.appendChild(bullet1);
                }

                if (keycap.bullet2) {
                    const bullet2 = document.createElement('li');
                    bullet2.textContent = keycap.bullet2;
                    bulletList.appendChild(bullet2);
                }

                if (keycap.bullet3) {
                    const bullet3 = document.createElement('li');
                    bullet3.textContent = keycap.bullet3;
                    bulletList.appendChild(bullet3);
                }

                if (keycap.bullet4) {
                    const bullet4 = document.createElement('li');
                    bullet4.textContent = keycap.bullet4;
                    bulletList.appendChild(bullet4);
                }
            }
        });
    } catch (error) {
        console.error('Error fetching keycaps:', error);
    }
}

// Fetch keycaps when the page loads
// document.addEventListener('DOMContentLoaded', fetchKeycaps);
