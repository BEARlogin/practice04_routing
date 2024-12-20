import { useNavigate } from "react-router-dom";
import { GridComponent } from "../components/GridComponent";
import { UserStat } from "../components/UserStat";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function HomePage() {
  const { items: users, userUpdate } = useContext(UserContext);

  useEffect(() => { 

  },[users]);
  
  const navigate = useNavigate();
  function toggleActiveRow(id, value) {
    userUpdate(id, {active: value });
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
