import './CategoryList.css'

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map(cat => 
        <li 
            key={cat} 
            className={cat === activeCat ? 'active' : ''}
            onClick={() => setActiveCat(cat)}
        >
            {cat}
        </li>
    );
    return (
        <main className="CategoryList">
            <h3>Categories</h3>
            <ul>
                {cats}
            </ul>
        </main>
    );
}