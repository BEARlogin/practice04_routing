export async function fetchUsers() {
  const res = await fetch("http://localhost:4730");
  fetchUsers.loaded = true;
  return await res.json();
}
