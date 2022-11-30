import './PlanHistoryPage.css'
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import UserDetail from "../../components/UserDetail/UserDetail";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import NavBar from "../../components/NavBar/NavBar";
import ActivityPlanDetail from '../../components/ActivityPlanDetail/ActivityPlanDetail';
import * as activityPlansAPI from '../../utilities/activityPlans-api';

export default function PlanHistoryPage({ user, setUser }) {

    return (
        <main className="PlanHistoryPage">
            <header>
                <UserDetail user={user} />
                <Logo />
                <UserLogOut user={user} setUser={setUser} />
            </header>
            <div className="body">
                <aside>
                    <NavBar />
                </aside>
                <div className="activityPlans-list">
                    <h2>ACTIVITY PLANS HISTORY</h2>
                    <div>
                        <ActivityPlanDetail />
                    </div>
                </div>
            </div>
            <footer>
                <span>Toddler Time</span>
                <span>© 2022 | Powered by React | All Rights Reserved</span>
            </footer>
        </main>
    )
}