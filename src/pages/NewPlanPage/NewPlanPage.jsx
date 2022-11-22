import { useState, useEffect } from "react";

export default function NewPlanPage() {
    const [planItems, setPlanItems] = useState([]);

    useEffect(function() {
        console.log('NewPlanPage rendered');
    });

    useEffect(function() {
        console.log('useEffect runs when planItems changes');
    }, [planItems]);

    return (
        <>
            <h1>NewPlanPage</h1>
            <button onClick={() => setPlanItems(Date.now())}>Trigger re-render</button>
        </>
    );
}