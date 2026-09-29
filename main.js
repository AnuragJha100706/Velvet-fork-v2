/**
 * THE VELVET FORK — BOOTSTRAP 5 APPLICATION ENGINE
 * Features: Dual Theme Switcher (Warm Light / Dark), Dual-Mode Offline-First Resilience,
 * Bootstrap 5 Modal Integrations, Live Filter Engine, and Smooth Micro-Animations.
 */

// --- 1. INITIAL CATALOG & SAMPLE DATA ---
const MENU_CATALOG = [
    // North Indian
    { id: 'shahi-paneer', title: 'Shahi Paneer Artisanal', category: 'north-indian', isVeg: true, price: 210, rating: 4.8, img: 'pics/shahi-paneer.jpg', ingredients: 'Fresh cottage cheese, cashew paste, rich tomato reduction, fresh dairy cream, royal garam masala, Kashmiri saffron.' },
    { id: 'mix-veg', title: 'Heritage Mixed Vegetables', category: 'north-indian', isVeg: true, price: 170, rating: 4.2, img: 'pics/mixed-veg.jpg', ingredients: 'Farm-fresh florets, baby carrots, French beans, green peas simmered in a spiced onion-tomato gravy.' },
    { id: 'aloo-dum', title: 'Kashmiri Dum Aloo', category: 'north-indian', isVeg: true, price: 260, rating: 4.6, img: 'pics/dum-aloo.jpg', ingredients: 'Baby potatoes slow-simmered in a robust fennel and ginger infused Kashmiri chili gravy.' },
    { id: 'palak-paneer', title: 'Palak Paneer Velvet', category: 'north-indian', isVeg: true, price: 250, rating: 4.7, img: 'pics/palak-paneer.jpg', ingredients: 'Pureed baby spinach tempered with garlic, cumin, and velvety cottage cheese cubes with churned butter.' },
    { id: 'kadai-paneer', title: 'Charred Kadai Paneer', category: 'north-indian', isVeg: true, price: 190, rating: 4.5, img: 'pics/kadai-paneer.jpg', ingredients: 'Wok-tossed bell peppers, diced onions, and cottage cheese in freshly pounded coriander-chili kadai masala.' },
    { id: 'chicken-curry', title: 'Grand Trunk Chicken Curry', category: 'north-indian', isVeg: false, price: 250, rating: 4.7, img: 'pics/Chicken-Curry.jpg', ingredients: 'Tender bone-in farm chicken simmered in traditional caramelized onion and whole spice broth.' },
    { id: 'mutton-korma', title: 'Royal Awadhi Mutton Korma', category: 'north-indian', isVeg: false, price: 450, rating: 4.9, img: 'pics/bihari-mutton-curry.jpg', ingredients: 'Slow-cooked prime cuts of mutton in velvety yogurt, almond essence, and aromatic kewra spices.' },
    { id: 'fish-curry', title: 'Coastal Mustard Fish Curry', category: 'north-indian', isVeg: false, price: 320, rating: 4.6, img: 'pics/fish-curry.jpg', ingredients: 'Fresh river fillet simmered in a delicate mustard, green chili, and kokum tomato broth.' },
    { id: 'butter-chicken', title: 'Velvet Butter Chicken', category: 'north-indian', isVeg: false, price: 350, rating: 4.9, img: 'pics/butter chicken.jpg', ingredients: 'Smoked tandoori chicken shreds immersed in a rich satin butter, sun-ripened tomato, and fenugreek gravy.' },
    { id: 'mutton-curry', title: 'Bihari Champaran Meat', category: 'north-indian', isVeg: false, price: 410, rating: 4.8, img: 'pics/bihari-mutton-curry.jpg', ingredients: 'Clay-pot earthen cooked mutton with whole garlic pods, cold-pressed mustard oil, and rustic regional spices.' },

    // South Indian
    { id: 'uttapam', title: 'Onion Tomato Uttapam', category: 'south-indian', isVeg: true, price: 170, rating: 4.5, img: 'pics/uttapam.jpg', ingredients: 'Fermented stone-ground rice & lentil pancake topped with shallots, heirloom tomatoes, and curry leaves.' },
    { id: 'vada-sambar', title: 'Crispy Medu Vada Sambar', category: 'south-indian', isVeg: true, price: 160, rating: 4.3, img: 'pics/Vada sambar.jpg', ingredients: 'Golden crisp urad dal fritters served with piping hot drumstick-lentil sambar and coconut relish.' },
    { id: 'thatte-idly', title: 'Bidadi Thatte Idli', category: 'south-indian', isVeg: true, price: 180, rating: 4.6, img: 'pics/thatte idly.jpg', ingredients: 'Steamed plate-sized fluffy rice cakes draped in spiced podi butter and fresh coconut chutney.' },
    { id: 'masala-dosa', title: 'Ghee Roast Masala Dosa', category: 'south-indian', isVeg: true, price: 210, rating: 4.8, img: 'pics/masala dosa.jpg', ingredients: 'Paper-thin golden crepe roasted in pure A2 cow ghee, filled with spiced tempered potato mash.' },
    { id: 'idli-coconut-chutney', title: 'Steamed Button Idlis', category: 'south-indian', isVeg: true, price: 120, rating: 4.4, img: 'pics/idli coconut chutny.jpg', ingredients: 'Soft steamed pearl idlis served with trio of chutneys: grated coconut, roasted tomato, and mint.' },

    // Chinese
    { id: 'hakka-noodles', title: 'Wok-Tossed Hakka Noodles', category: 'chinese', isVeg: true, price: 180, rating: 4.5, img: 'pics/Hakka-Noodles-.jpg', ingredients: 'Hand-pulled noodles stir-fried in high-heat wok with julienne bell peppers, scallions, and light soy.' },
    { id: 'schezwan-fried-rice', title: 'Fire Schezwan Fried Rice', category: 'chinese', isVeg: true, price: 200, rating: 4.6, img: 'pics/schezwan  fried rice.jpg', ingredients: 'Fragrant jasmine rice tossed with fiery Sichuan peppercorns, roasted red chilies, and scallions.' },
    { id: 'manchurian-fried-rice', title: 'Crispy Manchurian Rice Bowl', category: 'chinese', isVeg: true, price: 230, rating: 4.7, img: 'pics/manchurian-fried-rice.jpg', ingredients: 'Golden vegetable dumplings glazed in spicy coriander-ginger sauce served over wok fried rice.' },
    { id: 'manchurian-noodles', title: 'Manchurian with Noodles', category: 'chinese', isVeg: true, price: 240, rating: 4.6, img: 'pics/manchurian-noodle.jpg', ingredients: 'Tender vegetable Manchurian spheres tossed with silky wheat noodles and dark garlic soy.' },
    { id: 'paneer-chilly-noodles', title: 'Paneer Chili Noodles', category: 'chinese', isVeg: true, price: 270, rating: 4.7, img: 'pics/paneer noddle.jpg', ingredients: 'Crispy tossed cottage cheese cubes, bird’s eye chili, scallions, and sesame wok noodles.' },

    // Italian
    { id: 'garlic-bread', title: 'Artisan Herb Garlic Bread', category: 'italian', isVeg: true, price: 120, rating: 4.3, img: 'pics/garlic-bread.jpg', ingredients: 'Toasted rustic sourdough baguette drenched in garlic-herb butter, roasted parsley, and sea salt.' },
    { id: 'four-cheese-pizza', title: 'Quattro Formaggi Sourdough', category: 'italian', isVeg: true, price: 250, rating: 4.9, img: 'pics/classic-cheese-pizza.jpg', ingredients: 'Wood-fired sourdough crust topped with Italian Fior di Latte mozzarella, gorgonzola, parmesan, and fontina.' },
    { id: 'alfredo-pasta', title: 'Fettuccine Truffle Alfredo', category: 'italian', isVeg: true, price: 210, rating: 4.5, img: 'pics/alfredo_pasta.jpg', ingredients: 'Handmade fettuccine enveloped in rich parmesan cream sauce, cracked black pepper, and white truffle oil.' },
    { id: 'spaghetti', title: 'Spaghetti Pomodoro Basilico', category: 'italian', isVeg: true, price: 280, rating: 4.4, img: 'pics/spaghetti.jpg', ingredients: 'Al dente durum wheat spaghetti with San Marzano tomato reduction, extra virgin olive oil, and fresh basil.' },
    { id: 'risotto', title: 'Wild Mushroom Risotto', category: 'italian', isVeg: true, price: 350, rating: 4.6, img: 'pics/risotto.jpg', ingredients: 'Arborio rice slow-stirred with porcini and cremini mushrooms, white wine reduction, and 24-month aged parmesan.' },

    // Continental
    { id: 'caesar-salad', title: 'Classic Caesar Crunch', category: 'continental', isVeg: true, price: 220, rating: 4.4, img: 'pics/ceasar salad.jpg', ingredients: 'Crisp romaine lettuce hearts, garlic-herb sourdough croutons, shaved pecorino, and creamy house dressing.' },

    // Beverages
    { id: 'mango-smoothie', title: 'Alphonso Mango Smoothie', category: 'beverages', isVeg: true, price: 120, rating: 4.8, img: 'pics/Mango-Smoothie.jpg', ingredients: 'Sun-ripened Ratnagiri Alphonso mango pulp churned with rich Greek yogurt and chia seeds.' },
    { id: 'cold-coffee', title: 'Bourbon Roast Cold Coffee', category: 'beverages', isVeg: true, price: 100, rating: 4.4, img: 'pics/cold coffee.jpg', ingredients: 'Double-shot espresso cold-brewed for 18 hours, full-fat milk, dark cacao, and Madagascar vanilla.' },
    { id: 'beer', title: 'Belgian Crafted Draught (Pint)', category: 'beverages', isVeg: true, price: 160, rating: 4.7, img: 'pics/beer.jpg', ingredients: 'Chilled artisanal wheat ale infused with subtle hints of orange peel, coriander, and European hops.' },
    { id: 'red-wine', title: 'Reserve Pinot Noir (Glass)', category: 'beverages', isVeg: true, price: 300, rating: 4.9, img: 'pics/red wine.jpg', ingredients: 'Full-bodied oak-matured red wine boasting velvety tannins, ripe dark cherry, and cocoa aromas.' },
    { id: 'lassi', title: 'Royal Malai Kesar Lassi', category: 'beverages', isVeg: true, price: 80, rating: 4.6, img: 'pics/lassi.jpg', ingredients: 'Slow-churned thick earthen yogurt crowned with pistachio slivers, cardamom, and Kashmiri saffron.' }
];

const DEFAULT_REVIEWS = [
    { username: 'Priya Raghavan', rating: 5, date: '2025-06-15', text: 'An extraordinary dining experience! The Velvet Butter Chicken and Truffle Alfredo are simply world-class. Impeccable service and breathtaking ambiance.' },
    { username: 'Arjun Singhania', rating: 5, date: '2025-06-18', text: 'Celebrated our anniversary at the Romantic Terrace. The staff attended to every minor detail. The mutton korma is unmatched anywhere in Delhi NCR.' },
    { username: 'Neha & Kabir', rating: 5, date: '2025-06-21', text: 'Beautiful interior lighting and luxurious setting. Highly recommend the Quattro Formaggi Pizza and Alphonso Mango Smoothie.' },
    { username: 'Vikram Malhotra', rating: 5, date: '2025-06-23', text: 'The epitome of haute-cuisine. From the valet to the sommelier suggestions, everything exuded Michelin-grade attention to quality.' }
];

const SOMMELIER_DATA = {
    'butter-chicken': {
        wine: 'Reserve Pinot Noir (Vintage 2021)',
        price: '₹300',
        title: 'Cellar Pairing: Pinot Noir',
        notes: '"Velvety cherry tannins complement the creamy acidity of the satin tomato reduction."',
        temp: '16°C',
        glass: 'Burgundy Goblet'
    },
    'shahi-paneer': {
        wine: 'Crisp Marlborough Sauvignon Blanc',
        price: '₹280',
        title: 'Cellar Pairing: Sauvignon Blanc',
        notes: '"Bright herbaceous lemongrass notes balance the richness of cashew cream and saffron."',
        temp: '10°C',
        glass: 'Fluted White Goblet'
    },
    'four-cheese-pizza': {
        wine: 'Belgian Crafted Draught Ale',
        price: '₹160',
        title: 'Cellar Pairing: Wheat Ale',
        notes: '"Effervescent citrus hops cut smoothly through molten mozzarella, gorgonzola, and fontina."',
        temp: '6°C',
        glass: 'Pint Chalice'
    },
    'mutton-curry': {
        wine: 'Full-Bodied Syrah / Shiraz',
        price: '₹350',
        title: 'Cellar Pairing: Shiraz Grand Cru',
        notes: '"Robust peppery spice and earthen oak enhance the rustic clay-pot roasted flavors."',
        temp: '18°C',
        glass: 'Bordeaux Grand Cru'
    },
    'alfredo-pasta': {
        wine: 'Oaked Italian Chardonnay',
        price: '₹290',
        title: 'Cellar Pairing: Italian Chardonnay',
        notes: '"Toasted brioche and subtle vanilla undertones elevate the white truffle butter sauce."',
        temp: '11°C',
        glass: 'Bordeaux White Goblet'
    }
};

const TastingTrayService = {
    getItems() {
        try {
            return JSON.parse(localStorage.getItem('vf_tray') || '[]');
        } catch(e) {
            return [];
        }
    },
    saveItems(items) {
        localStorage.setItem('vf_tray', JSON.stringify(items));
        this.updateBadge();
    },
    addItem(dishId) {
        const items = this.getItems();
        const existing = items.find(i => i.id === dishId);
        if (existing) {
            existing.qty += 1;
        } else {
            items.push({ id: dishId, qty: 1 });
        }
        this.saveItems(items);
        return items;
    },
    updateQty(dishId, delta) {
        let items = this.getItems();
        const item = items.find(i => i.id === dishId);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                items = items.filter(i => i.id !== dishId);
            }
        }
        this.saveItems(items);
        return items;
    },
    clear() {
        localStorage.removeItem('vf_tray');
        this.updateBadge();
    },
    updateBadge() {
        const items = this.getItems();
        const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
        document.querySelectorAll('#vf-tray-badge-count').forEach(b => {
            b.textContent = totalCount;
        });
    }
};

// --- 2. UNIFIED DATA & RESILIENCE SERVICE ---
class VelvetDataService {
    constructor() {
        this.apiBase = 'http://localhost:4000/api';
        this.isBackendOnline = null;
        this.initStorage();
    }

    initStorage() {
        if (!localStorage.getItem('vf_reviews')) {
            localStorage.setItem('vf_reviews', JSON.stringify(DEFAULT_REVIEWS));
        }
        if (!localStorage.getItem('vf_reservations')) {
            localStorage.setItem('vf_reservations', JSON.stringify([
                {
                    id: 849201,
                    code: 'VF-849201',
                    username: 'lucky',
                    name: 'Lucky Jha',
                    phone: '+91 8709547016',
                    email: 'lucky@velvetfork.com',
                    date: '2025-07-15',
                    time: '20:30',
                    zone: 'Romantic Terrace',
                    people: '2',
                    requests: 'Window seating with anniversary floral setup',
                    status: 'Confirmed'
                }
            ]));
        }
        if (!localStorage.getItem('vf_users')) {
            localStorage.setItem('vf_users', JSON.stringify([
                {
                    username: 'lucky',
                    name: 'Lucky Jha',
                    email: 'lucky@velvetfork.com',
                    phone: '+91 8709547016',
                    points: 450,
                    avatar: 'pics/profile.jpg',
                    favorites: ['butter-chicken', 'four-cheese-pizza', 'red-wine', 'shahi-paneer']
                },
                {
                    username: 'arpit12',
                    name: 'Arpit Kumar',
                    email: 'arpit@velvetfork.com',
                    phone: '+91 9876543210',
                    points: 300,
                    avatar: 'pics/profile.jpg',
                    favorites: ['chicken-curry', 'vada-sambar', 'aloo-dum']
                }
            ]));
        }
    }

    async checkBackend() {
        if (this.isBackendOnline !== null) return this.isBackendOnline;
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 800);
            const res = await fetch(`${this.apiBase}/feedback`, { method: 'OPTIONS', signal: controller.signal });
            clearTimeout(timeoutId);
            this.isBackendOnline = res.ok || res.status < 500;
        } catch (e) {
            this.isBackendOnline = false;
        }
        return this.isBackendOnline;
    }

    getCurrentUser() {
        const username = localStorage.getItem('currentUser');
        if (!username) return null;
        const users = JSON.parse(localStorage.getItem('vf_users') || '[]');
        return users.find(u => u.username.toLowerCase() === username.toLowerCase()) || {
            username: username,
            name: username,
            email: `${username}@velvetfork.com`,
            points: 150,
            avatar: 'pics/profile.jpg',
            favorites: []
        };
    }

    async login(username, password) {
        const online = await this.checkBackend();
        if (online) {
            try {
                const res = await fetch(`${this.apiBase}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem('currentUser', username);
                    return { success: true, username };
                }
            } catch (err) {}
        }

        const users = JSON.parse(localStorage.getItem('vf_users') || '[]');
        const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
        
        if (user && (!user.password || user.password === password || password.length >= 3)) {
            localStorage.setItem('currentUser', user.username);
            return { success: true, username: user.username };
        } else if (!user && username.length >= 3 && password.length >= 3) {
            const guestUser = {
                username,
                name: username,
                email: `${username}@velvetfork.com`,
                points: 100,
                avatar: 'pics/profile.jpg',
                favorites: []
            };
            users.push(guestUser);
            localStorage.setItem('vf_users', JSON.stringify(users));
            localStorage.setItem('currentUser', username);
            return { success: true, username };
        }
        throw new Error('Invalid username or password.');
    }

    async register(name, email, username, password, phone = '') {
        const users = JSON.parse(localStorage.getItem('vf_users') || '[]');
        if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
            throw new Error('Username is already registered.');
        }

        const newUser = {
            username,
            name: name || username,
            email,
            phone,
            password,
            points: 200,
            avatar: 'pics/profile.jpg',
            favorites: []
        };
        users.push(newUser);
        localStorage.setItem('vf_users', JSON.stringify(users));
        return { success: true, user: newUser };
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    updateUserProfile(updatedData) {
        const current = this.getCurrentUser();
        if (!current) return;
        const users = JSON.parse(localStorage.getItem('vf_users') || '[]');
        const idx = users.findIndex(u => u.username.toLowerCase() === current.username.toLowerCase());
        if (idx !== -1) {
            users[idx] = { ...users[idx], ...updatedData };
            localStorage.setItem('vf_users', JSON.stringify(users));
        }
    }

    getFavorites() {
        const user = this.getCurrentUser();
        return user ? (user.favorites || []) : JSON.parse(localStorage.getItem('vf_guest_favs') || '[]');
    }

    toggleFavorite(dishId) {
        const user = this.getCurrentUser();
        let favs = this.getFavorites();
        const exists = favs.includes(dishId);

        if (exists) {
            favs = favs.filter(id => id !== dishId);
        } else {
            favs.push(dishId);
        }

        if (user) {
            this.updateUserProfile({ favorites: favs });
        } else {
            localStorage.setItem('vf_guest_favs', JSON.stringify(favs));
        }

        return !exists;
    }

    getReservations(username = null) {
        const all = JSON.parse(localStorage.getItem('vf_reservations') || '[]');
        if (!username) {
            const current = this.getCurrentUser();
            username = current ? current.username : null;
        }
        if (!username) return all;
        return all.filter(r => r.username && r.username.toLowerCase() === username.toLowerCase());
    }

    async addReservation(reservationData) {
        const id = Math.floor(100000 + Math.random() * 900000);
        const code = `VF-${id}`;
        const newReservation = {
            id,
            code,
            status: 'Confirmed',
            createdAt: new Date().toISOString(),
            ...reservationData
        };

        const reservations = JSON.parse(localStorage.getItem('vf_reservations') || '[]');
        reservations.unshift(newReservation);
        localStorage.setItem('vf_reservations', JSON.stringify(reservations));

        const user = this.getCurrentUser();
        if (user) {
            this.updateUserProfile({ points: (user.points || 0) + 150 });
        }

        return newReservation;
    }

    cancelReservation(reservationId) {
        let reservations = JSON.parse(localStorage.getItem('vf_reservations') || '[]');
        reservations = reservations.filter(r => r.id != reservationId);
        localStorage.setItem('vf_reservations', JSON.stringify(reservations));
    }

    async getReviews() {
        return JSON.parse(localStorage.getItem('vf_reviews') || '[]');
    }

    async addReview(reviewData) {
        const reviews = JSON.parse(localStorage.getItem('vf_reviews') || '[]');
        const newReview = {
            date: new Date().toISOString().split('T')[0],
            ...reviewData
        };
        reviews.unshift(newReview);
        localStorage.setItem('vf_reviews', JSON.stringify(reviews));
        return newReview;
    }
}

const DataService = new VelvetDataService();

// --- 3. TOAST NOTIFICATION SYSTEM ---
const Toast = {
    init() {
        if (!document.getElementById('vf-toast-container')) {
            const container = document.createElement('div');
            container.id = 'vf-toast-container';
            container.className = 'vf-toast-container';
            document.body.appendChild(container);
        }
    },
    show(message, type = 'gold', duration = 3500) {
        this.init();
        const container = document.getElementById('vf-toast-container');
        const toast = document.createElement('div');
        toast.className = `vf-toast vf-toast-${type}`;

        const iconMap = {
            success: 'bi-check-circle-fill text-success',
            error: 'bi-x-circle-fill text-danger',
            gold: 'bi-stars text-warning'
        };

        toast.innerHTML = `
            <i class="bi ${iconMap[type] || 'bi-info-circle-fill'} fs-5"></i>
            <div class="flex-grow-1 small fw-semibold">${message}</div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 350);
        }, duration);
    }
};

// --- 4. THEME SWITCHER (Warm Light / Sleek Dark) ---
function initTheme() {
    const savedTheme = localStorage.getItem('vf_theme') || 'light';
    applyTheme(savedTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            Toast.show(`Switched to ${newTheme === 'dark' ? 'Dark Luxury' : 'Warm Light'} mode.`, 'gold', 2000);
        });
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('vf_theme', theme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.innerHTML = theme === 'dark' 
            ? '<i class="bi bi-sun-fill text-warning"></i>' 
            : '<i class="bi bi-moon-stars-fill text-secondary"></i>';
        btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    });
}

// --- 5. UNIVERSAL NAVIGATION & AUTH STATE ---
function initGlobalNavigation() {
    // 1. Highlight Active Route
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.vf-nav-link, .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Auth State Sync
    const authContainers = document.querySelectorAll('.vf-nav-auth');
    const user = DataService.getCurrentUser();

    authContainers.forEach(container => {
        if (user) {
            container.innerHTML = `
                <a href="profile.html" class="vf-user-chip" title="My VIP Profile">
                    <img src="${user.avatar || 'pics/profile.jpg'}" alt="${user.name}">
                    <span>${user.name.split(' ')[0]}</span>
                </a>
                <button class="btn btn-sm btn-vf-outline logout-btn-trigger py-1 px-3" title="Sign Out">
                    <i class="bi bi-box-arrow-right"></i>
                </button>
            `;
        } else {
            container.innerHTML = `
                <a href="login.html" class="btn btn-sm btn-vf-outline py-1 px-3">Sign In</a>
                <a href="reservation.html" class="btn btn-sm btn-vf-primary py-1 px-3 d-none d-sm-inline-flex">Reserve</a>
            `;
        }
    });

    // Attach Logout triggers
    document.querySelectorAll('.logout-btn-trigger').forEach(btn => {
        btn.addEventListener('click', () => showLogoutModal());
    });

    // Newsletter submit handlers
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && input.value) {
                Toast.show('Thank you! You are subscribed to our VIP Gastronomy updates.', 'success');
                input.value = '';
            }
        });
    });
}

// --- 6. LOGOUT MODAL ---
function showLogoutModal() {
    let modalEl = document.getElementById('vf-logout-modal');
    if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = 'vf-logout-modal';
        modalEl.className = 'modal fade';
        modalEl.tabIndex = -1;
        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content rounded-4 border-0 shadow">
                    <div class="modal-body text-center p-4">
                        <div class="fs-1 text-warning mb-2"><i class="bi bi-box-arrow-right"></i></div>
                        <h5 class="fw-bold mb-2">Sign Out</h5>
                        <p class="text-muted small mb-4">Are you sure you want to end your current VIP dining session?</p>
                        <div class="d-flex justify-content-center gap-2">
                            <button type="button" class="btn btn-sm btn-vf-outline px-3" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" id="confirm-logout-btn" class="btn btn-sm btn-vf-primary px-3">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalEl);

        modalEl.querySelector('#confirm-logout-btn').addEventListener('click', () => {
            DataService.logout();
            Toast.show('You have successfully signed out.', 'gold');
            const bsModal = bootstrap.Modal.getInstance(modalEl);
            if (bsModal) bsModal.hide();
            setTimeout(() => {
                if (window.location.pathname.endsWith('profile.html')) {
                    window.location.href = 'index.html';
                } else {
                    window.location.reload();
                }
            }, 600);
        });
    }

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

// --- 7. MENU PAGE CONTROLLER ---
function initMenuPage() {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    const searchInput = document.getElementById('menu-search-input');
    const categoryPills = document.querySelectorAll('.vf-filter-pill');
    const dietSelect = document.getElementById('diet-filter-select');

    let currentCategory = 'all';
    let currentDiet = 'all';
    let searchQuery = '';

    function renderMenu() {
        const favs = DataService.getFavorites();
        let items = MENU_CATALOG.filter(dish => {
            if (currentCategory !== 'all' && dish.category !== currentCategory) return false;
            if (currentDiet === 'veg' && !dish.isVeg) return false;
            if (currentDiet === 'non-veg' && dish.isVeg) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                if (!dish.title.toLowerCase().includes(q) && !dish.ingredients.toLowerCase().includes(q)) {
                    return false;
                }
            }
            return true;
        });

        if (items.length === 0) {
            menuGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="display-4 text-muted mb-3"><i class="bi bi-search"></i></div>
                    <h4 class="fw-bold mb-2">No Culinary Dishes Found</h4>
                    <p class="text-muted">Try adjusting your keyword search or cuisine filter.</p>
                </div>
            `;
            return;
        }

        menuGrid.innerHTML = items.map(dish => {
            const isFav = favs.includes(dish.id);
            return `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="vf-card" data-dish-id="${dish.id}">
                        <div class="vf-card-img-wrap">
                            <img src="${dish.img}" alt="${dish.title}" loading="lazy">
                            <button class="vf-fav-btn ${isFav ? 'favorited' : ''}" 
                                    data-fav-id="${dish.id}" 
                                    aria-label="Bookmark ${dish.title}"
                                    title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                                <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
                            </button>
                            <div class="vf-diet-tag">
                                <span class="${dish.isVeg ? 'dot-veg' : 'dot-nonveg'}"></span>
                                <span>${dish.isVeg ? 'Veg' : 'Non-Veg'}</span>
                            </div>
                        </div>
                        <div class="card-body p-4 d-flex flex-column flex-grow-1">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="fw-bold mb-0 text-truncate" style="max-width:70%;">${dish.title}</h5>
                                <span class="vf-price">₹${dish.price}</span>
                            </div>
                            <p class="text-muted small mb-3 flex-grow-1" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
                                ${dish.ingredients}
                            </p>
                            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                                <div class="small text-warning fw-semibold">
                                    <i class="bi bi-star-fill"></i> ${dish.rating} <span class="text-muted fw-normal">/ 5</span>
                                </div>
                                <button class="btn btn-sm btn-vf-outline py-1 px-3 view-dish-btn" data-dish-id="${dish.id}">
                                    Tasting Notes <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                            <button class="btn btn-sm btn-outline-danger add-to-tray-btn mt-2 w-100 py-1" data-dish-id="${dish.id}">
                                <i class="bi bi-basket2-fill me-1"></i> + Tasting Tray
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Attach Tasting Notes Click
        menuGrid.querySelectorAll('.view-dish-btn, .vf-card-img-wrap img').forEach(el => {
            el.addEventListener('click', (e) => {
                const card = el.closest('.vf-card');
                const dishId = card.getAttribute('data-dish-id');
                const dish = MENU_CATALOG.find(d => d.id === dishId);
                if (dish) openDishModal(dish);
            });
        });

        // Attach Favorite Toggle
        menuGrid.querySelectorAll('.vf-fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dishId = btn.getAttribute('data-fav-id');
                const added = DataService.toggleFavorite(dishId);
                btn.classList.toggle('favorited', added);
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.className = `bi ${added ? 'bi-heart-fill' : 'bi-heart'}`;
                }
                Toast.show(added ? 'Added to favorite dishes!' : 'Removed from favorites.', added ? 'success' : 'gold');
            });
        });

        // Attach Tasting Tray Add
        menuGrid.querySelectorAll('.add-to-tray-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dishId = btn.getAttribute('data-dish-id');
                TastingTrayService.addItem(dishId);
                const dish = MENU_CATALOG.find(d => d.id === dishId);
                Toast.show(`Added ${dish ? dish.title : 'dish'} to Tasting Tray!`, 'success');
                if (typeof renderTastingTray === 'function') {
                    renderTastingTray();
                }
            });
        });
    }

    // Category Filter Pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-category');
            renderMenu();
        });
    });

    // Diet Filter Select
    if (dietSelect) {
        dietSelect.addEventListener('change', () => {
            currentDiet = dietSelect.value;
            renderMenu();
        });
    }

    // Search Input
    let searchDebounce;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchDebounce);
            searchDebounce = setTimeout(() => {
                searchQuery = e.target.value.trim();
                renderMenu();
            }, 180);
        });
    }

    // Dish Detail Modal
    function openDishModal(dish) {
        let modalEl = document.getElementById('vf-dish-modal');
        if (!modalEl) {
            modalEl = document.createElement('div');
            modalEl.id = 'vf-dish-modal';
            modalEl.className = 'modal fade';
            modalEl.tabIndex = -1;
            document.body.appendChild(modalEl);
        }

        const isFav = DataService.getFavorites().includes(dish.id);

        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
                    <div class="position-relative" style="height:240px;">
                        <img src="${dish.img}" alt="${dish.title}" style="width:100%; height:100%; object-fit:cover;">
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-3 bg-white p-2 rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <span class="badge bg-danger-subtle text-danger text-uppercase fw-bold mb-1">${dish.category.replace('-', ' ')}</span>
                                <h4 class="fw-bold mb-0">${dish.title}</h4>
                            </div>
                            <span class="vf-price fs-4">₹${dish.price}</span>
                        </div>
                        <div class="d-flex align-items-center gap-3 mb-3 small text-muted">
                            <span class="d-flex align-items-center gap-1">
                                <span class="${dish.isVeg ? 'dot-veg' : 'dot-nonveg'}"></span>
                                <b>${dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}</b>
                            </span>
                            <span><i class="bi bi-star-fill text-warning"></i> ${dish.rating} / 5.0 (Michelin Curated)</span>
                        </div>
                        <h6 class="fw-bold mb-1">Ingredients & Tasting Notes</h6>
                        <p class="text-muted small mb-4">${dish.ingredients}</p>
                        <div class="d-flex gap-2">
                            <button id="modal-fav-toggle" class="btn btn-vf-outline flex-grow-1">
                                <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
                                ${isFav ? 'In Favorites' : 'Add to Favorites'}
                            </button>
                            <a href="reservation.html" class="btn btn-vf-primary flex-grow-1 justify-content-center">
                                Reserve Table
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modalEl.querySelector('#modal-fav-toggle').addEventListener('click', (e) => {
            const added = DataService.toggleFavorite(dish.id);
            const btn = e.currentTarget;
            btn.innerHTML = `<i class="bi ${added ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i> ${added ? 'In Favorites' : 'Add to Favorites'}`;
            Toast.show(added ? 'Saved to favorites!' : 'Removed from favorites.', added ? 'success' : 'gold');
            renderMenu();
        });

        const bsModal = new bootstrap.Modal(modalEl);
        bsModal.show();
    }

    // --- TASTING TRAY RENDERER & BILL ESTIMATOR ---
    function renderTastingTray() {
        const container = document.getElementById('vf-tray-items-container');
        if (!container) return;

        const items = TastingTrayService.getItems();
        TastingTrayService.updateBadge();

        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <div class="display-6 mb-2"><i class="bi bi-cart-x"></i></div>
                    <p class="small mb-0">Your tasting tray is currently empty.<br>Browse the menu and click <b>+ Tasting Tray</b> on any dish.</p>
                </div>
            `;
            if (document.getElementById('vf-tray-subtotal')) document.getElementById('vf-tray-subtotal').textContent = '₹0';
            if (document.getElementById('vf-tray-tax')) document.getElementById('vf-tray-tax').textContent = '₹0';
            if (document.getElementById('vf-tray-total')) document.getElementById('vf-tray-total').textContent = '₹0';
            if (document.getElementById('vf-split-per-person')) document.getElementById('vf-split-per-person').textContent = '₹0 / guest';
            return;
        }

        let subtotal = 0;
        container.innerHTML = items.map(item => {
            const dish = MENU_CATALOG.find(d => d.id === item.id);
            if (!dish) return '';
            const lineTotal = dish.price * item.qty;
            subtotal += lineTotal;
            return `
                <div class="vf-tray-item">
                    <img src="${dish.img}" alt="${dish.title}" class="vf-tray-thumb">
                    <div class="flex-grow-1 overflow-hidden">
                        <h6 class="fw-bold mb-0 text-truncate small">${dish.title}</h6>
                        <span class="text-muted small">₹${dish.price} × ${item.qty} = <b>₹${lineTotal}</b></span>
                    </div>
                    <div class="d-flex align-items-center gap-1">
                        <button class="vf-qty-btn tray-minus" data-id="${dish.id}">-</button>
                        <span class="fw-bold small px-1">${item.qty}</span>
                        <button class="vf-qty-btn tray-plus" data-id="${dish.id}">+</button>
                    </div>
                </div>
            `;
        }).join('');

        const tax = Math.round(subtotal * 0.05);
        const total = subtotal + tax;

        if (document.getElementById('vf-tray-subtotal')) document.getElementById('vf-tray-subtotal').textContent = `₹${subtotal}`;
        if (document.getElementById('vf-tray-tax')) document.getElementById('vf-tray-tax').textContent = `₹${tax}`;
        if (document.getElementById('vf-tray-total')) document.getElementById('vf-tray-total').textContent = `₹${total}`;

        // Update Split
        const slider = document.getElementById('vf-split-slider');
        const splitCount = slider ? parseInt(slider.value) : 2;
        const perPerson = Math.ceil(total / splitCount);
        if (document.getElementById('vf-split-per-person')) {
            document.getElementById('vf-split-per-person').textContent = `₹${perPerson} / guest`;
        }

        // Attach Minus/Plus
        container.querySelectorAll('.tray-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const dishId = btn.getAttribute('data-id');
                TastingTrayService.updateQty(dishId, -1);
                renderTastingTray();
            });
        });
        container.querySelectorAll('.tray-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const dishId = btn.getAttribute('data-id');
                TastingTrayService.updateQty(dishId, 1);
                renderTastingTray();
            });
        });
    }

    // Split Slider Event
    const splitSlider = document.getElementById('vf-split-slider');
    if (splitSlider) {
        splitSlider.addEventListener('input', (e) => {
            const count = parseInt(e.target.value);
            const label = document.getElementById('vf-split-count-label');
            if (label) label.textContent = `${count} Guest${count > 1 ? 's' : ''}`;
            
            const totalText = document.getElementById('vf-tray-total')?.textContent || '0';
            const total = parseInt(totalText.replace('₹', '')) || 0;
            const perPerson = Math.ceil(total / count);
            const perPersonEl = document.getElementById('vf-split-per-person');
            if (perPersonEl) perPersonEl.textContent = `₹${perPerson} / guest`;
        });
    }

    // Clear Tray
    const clearTrayBtn = document.getElementById('vf-clear-tray-btn');
    if (clearTrayBtn) {
        clearTrayBtn.addEventListener('click', () => {
            TastingTrayService.clear();
            renderTastingTray();
            Toast.show('Tasting tray cleared.', 'gold');
        });
    }

    // Virtual Sommelier
    const sommelierSelect = document.getElementById('vf-sommelier-select');
    if (sommelierSelect) {
        sommelierSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            const pair = SOMMELIER_DATA[val];
            if (pair) {
                const wineEl = document.getElementById('vf-sommelier-wine');
                const priceEl = document.getElementById('vf-sommelier-price');
                const titleEl = document.getElementById('vf-sommelier-title');
                const notesEl = document.getElementById('vf-sommelier-notes');
                const tempEl = document.getElementById('vf-sommelier-temp');
                const glassEl = document.getElementById('vf-sommelier-glass');

                if (wineEl) wineEl.textContent = pair.wine;
                if (priceEl) priceEl.textContent = pair.price;
                if (titleEl) titleEl.textContent = pair.title;
                if (notesEl) notesEl.textContent = pair.notes;
                if (tempEl) tempEl.textContent = pair.temp;
                if (glassEl) glassEl.textContent = pair.glass;
            }
        });
    }

    // Mystery Card
    const mysteryCard = document.getElementById('vf-mystery-card');
    if (mysteryCard) {
        mysteryCard.addEventListener('click', () => {
            const cover = document.getElementById('vf-mystery-cover');
            const content = document.getElementById('vf-mystery-content');
            if (cover && content && content.classList.contains('d-none')) {
                cover.classList.add('d-none');
                content.classList.remove('d-none');
                Toast.show('Chef Secret Special Unlocked! Promo: VELVETVIP15', 'gold', 6000);
            }
        });
    }

    renderTastingTray();
    renderMenu();
}

// --- 8. RESERVATION PAGE CONTROLLER ---
function initReservationPage() {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    // Seating Zone selection
    const zoneTiles = document.querySelectorAll('.vf-zone-tile');
    let selectedZone = 'Grand Dining Salon';
    const tableNodes = document.querySelectorAll('.vf-table-node');
    const tableCodeInput = document.getElementById('res-table-code');
    const tableInfoEl = document.getElementById('vf-selected-table-info');

    // Interactive Floor Plan Table Node Selection
    tableNodes.forEach(node => {
        node.addEventListener('click', () => {
            if (node.classList.contains('reserved')) return;
            tableNodes.forEach(n => n.classList.remove('selected'));
            node.classList.add('selected');

            const tableId = node.getAttribute('data-table');
            const zoneName = node.getAttribute('data-zone');
            const seats = node.getAttribute('data-seats');

            if (tableCodeInput) tableCodeInput.value = tableId;
            selectedZone = zoneName;

            // Highlight corresponding zone tile
            zoneTiles.forEach(tile => {
                tile.classList.toggle('active', tile.getAttribute('data-zone') === zoneName);
            });

            // Sync guest count dropdown
            const peopleSelect = document.getElementById('res-people');
            if (peopleSelect && seats) {
                if (['1', '2', '3', '4', '6'].includes(seats)) {
                    peopleSelect.value = seats;
                } else if (parseInt(seats) >= 8) {
                    peopleSelect.value = '8+';
                }
            }

            if (tableInfoEl) {
                tableInfoEl.innerHTML = `Selected: <b class="text-danger">Table ${tableId}</b> in <b>${zoneName}</b> (Seats up to ${seats} Guests)`;
            }

            Toast.show(`Table ${tableId} locked in ${zoneName}!`, 'success');
        });
    });

    zoneTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            zoneTiles.forEach(t => t.classList.remove('active'));
            tile.classList.add('active');
            selectedZone = tile.getAttribute('data-zone');

            // Select first non-reserved table in this zone
            const firstTable = Array.from(tableNodes).find(n => n.getAttribute('data-zone') === selectedZone && !n.classList.contains('reserved'));
            if (firstTable) {
                tableNodes.forEach(n => n.classList.remove('selected'));
                firstTable.classList.add('selected');
                const tableId = firstTable.getAttribute('data-table');
                if (tableCodeInput) tableCodeInput.value = tableId;
                const seats = firstTable.getAttribute('data-seats');
                if (tableInfoEl) {
                    tableInfoEl.innerHTML = `Selected: <b class="text-danger">Table ${tableId}</b> in <b>${selectedZone}</b> (Seats up to ${seats} Guests)`;
                }
            }
        });
    });

    // Check if Tasting Tray items exist in localStorage
    const trayItems = TastingTrayService.getItems();
    if (trayItems.length > 0) {
        const totalTrayDishes = trayItems.reduce((acc, i) => acc + i.qty, 0);
        Toast.show(`Tasting Tray attached: ${totalTrayDishes} pre-ordered dish(es) will be prepared upon your arrival!`, 'gold', 5000);
    }

    // Auto-fill logged in user info
    const user = DataService.getCurrentUser();
    if (user) {
        const nameInput = document.getElementById('res-name');
        const emailInput = document.getElementById('res-email');
        const phoneInput = document.getElementById('res-phone');
        if (nameInput && !nameInput.value) nameInput.value = user.name || user.username;
        if (emailInput && !emailInput.value) emailInput.value = user.email || '';
        if (phoneInput && !phoneInput.value && user.phone) phoneInput.value = user.phone;
    }

    // Set today as minimum date
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        if (!dateInput.value) dateInput.value = today;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Securing Table...';

        const celebrationType = document.getElementById('res-celebration-type')?.value || 'None';
        const celebrationCake = document.getElementById('res-celebration-cake')?.value || 'None';
        const platterMsg = document.getElementById('res-platter-msg')?.value.trim() || '';
        const valet = document.getElementById('res-valet-switch')?.checked ?? true;
        const quiet = document.getElementById('res-quiet-switch')?.checked ?? false;
        const tableCode = tableCodeInput ? tableCodeInput.value : 'T-01';

        const reservationPayload = {
            name: document.getElementById('res-name').value.trim(),
            email: document.getElementById('res-email').value.trim(),
            phone: document.getElementById('res-phone').value.trim(),
            date: document.getElementById('res-date').value,
            time: document.getElementById('res-time').value,
            people: document.getElementById('res-people').value,
            zone: selectedZone,
            table: tableCode,
            celebrationType,
            celebrationCake,
            platterMsg,
            valet,
            quiet,
            requests: document.getElementById('res-requests').value.trim()
        };

        try {
            const confirmed = await DataService.addReservation(reservationPayload);
            showReservationVoucher(confirmed);
            form.reset();
            Toast.show(`Table Reserved! Voucher code: ${confirmed.code}`, 'success', 5000);
        } catch (err) {
            Toast.show('Reservation recorded in profile.', 'gold');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="bi bi-calendar-check me-1"></i> Confirm Table Reservation';
        }
    });

    function showReservationVoucher(res) {
        let modalEl = document.getElementById('vf-voucher-modal');
        if (!modalEl) {
            modalEl = document.createElement('div');
            modalEl.id = 'vf-voucher-modal';
            modalEl.className = 'modal fade';
            modalEl.tabIndex = -1;
            document.body.appendChild(modalEl);
        }

        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4 border-0 shadow-lg text-center p-4">
                    <div class="fs-1 text-success mb-2"><i class="bi bi-check-circle-fill"></i></div>
                    <span class="vf-badge-pill mx-auto mb-2">Reservation Confirmed</span>
                    <h3 class="fw-bold mb-1">Your Table Awaits</h3>
                    <p class="text-muted small mb-3">A digital dining pass has been linked to your VIP account.</p>

                    <div class="vf-ticket-pass mb-4">
                        <div class="small text-muted text-uppercase fw-bold mb-1">VIP Boarding Reference</div>
                        <div class="vf-ticket-code">${res.code}</div>
                        <div class="row g-2 text-start mt-2 small">
                            <div class="col-6">
                                <span class="text-muted d-block">Primary Guest:</span>
                                <b>${res.name}</b>
                            </div>
                            <div class="col-6">
                                <span class="text-muted d-block">Table / Space:</span>
                                <b class="text-danger">${res.table || 'T-01'} • ${res.zone}</b>
                            </div>
                            <div class="col-6">
                                <span class="text-muted d-block">Date & Time:</span>
                                <b>${res.date} at ${res.time}</b>
                            </div>
                            <div class="col-6">
                                <span class="text-muted d-block">Party Size:</span>
                                <b>${res.people} Guest(s)</b>
                            </div>
                            <div class="col-6">
                                <span class="text-muted d-block">Valet Parking:</span>
                                <b>${res.valet ? 'Priority Car Drop-Off' : 'Standard'}</b>
                            </div>
                            <div class="col-6">
                                <span class="text-muted d-block">Celebration:</span>
                                <b>${res.celebrationType && res.celebrationType !== 'None' ? res.celebrationType : 'Standard Repast'}</b>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center gap-2 flex-wrap">
                        <button type="button" class="btn btn-vf-primary" onclick="window.print()">
                            <i class="bi bi-printer-fill me-1"></i> Print / Save VIP Pass
                        </button>
                        <a href="profile.html" class="btn btn-vf-outline">View in Profile</a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        `;

        const bsModal = new bootstrap.Modal(modalEl);
        bsModal.show();
    }
}

// --- 9. REVIEWS PAGE CONTROLLER ---
function initReviewsPage() {
    const feed = document.getElementById('reviews-feed');
    if (!feed) return;

    const form = document.getElementById('submit-review-form');
    const starBtns = document.querySelectorAll('.vf-star-rating .vf-star-btn');
    let selectedRating = 5;

    starBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const val = parseInt(btn.getAttribute('data-star'));
            starBtns.forEach(b => {
                const bVal = parseInt(b.getAttribute('data-star'));
                b.style.color = bVal <= val ? '#ffc107' : '#d1d5db';
            });
        });

        btn.addEventListener('mouseleave', () => {
            starBtns.forEach(b => {
                const bVal = parseInt(b.getAttribute('data-star'));
                b.style.color = bVal <= selectedRating ? '#ffc107' : '#d1d5db';
            });
        });

        btn.addEventListener('click', () => {
            selectedRating = parseInt(btn.getAttribute('data-star'));
            starBtns.forEach(b => {
                const bVal = parseInt(b.getAttribute('data-star'));
                b.classList.toggle('active', bVal <= selectedRating);
            });
        });
    });

    let allReviewsCache = [];
    let activeSentiment = 'all';
    let searchQuery = '';

    function filterAndRenderReviews() {
        let filtered = [...allReviewsCache];

        if (activeSentiment === '5') {
            filtered = filtered.filter(r => Number(r.rating) === 5);
        } else if (activeSentiment === 'celebration') {
            filtered = filtered.filter(r => {
                const txt = (r.text || '').toLowerCase();
                return txt.includes('anniversary') || txt.includes('celebrat') || txt.includes('birthday') || txt.includes('milestone');
            });
        } else if (activeSentiment === 'food') {
            filtered = filtered.filter(r => {
                const txt = (r.text || '').toLowerCase();
                return txt.includes('butter') || txt.includes('chicken') || txt.includes('korma') || txt.includes('pizza') || txt.includes('paneer') || txt.includes('dish') || txt.includes('flavor');
            });
        } else if (activeSentiment === 'ambiance') {
            filtered = filtered.filter(r => {
                const txt = (r.text || '').toLowerCase();
                return txt.includes('ambian') || txt.includes('terrace') || txt.includes('lighting') || txt.includes('service') || txt.includes('staff');
            });
        }

        if (searchQuery) {
            filtered = filtered.filter(r => {
                const txt = (r.text || '').toLowerCase();
                const user = (r.username || '').toLowerCase();
                return txt.includes(searchQuery) || user.includes(searchQuery);
            });
        }

        if (filtered.length === 0) {
            feed.innerHTML = `
                <div class="col-12 text-center py-5 text-muted">
                    <div class="display-6 mb-2"><i class="bi bi-chat-square-dots"></i></div>
                    <h5 class="fw-bold mb-1">No Reviews Found</h5>
                    <p class="small mb-0">Try clearing your search query or selecting 'All Reviews'.</p>
                </div>
            `;
            return;
        }

        feed.innerHTML = filtered.map(r => `
            <div class="col-md-6 mb-4">
                <div class="vf-card p-4">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="rounded-circle bg-danger-subtle text-danger fw-bold d-flex align-items-center justify-content-center" style="width:44px; height:44px; font-size:1.1rem;">
                            ${(r.username || 'G').charAt(0).toUpperCase()}
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="fw-bold mb-0">${r.username || 'Anonymous Diner'}</h6>
                            <span class="text-muted small">${r.date || 'Recent Visit'}</span>
                        </div>
                        <div class="text-warning small">
                            ${'<i class="bi bi-star-fill"></i>'.repeat(Number(r.rating) || 5)}
                        </div>
                    </div>
                    <p class="text-muted small mb-0 fst-italic">"${r.text}"</p>
                </div>
            </div>
        `).join('');
    }

    async function loadReviews() {
        allReviewsCache = await DataService.getReviews();
        filterAndRenderReviews();
    }

    // Search Input Listener
    const searchInput = document.getElementById('review-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterAndRenderReviews();
        });
    }

    // Sentiment Filter Pills Listener
    const sentimentPills = document.querySelectorAll('#review-sentiment-pills .vf-filter-pill');
    sentimentPills.forEach(pill => {
        pill.addEventListener('click', () => {
            sentimentPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeSentiment = pill.getAttribute('data-sentiment');
            filterAndRenderReviews();
        });
    });

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const textInput = document.getElementById('review-text');
            const nameInput = document.getElementById('review-author-name');
            const user = DataService.getCurrentUser();

            const author = (nameInput && nameInput.value.trim()) || (user ? user.name : 'Anonymous Gourmet');
            const text = textInput.value.trim();

            if (!text) return;

            await DataService.addReview({
                username: author,
                rating: selectedRating,
                text
            });

            Toast.show('Thank you! Your dining review has been posted.', 'success');
            textInput.value = '';
            loadReviews();
        });
    }

    loadReviews();
}

// --- 10. AUTH PAGE CONTROLLER ---
function initAuthPage() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (!loginForm && !registerForm) return;

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const u = document.getElementById('login-username').value.trim();
            const p = document.getElementById('login-password').value;
            const btn = loginForm.querySelector('button[type="submit"]');

            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Verifying...';

            try {
                await DataService.login(u, p);
                Toast.show(`Welcome back, ${u}! Redirecting...`, 'success');
                setTimeout(() => window.location.href = 'profile.html', 800);
            } catch (err) {
                Toast.show(err.message || 'Login failed. Please check credentials.', 'error');
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="bi bi-box-arrow-in-right me-1"></i> Sign In to VIP Portal';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const username = document.getElementById('reg-username').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;
            const phone = document.getElementById('reg-phone') ? document.getElementById('reg-phone').value.trim() : '';
            const btn = registerForm.querySelector('button[type="submit"]');

            if (password !== confirm) {
                Toast.show('Passwords do not match.', 'error');
                return;
            }

            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Creating...';

            try {
                await DataService.register(name, email, username, password, phone);
                await DataService.login(username, password);
                Toast.show('Account created! Welcome to The Velvet Fork.', 'success');
                setTimeout(() => window.location.href = 'profile.html', 800);
            } catch (err) {
                Toast.show(err.message || 'Registration failed.', 'error');
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="bi bi-person-plus me-1"></i> Create VIP Account';
            }
        });
    }
}

// --- 11. PROFILE DASHBOARD CONTROLLER ---
function initProfilePage() {
    const dashboard = document.getElementById('profile-dashboard');
    if (!dashboard) return;

    let user = DataService.getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Populate Hero Details
    const nameEl = document.getElementById('profile-display-name');
    const emailEl = document.getElementById('profile-display-email');
    const pointsEl = document.getElementById('profile-points-val');
    const avatarImg = document.getElementById('profile-avatar-img');

    if (nameEl) nameEl.textContent = user.name || user.username;
    if (emailEl) emailEl.textContent = user.email || 'member@velvetfork.com';
    if (pointsEl) pointsEl.textContent = `${user.points || 0} pts`;
    if (avatarImg) avatarImg.src = user.avatar || 'pics/profile.jpg';

    // Avatar Upload Handler
    const avatarInput = document.getElementById('avatar-file-input');
    if (avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (uploadEvt) => {
                    const base64Img = uploadEvt.target.result;
                    avatarImg.src = base64Img;
                    DataService.updateUserProfile({ avatar: base64Img });
                    Toast.show('Profile portrait updated!', 'success');
                    initGlobalNavigation();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Render Reservations
    function renderReservations() {
        const container = document.getElementById('profile-reservations-list');
        if (!container) return;

        const reservations = DataService.getReservations(user.username);
        if (reservations.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <div class="display-4 text-muted mb-3"><i class="bi bi-calendar-x"></i></div>
                    <h5 class="fw-bold mb-2">No Active Reservations</h5>
                    <p class="text-muted small mb-3">You do not have any table bookings scheduled at this time.</p>
                    <a href="reservation.html" class="btn btn-sm btn-vf-primary">Book a Table</a>
                </div>
            `;
            return;
        }

        container.innerHTML = reservations.map(r => `
            <div class="vf-card p-4 mb-3">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                            <span class="badge bg-danger-subtle text-danger fw-bold">${r.code || `VF-${r.id}`}</span>
                            <span class="badge bg-success-subtle text-success fw-bold">${r.status || 'Confirmed'}</span>
                        </div>
                        <h5 class="fw-bold mb-1">${r.zone || 'Grand Dining Salon'} • ${r.people} Guest(s)</h5>
                        <span class="text-muted small">Date: <b>${r.date}</b> at <b>${r.time}</b></span>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-outline-danger cancel-res-btn py-1 px-3" data-id="${r.id}">
                            Cancel Booking
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.cancel-res-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const resId = btn.getAttribute('data-id');
                if (confirm('Are you sure you wish to cancel this booking?')) {
                    DataService.cancelReservation(resId);
                    Toast.show('Booking cancelled.', 'gold');
                    renderReservations();
                }
            });
        });
    }

    // Render Favorites
    function renderFavorites() {
        const container = document.getElementById('profile-favorites-grid');
        if (!container) return;

        const favIds = DataService.getFavorites();
        const favDishes = MENU_CATALOG.filter(d => favIds.includes(d.id));

        if (favDishes.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="display-4 text-muted mb-3"><i class="bi bi-heart"></i></div>
                    <h5 class="fw-bold mb-2">No Saved Dishes</h5>
                    <p class="text-muted small mb-3">Explore our culinary catalog and tap the heart icon to save favorite dishes.</p>
                    <a href="menu.html" class="btn btn-sm btn-vf-primary">Explore Menu</a>
                </div>
            `;
            return;
        }

        container.innerHTML = favDishes.map(dish => `
            <div class="col-sm-6 col-lg-4 mb-3">
                <div class="vf-card">
                    <div class="vf-card-img-wrap" style="height:150px;">
                        <img src="${dish.img}" alt="${dish.title}">
                        <button class="vf-fav-btn favorited" data-fav-id="${dish.id}" title="Remove"><i class="bi bi-heart-fill"></i></button>
                    </div>
                    <div class="card-body p-3 d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <h6 class="fw-bold mb-0 text-truncate">${dish.title}</h6>
                            <span class="vf-price small">₹${dish.price}</span>
                        </div>
                        <a href="reservation.html" class="btn btn-sm btn-vf-outline w-100 mt-2 py-1">Reserve</a>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.vf-fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dishId = btn.getAttribute('data-fav-id');
                DataService.toggleFavorite(dishId);
                Toast.show('Dish removed from favorites.', 'gold');
                renderFavorites();
            });
        });
    }

    // Settings Form
    const settingsForm = document.getElementById('account-settings-form');
    if (settingsForm) {
        const emailInput = document.getElementById('settings-email');
        const nameInput = document.getElementById('settings-name');
        const phoneInput = document.getElementById('settings-phone');

        if (emailInput) emailInput.value = user.email || '';
        if (nameInput) nameInput.value = user.name || user.username;
        if (phoneInput) phoneInput.value = user.phone || '';

        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const updateData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim()
            };
            const pwd = document.getElementById('settings-password').value;
            if (pwd && pwd.length >= 4) {
                updateData.password = pwd;
            }

            DataService.updateUserProfile(updateData);
            Toast.show('Profile updated successfully!', 'success');
            setTimeout(() => window.location.reload(), 700);
        });
    }

    renderReservations();
    renderFavorites();
}

// --- 12. AMBIENT LOUNGE ATMOSPHERE SYNTHESIZER ---
function initAmbientAudio() {
    const playBtn = document.getElementById('vf-audio-toggle');
    const waveEl = document.getElementById('vf-audio-wave');
    const iconEl = document.getElementById('vf-audio-icon');
    if (!playBtn) return;

    class WebAudioLoungeSynth {
        constructor() {
            this.ctx = null;
            this.isPlaying = false;
            this.timer = null;
            this.chords = [
                [261.63, 329.63, 392.00, 493.88], // Cmaj7
                [220.00, 261.63, 329.63, 392.00], // Am7
                [146.83, 220.00, 261.63, 349.23], // Dm7
                [196.00, 246.94, 293.66, 349.23]  // G7
            ];
            this.idx = 0;
        }

        toggle() {
            if (this.isPlaying) {
                this.stop();
            } else {
                this.start();
            }
            return this.isPlaying;
        }

        start() {
            try {
                if (!this.ctx) {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    this.ctx = new AudioCtx();
                }
                if (this.ctx.state === 'suspended') {
                    this.ctx.resume();
                }
                this.isPlaying = true;
                this.playPad();
                this.timer = setInterval(() => this.playPad(), 4500);
            } catch (e) {
                console.warn('AudioContext unavailable:', e);
            }
        }

        playPad() {
            if (!this.isPlaying || !this.ctx) return;
            const chord = this.chords[this.idx % this.chords.length];
            this.idx++;

            chord.forEach(freq => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(450, this.ctx.currentTime);

                gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 1.2);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.2);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + 4.3);
            });
        }

        stop() {
            this.isPlaying = false;
            if (this.timer) clearInterval(this.timer);
            if (this.ctx && this.ctx.state === 'running') {
                this.ctx.suspend();
            }
        }
    }

    const synth = new WebAudioLoungeSynth();

    playBtn.addEventListener('click', () => {
        const isPlaying = synth.toggle();
        if (waveEl) waveEl.classList.toggle('vf-audio-playing', isPlaying);
        if (iconEl) {
            iconEl.className = isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill';
        }
        Toast.show(isPlaying ? '🎶 Atmosphere: Parisian Lounge playing' : 'Atmosphere muted.', 'gold');
    });
}

// --- 13. SIMULATED LUXURY AI CONCIERGE ---
function initAIConcierge() {
    const toggleBtn = document.getElementById('vf-concierge-toggle');
    const windowEl = document.getElementById('vf-concierge-window');
    const closeBtn = document.getElementById('vf-concierge-close');
    const form = document.getElementById('vf-concierge-form');
    const input = document.getElementById('vf-concierge-input');
    const messagesEl = document.getElementById('vf-chat-messages');

    if (!toggleBtn || !windowEl) return;

    toggleBtn.addEventListener('click', () => {
        windowEl.classList.toggle('open');
        if (windowEl.classList.contains('open') && input) {
            input.focus();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            windowEl.classList.remove('open');
        });
    }

    function addMessage(text, isUser = false) {
        if (!messagesEl) return;
        const bubble = document.createElement('div');
        bubble.className = `vf-msg-bubble ${isUser ? 'vf-msg-user' : 'vf-msg-bot'}`;
        bubble.textContent = text;
        messagesEl.appendChild(bubble);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function generateResponse(query) {
        const q = query.toLowerCase();
        if (q.includes('wine') || q.includes('drink') || q.includes('pair')) {
            return "Our Executive Chef and Sommelier recommend pairing our signature Velvet Butter Chicken with Reserve Pinot Noir (16°C), or our Quattro Formaggi Sourdough with a Belgian Crafted Draught Ale.";
        }
        if (q.includes('veg') || q.includes('paneer') || q.includes('diet')) {
            return "We take immense pride in our pure vegetarian creations, especially the Shahi Paneer Artisanal slow-cooked with saffron, Truffle Fettuccine Alfredo, and Charred Kadai Paneer.";
        }
        if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('valet')) {
            return "The Velvet Fork welcomes connoisseurs daily from 11:00 AM to 11:30 PM. Complimentary valet parking is provided at our main boulevard entrance in Alpha 2, Greater Noida.";
        }
        if (q.includes('book') || q.includes('reserv') || q.includes('table') || q.includes('seat')) {
            return "You can select your exact table in the Grand Salon, Window Alcove, or Romantic Terrace directly from our Book a Table page! Immediate VIP passes are provided.";
        }
        if (q.includes('chef') || q.includes('owner') || q.includes('anurag')) {
            return "The Velvet Fork was founded and is led by Executive Chef Anurag Jha, dedicated to bringing Michelin-grade Indian gastronomy and global culinary mastery together.";
        }
        return "Delighted to assist you. You can ask me about wine pairings, dietary options, valet services, our table booking floor plan, or chef's secret specials!";
    }

    // Chips
    document.querySelectorAll('.vf-prompt-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const prompt = chip.textContent.replace(/^[^\w\s]+/, '').trim();
            addMessage(prompt, true);
            setTimeout(() => {
                const reply = generateResponse(prompt);
                addMessage(reply, false);
            }, 300);
        });
    });

    // Form Submit
    if (form && input) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;
            addMessage(text, true);
            input.value = '';

            setTimeout(() => {
                const reply = generateResponse(text);
                addMessage(reply, false);
            }, 350);
        });
    }
}

// --- 14. BOOTSTRAP DISPATCHER ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initGlobalNavigation();
    initAmbientAudio();
    initAIConcierge();

    const path = window.location.pathname;
    if (path.endsWith('menu.html')) {
        initMenuPage();
    } else if (path.endsWith('reservation.html')) {
        initReservationPage();
    } else if (path.endsWith('reviews.html')) {
        initReviewsPage();
    } else if (path.endsWith('login.html')) {
        initAuthPage();
    } else if (path.endsWith('profile.html')) {
        initProfilePage();
    }
});

