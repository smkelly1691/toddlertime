import './ActivityPlanList.css';
import ActivityPlanListItem from '../ActivityPlanListItem/ActivityPlanListItem';

export default function ActivityPlanList({ activityPlans }) {
    const activityPlanListItems = activityPlans.map(ap =>
        <ActivityPlanListItem
            activityPlan={ap}
            key={ap._id}
        />
    );

    return (
        <main className="ActivityPlanList">
            {activityPlanListItems}
        </main>
    );
};