import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main style={{ textAlign: "center", padding: "40px" }}>
                {/* Landing Section */}
                <section style={{ marginBottom: "60px" }}>
                    <h1>Welcome to MyCab</h1>
                    <p>
                        Welcome to myCAB, your premier choice for unparalleled transportation solutions. As a leading fleet rental company, we take pride in our recent expansion, acquiring a fleet of state-of-the-art vehicles dedicated to elevating your travel experience within Liberia with an extension to Sierra Leon.
                    </p>
                </section>

                {/* About Section */}
                <section id="about" style={{ marginBottom: "60px" }}>
                    <h2>About Us</h2>
                    <p>
                        At myCAB, we are committed to ensuring our clients not only enjoy the numerous benefits of our services but also experience unmatched comfort throughout their journey. Welcome aboard, where excellence in transportation meets your every expectation.
                    </p>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Email: support@mycab.com</p>
                    <p>Phone: +234-800-123-4567</p>
                </section>
            </main>
        </>
    );
}
