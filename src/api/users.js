export async function fetchUsers() {
  fetchUsers.loading = true;
  const res = await fetch("http://localhost:4730");
  fetchUsers.loaded = true;
  fetchUsers.loading = false;
  return mapUsers(await res.json());
}

function mapUsers(res) {
  const mappedUsers = res.gridRecords.map((user) => {
    const detail = res.detailsRecords.find((detail) => detail.id === user.id);
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
  return mappedUsers;
}
