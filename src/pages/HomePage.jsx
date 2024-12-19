import { useNavigate } from "react-router-dom";
import { GridComponent } from "../components/GridComponent";
import { UserStat } from "../components/UserStat";
import { useUsers } from "../hooks/users";

function HomePage() {
  const {users, update} = useUsers();
  const navigate = useNavigate();

  function toggleActiveRow(id, value) {
    update(id, { active: value });
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
