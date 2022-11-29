import './ActivityListItem.css'

export default function ActivityListItem({ planItem, handleAddToPlan }) {
    return (
        <div className="ActivityListItem">
            <div className="list-item">
                <h4>Name: <span className="name">{planItem.name}</span></h4>
                <h4>&nbsp; | &nbsp; Duration: <span className="duration">{planItem.duration} minutes</span></h4>
            </div>
            <div className="buttons">
                <button>DETAILS</button>
                &nbsp;&nbsp;
                <button onClick={() => handleAddToPlan(planItem._id)}>ADD TO PLAN</button>
            </div>
        </div>
    );
}