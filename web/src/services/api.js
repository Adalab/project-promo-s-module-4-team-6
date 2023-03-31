const dataApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(response => response.json())

}

const listProjectsApi = () => {

  return fetch('//localhost:4000/api/projects/all')
    .then(response => response.json())
    .then(data => {
      return data.projects;
    });
};

const api = { dataApi, listProjectsApi };
export default api;