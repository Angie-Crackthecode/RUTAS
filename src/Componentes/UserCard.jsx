export function UserCard({ imageLink, fullName, position }) {
  return (
    <div className="user-card">
      <img src={imageLink} alt={fullName} />
      <h3>{fullName}</h3>
      <h4>{position}</h4>
    </div>
  );
}
