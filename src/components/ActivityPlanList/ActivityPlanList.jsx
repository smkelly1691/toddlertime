import './ActivityPlanList.css'
import ActivityPlanDetail from '../ActivityPlanDetail/ActivityPlanDetail';

export default function ActivityPlanList({ activityPlans, handleMarkCompleted }) {
    if (!activityPlans) return null;

    const activityPlanItems = activityPlans.activityPlanItems.map(activityPlans)
    return (
        <main className="ActivityPlanList">
        </main>
    )
}