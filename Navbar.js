"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                padding: "15px",
                backgroundColor: "#111",
            }}
        >
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
            <Link href="/register" style={{ color: "#fff", textDecoration: "none" }}>Register</Link>
        </nav>
    );
}
