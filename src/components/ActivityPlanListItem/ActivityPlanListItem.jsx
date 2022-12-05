import './ActivityPlanListItem.css';

export default function ActivityPlanListItem({ activityPlan }) {


    return (
        <div className="ActivityPlanListItem">
            <div className="list-item">
                <table className="activity-table">
                    <tr>
                        <th>Plan ID</th>
                        <th>Start Date</th>
                        <th>Completed</th>
                        <th>Activity Total</th>
                        <th>Total Duration</th>
                    </tr>
                    <tr>
                        <td>{activityPlan.planId}</td>
                        <td>{activityPlan.extStartDate}</td>
                        <td>{activityPlan.completeDate}</td>
                        <td>{activityPlan.totalQty}</td>
                        <td>{activityPlan.durationTotal} Hours</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}