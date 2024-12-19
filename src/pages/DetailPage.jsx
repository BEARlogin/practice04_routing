import { useParams } from "react-router-dom";
import { UserDetail } from "../components/UserDetail";
import { useNavigate } from "react-router-dom";
import { useUsersStore } from "../zustand/users";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const userDetailCandidate = useUsersStore(state => state.users.find(user => user.id === +id));

  function onClickBack() {
    navigate(`/`);
  }


  return (
    <>
      {userDetailCandidate && (
        <UserDetail user={userDetailCandidate} onClickBack={onClickBack} />
      )}
      {!userDetailCandidate && (
        <div className="alert alert-danger">User with id={id} not found.</div>
      )}
    </>
  );
}

export { DetailPage };
