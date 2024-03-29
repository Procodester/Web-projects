// Import the CSS file that contains styles for the logo component
import "./logo.css"

// Define the Logo functional component
function Logo() {
    // Return JSX representing the logo
    return (
        <div className="logo">
            {/* Logo image */}
            <img src="./dice-6.svg" alt="Dice-Logo" className="logo-img" />

            {/* Container for logo text */}
            <div>
                <p className="logo-text">Roll a</p>
                <p className="logo-text">Dice</p>
            </div>
        </div>
    )
}


export default Logo