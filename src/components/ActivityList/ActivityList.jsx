import ActivityListItem from "../ActivityListItem/ActivityListItem";

export default function ActivityList({ planItems, handleAddToPlan }) {
    const activities = planItems.map(activity => 
        <ActivityListItem 
            key={activity._id}
            planItem={activity}
            handleAddtoPlan={handleAddToPlan}
        />
    );
    return (
        <main className="ActivityList">
            {activities}
        </main>
    );
}