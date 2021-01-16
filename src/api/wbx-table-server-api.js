export async function getTableDataApi() {
  let response;
  try {
    response = await fetch('https://wbx-table-server.herokuapp.com/api/table');
  } catch (error) {
    new Error(`Request failed! ${error}`);
  }

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json();
}
