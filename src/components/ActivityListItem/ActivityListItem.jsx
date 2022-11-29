import './ActivityListItem.css'

export default function ActivityListItem({ planItem, handleAddToPlan }) {
    return (
        <div className="ActivityListItem">
            <div className="list-item">
                <h4>Name: <span className="name">{planItem.name}&nbsp;</span></h4>
                <h4>&nbsp; | &nbsp; Duration: <span className="duration">{planItem.duration} minutes</span></h4>
            </div>
            <button className="btn-sm">DETAILS</button>
            <button className="btn-sm" onClick={() => handleAddToPlan(planItem._id)}>ADD TO PLAN</button>
        </div>
    );
}