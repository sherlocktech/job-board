import React from 'react';
import './App.css';

import Jobs from './Jobs';

import { IJob } from './model/IJob';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb: Function) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);
}

function App() {

  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={ jobList } />
    </div>
  );
}

export default App;
