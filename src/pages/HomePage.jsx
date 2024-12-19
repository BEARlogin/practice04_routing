import { useNavigate } from "react-router-dom";
import { GridComponent } from "../components/GridComponent";
import { UserStat } from "../components/UserStat";
import { useUsersStore } from "../zustand/users";

function HomePage() {
  const users = useUsersStore((state) => state.users);
  const navigate = useNavigate();

  function toggleActiveRow(id, value) {
    useUsersStore.getState().userUpdate(id, { active: value });
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
