import { useState, useEffect, useRef } from "react";
import * as activitiesAPI from '../../utilities/activities-api'

export default function NewPlanPage() {
    const [planItems, setPlanItems] = useState([]);
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getActivities() {
            const activities = await activitiesAPI.getAll();
            categoriesRef.current = [...new Set(activities.map(activity => activity.category.name))];
            setPlanItems(activities);
        }
        getActivities();
    }, []);

    return (
        <>
            <h1>NewPlanPage</h1>
            <button onClick={() => setPlanItems(Date.now())}>Trigger re-render</button>
        </>
    );
}