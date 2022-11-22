import { useState, useEffect } from "react";
import * as activitiesAPI from '../../utilities/activities-api'

export default function NewPlanPage() {
    const [planItems, setPlanItems] = useState([]);

    useEffect(function() {
        async function getActivities() {
            const activities = await activitiesAPI.getAll();
            setPlanItems(activities);
        }
        getItems();
    }, []);

    return (
        <>
            <h1>NewPlanPage</h1>
            <button onClick={() => setPlanItems(Date.now())}>Trigger re-render</button>
        </>
    );
}