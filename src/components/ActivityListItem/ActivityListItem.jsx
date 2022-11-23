export default function ActivityListItem({ planItem }) {
    return (
        <div className="ActivityListItem">
            <h3 className="name">Name: {planItem.name}&nbsp;</h3>
            <h3 className="duration">&nbsp; | &nbsp; Duration: {planItem.duration} minutes</h3>
            <button className="btn-sm">DETAILS</button>
            <button className="btn-sm">ADD TO PLAN</button>
        </div>
    );
}