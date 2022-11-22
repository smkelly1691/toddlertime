export default function UserDetail({ user }) {
    return (
        <div className="UserDetail">
            <div className="welcome">Welcome</div>
            <div>{user.name}</div>
            <div className="email">{user.email}</div>
        </div>
    );
}