export default function PlanItem() {
    return (
        <div className="PlanItem">
            <div className="name">
                <span>{PlanItem.activity.name}</span>
            </div>
            <div className="duration">
                <span>{PlanItem.activity.duration} minutes</span>
            </div>
        </div>
    )
}