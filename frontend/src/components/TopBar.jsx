export default function TopBar({ user }) {
  return (
    <div className="topbar">
      <span>{user.username}</span>
      <span>{user.field}</span>
      <span>Points: {user.points}</span>
    </div>
  );
}