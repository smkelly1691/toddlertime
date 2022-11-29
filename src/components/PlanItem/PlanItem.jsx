export default function PlanItem({ planItem }) {
    return (
        <div className="PlanItem">
            <div className="name">
                <span>{planItem.activity.name}</span>
            </div>
            <div className="duration">
                <span>{planItem.activity.duration} minutes</span>
            </div>
        </div>
    )
}