import { useParams } from "react-router-dom";
import { UserDetail } from "../components/UserDetail";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const userDetailCandidate = useSelector(state => state.users.items.find(user => user.id === +id));

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
