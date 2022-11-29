import './ActivityPlanList.css'
import PlanItem from "../PlanItem/PlanItem";

export default function ActivityPlanList( { activityPlan }) {
    if (!activityPlan) return null;

    const planItems = activityPlan.planItems.map(activity =>
        <PlanItem
            planItem={activity}
            isComplete={activityPlan.isComplete}
            key={activity._id}
        />
    );

    return (
        <div className="ActivityPlanList">
            <div className="section-heading">
                <span>ACTIVITY PLAN</span>
                <span>  &nbsp;|&nbsp;</span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="planItems">
                {planItems.length ?
                    <>
                        {planItems}
                        <section className="total">
                            {activityPlan.isComplete ?
                                <span>TOTAL ACTIVITIES:&nbsp;&nbsp;</span>
                            :
                            <button
                                disabled={!planItems.length}
                            >MARK AS COMPLETE
                            </button>
                            }
                            <span>{activityPlan.totalQty}</span>
                            <span>${activityPlan.durationTotal.toFixed(2)}</span>
                        </section>
                    </>
                    :
                    <div className="empty">
                    No Items added to Plan
                    </div>
                }
            </div>
        </div>
    );
}