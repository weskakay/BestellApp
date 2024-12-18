function toggleRestaurant(restaurantKey) {

    let menuContainer = document.querySelector(`#${restaurantKey}-menu`);

    if (selectedRestaurant && selectedRestaurant !== restaurantKey && cart.length > 0) {
        const modal = document.getElementById('restaurant-switch-modal');
        modal.style.display = 'flex';
        document.getElementById('confirm-switch').onclick = () => {
            modal.style.display = 'none';
            let previousMenuContainer = document.querySelector(`#${selectedRestaurant}-menu`);
            if (previousMenuContainer) {
                previousMenuContainer.remove();
            }

            cart = [];
            selectedRestaurant = restaurantKey; 
            renderCart();
            calculateTotal();

            if (!menuContainer) {
                menuContainer = document.createElement('div');
                menuContainer.id = `${restaurantKey}-menu`;
                menuContainer.className = 'menu-container';
                document.getElementById(restaurantKey).after(menuContainer);
            }
            loadMenu(restaurantKey, menuContainer);
            menuContainer.scrollIntoView({ behavior: 'smooth' });
        };

        document.getElementById('cancel-switch').onclick = () => {
            modal.style.display = 'none';

            let currentMenuContainer = document.querySelector(`#${selectedRestaurant}-menu`);
            if (currentMenuContainer) {
                currentMenuContainer.scrollIntoView({ behavior: 'smooth' });
            }
        };
        return;
    }
    selectedRestaurant = restaurantKey;
    if (!menuContainer) {
        menuContainer = document.createElement('div');
        menuContainer.id = `${restaurantKey}-menu`;
        menuContainer.className = 'menu-container';
        document.getElementById(restaurantKey).after(menuContainer);
    }
    loadMenu(restaurantKey, menuContainer);
    menuContainer.scrollIntoView({ behavior: 'smooth' });
}