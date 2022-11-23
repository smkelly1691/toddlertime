import PlanItem from "../PlanItem/PlanItem";

export default function ActivityPlanList() {
    return (
        <div className="ActivityPlanList">
            <div className="section-heading">
                <span>ACTIVITY PLAN</span>
                <span>{new Date.now()}</span>
            </div>
            <div className="empty">
                No Items added to Plan
            </div>
        </div>
    );
}