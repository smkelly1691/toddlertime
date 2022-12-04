import './PlanItem.css'

export default function PlanItem({ planItem, handleDeleteActivity }) {
    return (
        <div className="PlanItem">
            <>
                <table>
                    <tbody>
                        <tr>
                            <td className="name">{planItem.activity.name}</td>
                            <td className="duration">{planItem.activity.duration} min</td>
                            <td className="button">
                                <button 
                                    onClick={() => handleDeleteActivity(planItem._id)}
                                >X
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        </div>
    )
}