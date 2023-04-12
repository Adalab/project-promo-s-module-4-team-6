const dataApi = (data) => {
  return fetch('http://localhost:4001/api/projects/add',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(response => response.json())

}

const listProjectsApi = () => {
  return fetch('http://localhost:4001/api/projects/all')
    .then(response => response.json())
    .then(data => {
      return data.projects;
    });
};

const api = { dataApi, listProjectsApi };
export default api;