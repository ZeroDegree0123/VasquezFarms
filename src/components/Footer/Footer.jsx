import "./Footer.css"

export default function Footer() {
    return (
        <>
            <section className="footer-container">
                <div className="footer-help-container">
                    <a className="footer-titles" href="/">HELP</a>
                </div>
                <div className="footer-about-container">
                    <a className="footer-titles" href="/about">ABOUT</a>
                </div>
                <div className="footer-ingredients-container">
                    <a className="footer-titles" href="/ingredients">OUR INGREDIENTS</a>
                </div>
            </section>
        </>
    )
}