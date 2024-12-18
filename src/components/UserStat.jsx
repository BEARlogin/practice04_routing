export { UserStat };

function UserStat({ users }) {
  return (
    <>
      <h2>User Stats</h2>
      <div>Active User count: {users.filter((f) => f.active).length}</div>
      <div>Full User count: {users.length}</div>
    </>
  );
}
