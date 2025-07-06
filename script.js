document.addEventListener('DOMContentLoaded', () => {
    // --- Product Data (Simulated API Response) ---
    const allProducts = [
        {
            id: 1,
            name: "EliteBook Pro X",
            category: "Laptops",
            brand: "EliteTech",
            price: 1299.99,
            rating: 4.8,
            imageUrl: "aimage1.jpeg",
            description: "Powerful laptop for professionals, featuring a stunning Retina display and long battery life.",
            inStock: true,
            onSale: false
        },
        {
            id: 2,
            name: "Quantum Sound Headphones",
            category: "Audio",
            brand: "AudioPro",
            price: 199.99,
            rating: 4.5,
            imageUrl: "aimage2.jpeg",
            description: "Immersive audio experience with noise cancellation and ergonomic design.",
            inStock: true,
            onSale: true
        },
        {
            id: 3,
            name: "Ultra HD Monitor 27\"",
            category: "Monitors",
            brand: "DisplayGenius",
            price: 499.00,
            rating: 4.7,
            imageUrl: "aimage3.jpeg",
            description: "Crisp 4K resolution on a 27-inch display, perfect for gaming and graphic design.",
            inStock: true,
            onSale: false
        },
        {
            id: 4,
            name: "SmartWatch X-Series",
            category: "Wearables",
            brand: "EliteTech",
            price: 249.50,
            rating: 4.2,
            imageUrl: "aimage4.jpeg",
            description: "Stay connected with notifications, fitness tracking, and heart rate monitoring.",
            inStock: true,
            onSale: false
        },
        {
            id: 5,
            name: "ErgoComfort Keyboard",
            category: "Accessories",
            brand: "KeyMaster",
            price: 75.00,
            rating: 4.0,
            imageUrl: "aimage5.jpeg",
            description: "Ergonomic design for comfortable typing, ideal for long work sessions.",
            inStock: false, // Out of stock example
            onSale: false
        },
        {
            id: 6,
            name: "Gaming Mouse Pro",
            category: "Accessories",
            brand: "GamerGear",
            price: 59.99,
            rating: 4.6,
            imageUrl: "aimage6.jpeg",
            description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
            inStock: true,
            onSale: true
        },
        {
            id: 7,
            name: "Portable SSD 1TB",
            category: "Storage",
            brand: "DataDrive",
            price: 120.00,
            rating: 4.9,
            imageUrl: "aimage7.jpeg",
            description: "Blazing fast external SSD for quick data transfer and backup.",
            inStock: true,
            onSale: false
        },
        {
            id: 8,
            name: "HD Webcam Zoom",
            category: "Peripherals",
            brand: "CamView",
            price: 65.00,
            rating: 4.1,
            imageUrl: "aimage8.jpeg",
            description: "Crystal clear video calls with autofocus and wide-angle lens.",
            inStock: true,
            onSale: false
        },
        {
            id: 9,
            name: "Home Mesh Wi-Fi System",
            category: "Networking",
            brand: "NetConnect",
            price: 299.00,
            rating: 4.7,
            imageUrl: "aimage9.jpeg",
            description: "Eliminate dead zones and enjoy seamless Wi-Fi coverage throughout your home.",
            inStock: true,
            onSale: false
        },
        {
            id: 10,
            name: "Noise Cancelling Earbuds",
            category: "Audio",
            brand: "AudioPro",
            price: 149.99,
            rating: 4.4,
            imageUrl: "aimage10.jpeg",
            description: "Compact and powerful earbuds with active noise cancellation for on-the-go listening.",
            inStock: true,
            onSale: true
        },
        {
            id: 11,
            name: "Smart Home Hub",
            category: "Smart Home",
            brand: "EliteTech",
            price: 99.00,
            rating: 3.9,
            imageUrl: "aimage11.jpeg",
            description: "Centralized control for all your smart home devices.",
            inStock: true,
            onSale: false
        },
        {
            id: 12,
            name: "Portable Power Bank 20000mAh",
            category: "Accessories",
            brand: "PowerUp",
            price: 45.00,
            rating: 4.3,
            imageUrl: "aimage12.jpeg",
            description: "Keep your devices charged on the go with this high-capacity power bank.",
            inStock: true,
            onSale: false
        },
        {
            id: 13,
            name: "Graphic Design Tablet",
            category: "Tablets",
            brand: "ArtCanvas",
            price: 350.00,
            rating: 4.8,
            imageUrl: "aimage13.jpeg",
            description: "Unleash your creativity with precise stylus input and a vibrant display.",
            inStock: true,
            onSale: false
        },
        {
            id: 14,
            name: "4K Action Camera",
            category: "Cameras",
            brand: "AdventureCam",
            price: 180.00,
            rating: 4.5,
            imageUrl: "aimage14.jpeg",
            description: "Capture your adventures in stunning 4K detail, waterproof and durable.",
            inStock: true,
            onSale: true
        },
        {
            id: 15,
            name: "Gaming Laptop Beast",
            category: "Laptops",
            brand: "GamerGear",
            price: 1899.99,
            rating: 4.9,
            imageUrl: "aimage15.jpeg",
            description: "Unleash the ultimate gaming experience with top-tier performance.",
            inStock: true,
            onSale: false
        },
        {
            id: 16,
            name: "Wireless Charger Pad",
            category: "Accessories",
            brand: "ChargeFast",
            price: 35.00,
            rating: 4.0,
            imageUrl: "aimage16.jpeg",
            description: "Effortless charging for your compatible devices.",
            inStock: true,
            onSale: false
        },
        {
            id: 17,
            name: "Smart LED Light Bulb (RGB)",
            category: "Smart Home",
            brand: "BrightLights",
            price: 15.00,
            rating: 4.2,
            imageUrl: "aimage17.jpeg",
            description: "Customize your ambiance with millions of colors and smart controls.",
            inStock: true,
            onSale: true
        },
        {
            id: 18,
            name: "Professional Studio Microphone",
            category: "Audio",
            brand: "SoundWave",
            price: 110.00,
            rating: 4.7,
            imageUrl: "aimage18.jpeg",
            description: "Capture crisp, clear audio for podcasts, streaming, and music.",
            inStock: true,
            onSale: false
        },
        {
            id: 19,
            name: "Robot Vacuum Cleaner",
            category: "Smart Home",
            brand: "CleanBot",
            price: 320.00,
            rating: 4.3,
            imageUrl: "aimage19.jpeg",
            description: "Effortless cleaning with smart mapping and app control.",
            inStock: true,
            onSale: false
        },
        {
            id: 20,
            name: "Portable Bluetooth Speaker",
            category: "Audio",
            brand: "AudioPro",
            price: 85.00,
            rating: 4.6,
            imageUrl: "aimage20.jpeg",
            description: "Big sound in a compact design, perfect for outdoor adventures.",
            inStock: true,
            onSale: false
        }
    ];

    let currentProducts = [...allProducts]; // Products currently displayed after filters
    let currentPage = 1;
    const productsPerPage = 9; // Number of products to display per page

    // --- DOM Elements ---
    const productGrid = document.getElementById('productGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const brandFilter = document.getElementById('brandFilter');
    const priceRangeInput = document.getElementById('priceRange');
    const minPriceDisplay = document.getElementById('minPriceDisplay');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    const applyPriceFilterBtn = document.getElementById('applyPriceFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const sortSelect = document.getElementById('sortSelect');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const inStockFilter = document.getElementById('inStockFilter');
    const onSaleFilter = document.getElementById('onSaleFilter');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const noProductsFound = document.getElementById('noProductsFound');
    const paginationContainer = document.getElementById('pagination');

    // --- Filter State Object ---
    let filters = {
        searchTerm: '',
        categories: new Set(),
        minPrice: 0,
        maxPrice: getMaxPrice(allProducts),
        ratings: new Set(),
        brands: new Set(),
        inStock: false,
        onSale: false
    };

    // --- Initializations ---
    function initializeFilters() {
        populateCategories();
        populateBrands();
        setInitialPriceRange();
        renderProducts(allProducts); // Render all products initially
    }

    function getMaxPrice(products) {
        return products.reduce((max, p) => Math.max(max, p.price), 0);
    }

    function setInitialPriceRange() {
        const maxProductPrice = getMaxPrice(allProducts);
        priceRangeInput.max = maxProductPrice;
        priceRangeInput.value = maxProductPrice;
        filters.maxPrice = maxProductPrice;
        minPriceDisplay.textContent = '0';
        maxPriceDisplay.textContent = maxProductPrice.toFixed(2);
    }

    // --- Dynamic Filter Population ---
    function populateCategories() {
        const categories = [...new Set(allProducts.map(p => p.category))];
        categoryFilter.innerHTML = categories.map(category => `
            <label>
                <input type="checkbox" value="${category}" data-filter-type="category"> ${category}
            </label>
        `).join('');
    }

    function populateBrands() {
        const brands = [...new Set(allProducts.map(p => p.brand))];
        brandFilter.innerHTML = brands.map(brand => `
            <label>
                <input type="checkbox" value="${brand}" data-filter-type="brand"> ${brand}
            </label>
        `).join('');
    }

    // --- Product Rendering ---
    function renderProducts(productsToRender) {
        productGrid.innerHTML = ''; // Clear existing products
        noProductsFound.style.display = 'none'; // Hide "no products" message

        if (productsToRender.length === 0) {
            noProductsFound.style.display = 'block';
            paginationContainer.innerHTML = ''; // Clear pagination
            return;
        }

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = productsToRender.slice(startIndex, endIndex);

        paginatedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p class="category">${product.category} | ${product.brand}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <div class="rating">
                        ${generateStarRating(product.rating)}
                        <span>(${product.rating.toFixed(1)})</span>
                    </div>
                    <p class="availability ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                        ${product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <button>${product.inStock ? 'Add to Cart' : 'Notify Me'}</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        renderPagination(productsToRender.length);
    }

    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < (5 - Math.ceil(rating)); i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    // --- Filtering Logic ---
    function applyFiltersAndSort() {
        let filtered = [...allProducts];

        // 1. Search Term
        if (filters.searchTerm) {
            const searchTermLower = filters.searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTermLower) ||
                product.description.toLowerCase().includes(searchTermLower) ||
                product.category.toLowerCase().includes(searchTermLower) ||
                product.brand.toLowerCase().includes(searchTermLower)
            );
        }

        // 2. Categories
        if (filters.categories.size > 0) {
            filtered = filtered.filter(product => filters.categories.has(product.category));
        }

        // 3. Price Range
        filtered = filtered.filter(product =>
            product.price >= filters.minPrice && product.price <= filters.maxPrice
        );

        // 4. Ratings
        if (filters.ratings.size > 0) {
            filtered = filtered.filter(product => {
                let matchesRating = false;
                filters.ratings.forEach(minRating => {
                    if (product.rating >= parseInt(minRating)) {
                        matchesRating = true;
                    }
                });
                return matchesRating;
            });
        }

        // 5. Brands
        if (filters.brands.size > 0) {
            filtered = filtered.filter(product => filters.brands.has(product.brand));
        }

        // 6. Availability
        if (filters.inStock) {
            filtered = filtered.filter(product => product.inStock);
        }
        if (filters.onSale) {
            filtered = filtered.filter(product => product.onSale);
        }


        // Apply sorting
        currentProducts = sortProducts(filtered);
        currentPage = 1; // Reset to first page after filtering/sorting
        renderProducts(currentProducts);
    }

    // --- Sorting Logic ---
    function sortProducts(products) {
        const sortBy = sortSelect.value;
        switch (sortBy) {
            case 'price-asc':
                return products.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return products.sort((a, b) => b.price - a.price);
            case 'rating-desc':
                return products.sort((a, b) => b.rating - a.rating);
            case 'name-asc':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return products.sort((a, b) => b.name.localeCompare(a.name));
            case 'default':
            default:
                return products.sort((a,b) => a.id - b.id); // Maintain original order by ID
        }
    }

    // --- Pagination Logic ---
    function renderPagination(totalProducts) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) {
            return; // No pagination needed for 1 or less pages
        }

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('page-btn');
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentPage = i;
                renderProducts(currentProducts);
            });
            paginationContainer.appendChild(button);
        }
    }

    // --- Event Listeners ---

    // Category and Brand Filters
    categoryFilter.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.dataset.filterType === 'category') {
            if (e.target.checked) {
                filters.categories.add(e.target.value);
            } else {
                filters.categories.delete(e.target.value);
            }
            applyFiltersAndSort();
        }
    });

    brandFilter.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.dataset.filterType === 'brand') {
            if (e.target.checked) {
                filters.brands.add(e.target.value);
            } else {
                filters.brands.delete(e.target.value);
            }
            applyFiltersAndSort();
        }
    });

    // Price Range Filter
    priceRangeInput.addEventListener('input', (e) => {
        filters.maxPrice = parseFloat(e.target.value);
        maxPriceDisplay.textContent = filters.maxPrice.toFixed(2);
        // We apply filter only on button click for better UX
    });

    applyPriceFilterBtn.addEventListener('click', () => {
        applyFiltersAndSort();
    });

    // Rating Filter
    ratingFilter.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.dataset.rating) {
            if (e.target.checked) {
                filters.ratings.add(e.target.dataset.rating);
            } else {
                filters.ratings.delete(e.target.dataset.rating);
            }
            applyFiltersAndSort();
        }
    });

    // Sort Select
    sortSelect.addEventListener('change', () => {
        applyFiltersAndSort();
    });

    // Search Input and Button
    searchInput.addEventListener('input', (e) => {
        filters.searchTerm = e.target.value.trim();
        applyFiltersAndSort();
    });

    searchButton.addEventListener('click', () => {
        // Filter is already applied on input, but good to have for explicit search
        applyFiltersAndSort();
    });

    // Availability Filters
    inStockFilter.addEventListener('change', (e) => {
        filters.inStock = e.target.checked;
        applyFiltersAndSort();
    });

    onSaleFilter.addEventListener('change', (e) => {
        filters.onSale = e.target.checked;
        applyFiltersAndSort();
    });

    // Clear All Filters
    clearFiltersBtn.addEventListener('click', () => {
        // Reset all filter states
        filters = {
            searchTerm: '',
            categories: new Set(),
            minPrice: 0,
            maxPrice: getMaxPrice(allProducts),
            ratings: new Set(),
            brands: new Set(),
            inStock: false,
            onSale: false
        };

        // Reset UI elements
        searchInput.value = '';
        priceRangeInput.value = getMaxPrice(allProducts);
        minPriceDisplay.textContent = '0';
        maxPriceDisplay.textContent = getMaxPrice(allProducts).toFixed(2);
        sortSelect.value = 'default';

        document.querySelectorAll('#categoryFilter input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        document.querySelectorAll('#ratingFilter input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        document.querySelectorAll('#brandFilter input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        inStockFilter.checked = false;
        onSaleFilter.checked = false;

        // Re-apply filters to show all products
        applyFiltersAndSort();
    });


    // --- Initial Page Load ---
    initializeFilters();
});