export { UserDetail };

function UserDetail({ user, onClickBack }) {
  const {
    firstName,
    lastName,
    details: { about, hobby, skills },
    active,
  } = user;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="profile">
            {!active && <div className="alert alert-danger">Inactive</div>}
            <button className="button" onClick={onClickBack}>
              x
            </button>
            <h2>
              {firstName} {lastName}
            </h2>
            <h2>
              <p>
                <strong>About: </strong>
                {about}
              </p>
              <p>
                <strong>Hobby: </strong>
                {hobby}
              </p>
              <p>
                <strong>Skills: </strong>
                {skills.join(", ")}
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
