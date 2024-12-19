import { fetchUsers } from "../../api/users";
import { loading, fetchUsersFulfilled, loaded } from "../actions";

export function fetchUsersThunk() {
  return (dispatch) => {
    if (fetchUsers.loaded || fetchUsers.loading) {
      return;
    }

    dispatch(loading());

    fetchUsers().then((res) => {
      const mappedUsers = res.gridRecords.map((user) => {
        const detail = res.detailsRecords.find(
          (detail) => detail.id === user.id
        );
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          active: user.active,
          details: {
            about: detail.about,
            hobby: detail.hobby,
            skills: detail.skills,
          },
        };
      });
      dispatch(fetchUsersFulfilled(mappedUsers));

      dispatch(loaded());
    });
  };
}
