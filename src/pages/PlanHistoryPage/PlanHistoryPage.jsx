import { useState, useEffect } from 'react';
import './PlanHistoryPage.css';
import * as activityPlansAPI from '../../utilities/activityPlans-api';
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import NavBar from "../../components/NavBar/NavBar";
import ActivityPlanList from '../../components/ActivityPlanList/ActivityPlanList';
import UserDetail from '../../components/UserDetail/UserDetail';

export default function PlanHistoryPage({ user, setUser }) {
    const [activityPlans, setActivityPlans] = useState([]);

    useEffect(function() {
        async function getActivityPlans() {
            const activityPlans = await activityPlansAPI.getActivityPlanHistory();
            setActivityPlans(activityPlans);
        }
        getActivityPlans();
    }, []);


    return (
        <main className="PlanHistoryPage">
            <header>
                <UserDetail user={user} />
                <Logo />
                <UserLogOut user={user} setUser={setUser} />
            </header>
            <div className="body">
                    <h2>ACTIVITY PLAN HISTORY</h2>
                    <div className="plans-list">
                    <ActivityPlanList 
                        activityPlans={activityPlans}
                    />
                    </div>
            </div>
            <footer>
                <span>Toddler Time</span>
                <span>© 2022 | Powered by React | All Rights Reserved</span>
            </footer>
        </main>
    );
}