import './PlanItem.css'

export default function PlanItem({ planItem }) {
    return (
        <div className="PlanItem">
                <div>
                    <span>{planItem.activity.name}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{planItem.activity.duration} min</span>
                </div>
        </div>
    )
}