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
            <div className="plan-heading">
                {activityPlan.isComplete ?
                    <p>ACTIVITY PLAN: COMPLETE</p>
                    :
                    <p className="newplan">NEW PLAN</p>
                }
                <p>START DATE: <span>{new Date(activityPlan.startDate).toLocaleDateString()}</span></p>
            </div>
            <div className="planItems">
                {planItems.length ?
                    <>
                    <section className="planList-heading">
                        <div>ACTIVITY</div>
                        <div>DURATION</div>
                    </section>
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
                    No Activities
                    </div>
                }
            </div>
        </div>
    );
}