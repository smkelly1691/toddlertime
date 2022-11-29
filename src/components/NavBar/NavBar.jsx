import './NavBar.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import NewPlanPage from '../../pages/NewPlanPage/NewPlanPage';
import PlanHistoryPage from '../../pages/PlanHistoryPage/PlanHistoryPage';



export default function NavBar(user, setUser) {

    return (
        <nav>
            <div className="NavBar">
                <div>
                    <Link 
                        to="/activityPlans/new" 
                        // element=<NewPlanPage user={user} setUser={setUser}
                    >NEW PLAN
                    </Link>
                    <Link
                        to="/activityPlans" 
                        // element=<PlanHistoryPage user={user} setUser={setUser}/>
                    >
                    MY PLANS
                    </Link>
                </div>
            </div>
        </nav>
    );
}