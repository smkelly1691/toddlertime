import './PlanItem.css'

export default function PlanItem({ planItem, handleDeleteActivity }) {
    return (
        <div className="PlanItem">
            <>
                <table>
                    <tbody>
                        <tr>
                            <td>{planItem.activity.name}</td>
                            <td>{planItem.activity.duration} min</td>
                            <td><button onClick={() => handleDeleteActivity(planItem._id)}>X</button></td>
                        </tr>
                    </tbody>
                </table>
            </>
        </div>
    )
}