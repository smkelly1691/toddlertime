import './ActivityListItem.css'

export default function ActivityListItem({ planItem, handleAddToPlan }) {
    return (
        <div className="ActivityListItem">
            <div className="list-item">
                <table>
                    <tr>
                        <th>Activity Name</th>
                        <th>Activity Duration</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>{planItem.name}</td>
                        <td>{planItem.duration} minutes</td>
                        <td><button onClick={() => handleAddToPlan(planItem._id)}>ADD TO PLAN</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}