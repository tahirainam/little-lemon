import '../css/About.css';
function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                {/* Hero / Title */}
                <h1>About Little Lemon</h1>
                <p className="tagline">Fresh flavors, warm experiences</p>

                {/* Our Story */}
                <h2>Our Story</h2>
                <p>
                    Founded in 2022, Little Lemon brings fresh Mediterranean flavors to our neighborhood. 
                    Every dish is crafted to provide a memorable experience with care and quality.
                    Our mission is simple: to bring joy to every table through carefully crafted dishes made from the finest local ingredients. From our first recipe to our welcoming ambiance, everything is designed to make every visit a memorable experience.
                </p>

                {/* Mission / Values */}
                <h2>Our Mission</h2>
                <ul>
                    <li>Serve fresh, locally sourced ingredients</li>
                    <li>Provide a warm and welcoming atmosphere</li>
                    <li>Support sustainable practices and our community</li>
                </ul>

                {/* Team */}
                <h2>Meet the Team</h2>
                <ul>
                    <li>Jane Doe – Head Chef</li>
                    <li>John Smith – Co-founder</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
