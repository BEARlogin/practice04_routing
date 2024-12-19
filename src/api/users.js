export async function fetchUsers() {
  fetchUsers.loading = true;
  const res = await fetch("http://localhost:4730");
  fetchUsers.loaded = true;
  fetchUsers.loading = false;
  return await res.json();
}
