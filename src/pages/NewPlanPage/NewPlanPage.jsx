import { useState, useEffect, useRef } from "react";
import './NewPlanPage.css'
import * as activitiesAPI from '../../utilities/activities-api';
import { Link } from 'react-router-dom';
import UserDetail from "../../components/UserDetail/UserDetail";
import Logo from "../../components/Logo/Logo";
import ActivityPlanList from "../../components/ActivityPlanList/ActivityPlanList";
import CategoryList from "../../components/CategoryList/CategoryList";
import ActivityList from "../../components/ActivityList/ActivityList";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import NavBar from "../../components/NavBar/NavBar";

export default function NewPlanPage({ user, setUser }) {
    const [planItems, setPlanItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getActivities() {
            const activities = await activitiesAPI.getAll();
            categoriesRef.current = [...new Set(activities.map(activity => activity.category.name))];
            setPlanItems(activities);
            setActiveCat(categoriesRef.current[0]);
        }
        getActivities();
    }, []);

    return (
        <main className="NewPlanPage">
            <header>
                <UserDetail user={user} />
                <Logo />
                <UserLogOut user={user} setUser={setUser} />
            </header>
            <div className="body">
                <aside>
                    <CategoryList 
                        categories={categoriesRef.current}
                        activeCat={activeCat}
                        setActiveCat={setActiveCat}
                    />
                    <NavBar />
                </aside>
                <ActivityList
                    planItems={planItems.filter(activity => activity.category.name === activeCat)}
                />
                <ActivityPlanList />
            </div>
            <footer>
                <span>Toddler Time</span>
                <span>© 2022 | Powered by React | All Rights Reserved</span>
            </footer>
        </main>
    );
}