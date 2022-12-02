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
                    <div>
                        <p><b>PLAN  | COMPLETE</b></p>
                        <hr />
                    </div>
                    :
                    <div className="newplan">
                        <p>NEW PLAN</p>
                        <hr />
                    </div>
                }
                <div>
                    <p>{new Date(activityPlan.startDate).toLocaleDateString()}</p>
                </div>
            </div>
            <div className="planItems">
                {planItems.length ?
                    <>
                        <div>{planItems}</div>
                        <section className="activityplan-footer">
                            {activityPlan.isComplete ?
                                <button onClick={() => window.location.reload()}>START NEW PLAN</button>
                                :
                                <button
                                    className="save-btn"
                                    onClick={handleMarkCompleted}
                                    disabled={!planItems.length}
                                >DONE
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