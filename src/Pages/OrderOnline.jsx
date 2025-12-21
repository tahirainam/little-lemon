import '../css/OrderOnline.css';

function OrderOnline() {
    return (
        <div className="order-container">
            {/* Page Header */}
            <h1 className="order-title">Order Online</h1>
            <p className="order-tagline">
                Fresh Mediterranean dishes delivered to your door
            </p>

            {/* Starters */}
            <section className="order-section">
                <h2>Starters</h2>
                <div className="order-items">
                    <div className="order-card">
                        <h3>Hummus</h3>
                        <p>Creamy chickpea dip with olive oil</p>
                        <span>$5</span>
                        <button>Add to Cart</button>
                    </div>

                    <div className="order-card">
                        <h3>Lemon Garlic Shrimp</h3>
                        <p>Sautéed shrimp with lemon zest</p>
                        <span>$8</span>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Main Courses */}
            <section className="order-section">
                <h2>Main Courses</h2>
                <div className="order-items">
                    <div className="order-card">
                        <h3>Mediterranean Pasta</h3>
                        <p>Penne pasta with feta and olives</p>
                        <span>$10</span>
                        <button>Add to Cart</button>
                    </div>

                    <div className="order-card">
                        <h3>Grilled Chicken Salad</h3>
                        <p>Fresh greens with lemon dressing</p>
                        <span>$12</span>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Desserts */}
            <section className="order-section">
                <h2>Desserts</h2>
                <div className="order-items">
                    <div className="order-card">
                        <h3>Lemon Tart</h3>
                        <p>Tangy lemon tart with fresh zest</p>
                        <span>$6</span>
                        <button>Add to Cart</button>
                    </div>

                    <div className="order-card">
                        <h3>Baklava</h3>
                        <p>Sweet pastry with honey and nuts</p>
                        <span>$5</span>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OrderOnline;
