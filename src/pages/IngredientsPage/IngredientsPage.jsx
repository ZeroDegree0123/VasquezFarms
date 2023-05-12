import "./IngredientsPage.css"
import { Link } from "react-router-dom"

export default function IngredientsPage({user}) {
    return (
        <>
            <main className="ingredients-page-container">
            <section id="ingredients-subpage-header" className="subpage-header">
                <h1 className="subpage-header-title">Ingredients</h1>
                <div className="subpage-header-link-container">
                    <Link id="home-link" className="subpage-header-link-item" to="/">Home</Link>
                    <p id="special-character" className="subpage-header-link-item">&#62;</p>
                    <p className="subpage-header-link-item">Ingredients</p>
                    { user ?
                    <>
                        <p id="special-character" className="subpage-header-link-item">-</p>
                        <Link className="link" to="/orders/new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" id="cart" className="bi bi-cart" viewBox="0 0 17 17">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </Link>
                    </>
                    :
                    <></>
                    }
                </div>
            </section>
                <section className="ingredients-header-container">
                    <h1 className="ingredients-header-title">OUR INGREDIENTS</h1>
                    <p className="ingredients-header-subtitle">ALL NATURAL FROM THE EARTH</p>
                </section>
                <section className="ingredients-container">
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Goats Milk</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Gentle Cleanser | Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Goats Milk is higher in calories and saturated fat.
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Shea Butter</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Shea Butter helps soften and smooth skin, and can reduce the swelling
                                of skin. It is high in fatty acids and vitamins that make it the ideal 
                                ingredient for softing your skin.
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Avocado Oil</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Sun Blocker | Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Avocado Oil can help moisturize the skin and protect it from UV rays.
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Coconut Oil</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Antioxidant | Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Coconut Oil boosts the nutrients in your skin as well as antioxidants. 
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Olive Oil</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Skin Barrier | Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Olive oil not only moisturize's the skin but acts as a second barrier for
                                dry, cracked skin. Especially useful in cold weather.
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Palm Oil</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Skin Cooperative | Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Palm oil hydrates the skin and most importantly is useable for all 
                                skin types, even sensitive skin.
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Castor Oil</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Humectant | Natural Moisturizer</p>
                            <p className="ingredient-card-body">
                                Castor oil helps trap moisture into the skin keeping it hydrated. Promotes hydration.
                            </p>
                        </div>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-title">Lye</h2>
                        <hr className="ingredient-linebreak"/>
                        <div className="ingredient-card-body-container">
                            <p className="ingredient-card-body" id="ingredient-uses">Skin Cooperative | Cleanser</p>
                            <p className="ingredient-card-body">
                                Lye is cleanser for a majority of soaps and helps cleanse the skin of
                                dirt and grime. This ingredient will do no harm for skin.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}