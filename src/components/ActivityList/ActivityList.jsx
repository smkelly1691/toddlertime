import ActivityListItem from "../ActivityListItem/ActivityListItem";
import './ActivityList.css'


export default function ActivityList({ planItems, handleAddToPlan }) {
    const activities = planItems.map(activity => 
        <ActivityListItem 
            key={activity._id}
            planItem={activity}
            handleAddToPlan={handleAddToPlan}
        />
    );
    return (
        <main className="ActivityList">
            {activities}
        </main>
    );
}