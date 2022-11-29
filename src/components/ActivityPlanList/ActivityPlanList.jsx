import './ActivityPlanList.css'
import PlanItem from "../PlanItem/PlanItem";

export default function ActivityPlanList( { activityPlan, handleMarkCompleted }) {
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
                {activityPlan.isComplete ?
                    <span>ACTIVITY PLAN: <span>PLAN COMPLETE</span></span>
                    :
                    <span>NEW ACTIVITY PLAN</span>
                }
                <span>  &nbsp;|&nbsp;</span>
                <span>{new Date(activityPlan.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="planItems">
                {planItems.length ?
                    <>
                        <h5>ACTIVITY &nbsp;&nbsp;&nbsp;&nbsp; DURATION</h5>
                        <ul>{planItems}</ul>
                        <section className="total">
                            {activityPlan.isComplete ?
                                <span>TOTAL ACTIVITIES:&nbsp;&nbsp;</span>
                            :
                            <button
                                onClick={handleMarkCompleted}
                                disabled={!planItems.length}
                            >MARK AS COMPLETED
                            </button>
                            }
                            <div>Total Activities: {activityPlan.totalQty}</div>
                            <div>Total Duration: {activityPlan.durationTotal} Hours</div>
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