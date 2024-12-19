import { useNavigate } from "react-router-dom";
import { GridComponent } from "../components/GridComponent";
import { UserStat } from "../components/UserStat";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../redux/slices/users";

function HomePage() {
  const users = useSelector((state) => state.users.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function toggleActiveRow(id, value) {
    dispatch(userUpdate({id, data: {active: value } }));
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
