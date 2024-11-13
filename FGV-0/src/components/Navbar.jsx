import './styles/navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
    const logoText = "Amadeus";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isResetting, setIsResetting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isResetting) return; // Prevent adding characters while resetting

            if (index < logoText.length) {
                // Add the next character to displayedText
                setDisplayedText((prev) => prev + logoText[index]);
                setIndex((prev) => prev + 1);
            } else {
                // Wait for 10 seconds after displaying the full word
                setIsResetting(true);
                setTimeout(() => {
                    // Reset the displayed text and index
                    setDisplayedText(".");
                    setIndex(0);
                    setIsResetting(false); // Allow adding characters again
                }, 10000);
            }
        }, 150); // Change character every 150ms

        return () => clearInterval(interval); // Clean up on unmount
    }, [index, isResetting]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev); // Toggle cursor visibility
        }, 500); // Blink every 500ms

        return () => clearInterval(cursorInterval); // Clean up on unmount
    }, []);


    //Return html navbar content
    return (
        <header className="header">
            <div className="navbar-container">
                <a href="/" className="logo">
                    {displayedText}
                    {showCursor && <span className="cursor">|</span>} {/* Blinking cursor */}
                </a>
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Services</a>
                    <a href="/">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;