import { useNavigate } from "react-router-dom";
import { GridComponent } from "../components/GridComponent";
import { UserStat } from "../components/UserStat";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions";

function HomePage() {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function toggleActiveRow(id, value) {
    dispatch(updateUser(id, { active: value }));
  }

  function handleOnClick(id) {
    navigate(`/users/${id}`);
  }

  return (
    <GridComponent
      records={users}
      toggleActiveRow={toggleActiveRow}
      onClickRow={handleOnClick}
    >
      <UserStat users={users} />
    </GridComponent>
  );
}

export { HomePage };
