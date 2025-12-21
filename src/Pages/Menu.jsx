import '../css/Menu.css';

function Menu() {
    return (
        <div className="menu-container">
            <h1 className="menu-title">Our Menu</h1>
            <p className="menu-tagline">Fresh Mediterranean flavors for every taste</p>

            {/* Starters */}
            <section className="menu-section">
                <h2>Starters</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        {/* add images */}
                        <h3>Hummus</h3>
                        <p>Creamy chickpea dip with olive oil and spices</p>
                        <span className="price">$5</span>
                    </div>
                    <div className="menu-item">
                        <h3>Lemon Garlic Shrimp</h3>
                        <p>Sauteed shrimp with garlic and lemon zest</p>
                        <span className="price">$8</span>
                    </div>
                </div>
            </section>

            {/* Main Courses */}
            <section className="menu-section">
                <h2>Main Courses</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <h3>Grilled Chicken Salad</h3>
                        <p>Fresh greens with grilled chicken and lemon dressing</p>
                        <span className="price">$12</span>
                    </div>
                    <div className="menu-item">
                        <h3>Mediterranean Pasta</h3>
                        <p>Penne pasta with olives, tomatoes, and feta cheese</p>
                        <span className="price">$10</span>
                    </div>
                </div>
            </section>

            {/* Desserts */}
            <section className="menu-section">
                <h2>Desserts</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <h3>Lemon Tart</h3>
                        <p>Tangy lemon tart with fresh zest</p>
                        <span className="price">$6</span>
                    </div>
                    <div className="menu-item">
                        <h3>Baklava</h3>
                        <p>Sweet pastry with nuts and honey</p>
                        <span className="price">$5</span>
                    </div>
                </div>
            </section>

            {/* Beverages */}
            <section className="menu-section">
                <h2>Beverages</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <h3>Fresh Lemonade</h3>
                        <p>Homemade with fresh lemons</p>
                        <span className="price">$3</span>
                    </div>
                    <div className="menu-item">
                        <h3>Mint Tea</h3>
                        <p>Traditional Moroccan mint tea</p>
                        <span className="price">$2</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Menu;
