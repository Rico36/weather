

export default async function apiFetch(...args) {
  const res = await fetch(...args);
  const json = await res.json();
  return json;

}
