import './ActivityPlanListItem.css';

export default function ActivityPlanListItem({ activityPlan }) {
    return (
        <div className="ActivityPlanListItem">
            <div className="list-item">
                <h4>Activity Plan ID: <span className="name">{activityPlan.planId}</span></h4>
                <h4>Start Date: <span className="date">{activityPlan.createdAt}</span></h4>
                <h4>Last Updated: <span className="date">{activityPlan.updatedAt}</span></h4>
                <h4>Activity Total: <span className="total">{activityPlan.totalQty}</span></h4>
                <h4>Total Duration: <span className="duration">{activityPlan.durationTotal} hours</span></h4>
            </div>
        </div>
    );
}