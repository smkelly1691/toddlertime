import ActivityListItem from "../ActivityListItem/ActivityListItem";
import './ActivityList.css'


export default function ActivityList({ planItems, handleAddToPlan, handleDeleteActivity }) {
    const activities = planItems.map(activity => 
        <ActivityListItem 
            key={activity._id}
            planItem={activity}
            handleAddToPlan={handleAddToPlan}
            handleDeleteActivity={handleDeleteActivity}
        />
    );
    return (
        <main className="ActivityList">
            <div className="activity-list">
            {activities}
            </div>
        </main>
    );
}