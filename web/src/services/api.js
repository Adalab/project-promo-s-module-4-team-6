const serverPort = process.env.PORT || 4001;
const serverUrl = process.env.NODE_ENV === 'production' ? 'https://proyectos-molones-team-6.onrender.com/' : `http://localhost:${serverPort}`;

console.log('-----------serverURL---------------', serverUrl)

const dataApi = (data) => {
  return fetch(`${serverUrl}/api/projects/add`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(response => response.json())

}

const listProjectsApi = () => {
  return fetch(`${serverUrl}/api/projects/all`)
    .then(response => response.json())
    .then(data => {
      return data.projects;
    });
};

const api = { dataApi, listProjectsApi };
export default api;