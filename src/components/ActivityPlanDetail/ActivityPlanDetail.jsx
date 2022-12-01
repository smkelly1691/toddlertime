import './ActivityPlanDetail.css'
import PlanItem from "../PlanItem/PlanItem";

export default function ActivityPlanDetail({ activityPlan, handleMarkCompleted, handleDeleteActivity }) {
    if (!activityPlan) return null;

    const planItems = activityPlan.planItems.map(activity =>
        <PlanItem
            planItem={activity}
            isComplete={activityPlan.isComplete}
            key={activity._id}
            handleDeleteActivity={handleDeleteActivity}
        />
    );

    return (
        <div className="ActivityPlanDetail">
            <div className="section-heading">
                {activityPlan.isComplete ?
                <div className="completed-heading">
                    <span>ACTIVITY PLAN: COMPLETE</span>
                </div>
                    :
                    <span>NEW ACTIVITY PLAN</span>
                }
                <span><br></br></span>
                <span>START DATE:</span>
                <span>{new Date(activityPlan.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="planItems">
                {planItems.length ?
                    <>
                        <h5>ACTIVITY &nbsp;&nbsp;&nbsp;&nbsp; DURATION</h5>
                        <div>{planItems}</div>
                        <section className="activityplan-footer">
                            {activityPlan.isComplete ?
                                <button onClick={() => window.location.reload()}>START NEW PLAN</button>
                                :
                                <button
                                    onClick={handleMarkCompleted}
                                    disabled={!planItems.length}
                                >SAVE
                                </button>
                                }
                                <hr />
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