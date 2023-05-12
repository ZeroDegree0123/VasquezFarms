import "./Footer.css"

export default function Footer() {

    function handleHelp() {
        alert(`Coming Soon!`)
    }

    return (
        <>
            <footer className="footer-container">
                <section className="footer-contact-container">
                    <h1>Contact Info</h1>
                    <p className="footer-contact-info">123-456-7890</p>
                    <p className="footer-contact-info">vasquezfarms@gmail.com</p>
                    <p className="footer-contact-info">Winlock, WA</p>
                    <div className="footer-socials-container">
                        <p className="footer-socials">F</p>
                        <p className="footer-socials">I</p>
                        <p className="footer-socials">T</p>
                    </div>
                </section>
                <section className="footer-link-container">
                    <h1>Helpfull Links</h1>
                    <a className="footer-links" href="/" onClick={handleHelp}>HELP</a>
                    <a className="footer-links" href="/about">ABOUT</a>
                    <a className="footer-links" href="/ingredients">OUR INGREDIENTS</a>
                </section>
            </footer>
        </>
    )
}