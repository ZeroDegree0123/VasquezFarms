import "./IngredientsPage.css"

export default function IngredientsPage() {
    return (
        <>
            <main className="ingredients-page-container">
                <section className="ingredients-header-container">
                    <h1>ALL ABOUT OUR INGREDIENTS</h1>
                    <p>ALL NATURAL FROM THE EARTH</p>
                </section>
                <section className="ingredients-container">
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-body">ingredient title</h2>
                        <h4 className="ingredient-card-body">ingredient uses</h4>
                        <p className="ingredient-card-body">about it</p>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-body">ingredient title</h2>
                        <h4 className="ingredient-card-body">ingredient uses</h4>
                        <p className="ingredient-card-body">about it</p>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-body">ingredient title</h2>
                        <h4 className="ingredient-card-body">ingredient uses</h4>
                        <p className="ingredient-card-body">about it</p>
                    </div>
                    <div className="ingredient-card">
                        <h2 className="ingredient-card-body">ingredient title</h2>
                        <h4 className="ingredient-card-body">ingredient uses</h4>
                        <p className="ingredient-card-body">about it</p>
                    </div>
                </section>
            </main>
        </>
    )
}