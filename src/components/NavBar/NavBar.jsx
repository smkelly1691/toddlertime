import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <div className="NavBar">
                <Link to="/activityplans">MY PLANS</Link>
                <Link to="/activityplans/new">NEW PLAN</Link>
            </div>
        </nav>
    );
}