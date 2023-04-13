const dataApi = (data) => {
  return fetch('https://proyectos-molones-team-6.onrender.com/api/projects/add',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(response => response.json())

}

const listProjectsApi = () => {
  return fetch('https://proyectos-molones-team-6.onrender.com/api/projects/all')
    .then(response => response.json())
    .then(data => {
      return data.projects;
    });
};

const api = { dataApi, listProjectsApi };
export default api;