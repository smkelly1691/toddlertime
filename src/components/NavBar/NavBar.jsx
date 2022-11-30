import './NavBar.css';
import { Link } from 'react-router-dom';



export default function NavBar() {

    return (
        <nav>
            <div className="NavBar">
                <div>
                    <Link 
                        to="/activityPlans/new" 
                    >NEW PLAN
                    </Link>
                    <Link
                        to="/activityPlans" 
                    >
                    MY PLANS
                    </Link>
                </div>
            </div>
        </nav>
    );
}