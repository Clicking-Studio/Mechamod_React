// Function to toggle cart visibility


export const toggleCart = () => {
    const cartContent = document.querySelector('.cart-content');
    if (cartContent) {
        const currentDisplay = window.getComputedStyle(cartContent).getPropertyValue('display');
        cartContent.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
}

