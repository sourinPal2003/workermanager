import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ManageEmployees from './components/ManageEmployees';
import AddWork from './components/AddWork';
import AddEmployee from './components/AddEmployee';
import PendingState from './components/PendingState';
import CompleteState from './components/CompleteState';
import CancelState from './components/CancelState';
import AllEmployees from './components/AllEmployees'
import MainLayout from './components/MainLayout';
import AllWorks from './components/AllWorks';
import EditWork from './components/EditWork';

import './App.css'
import { useEffect, useState } from 'react'
import { OperationProvider } from './contexts/OperationContext'
import UpdateEmpDetails from './components/UpdateEmpDetails';





function App() {
  const [filteredWorkers, setFilteredWorkers] = useState([]);



  const [allWorkers, setAllWorkers] = useState([]);

  const addWorker = (worker) => {
    setAllWorkers([worker,...allWorkers]);
  }

  const updateWorkerDetails =(id, updatedWorker) => {
    setAllWorkers(allWorkers.map((worker) => worker.id === id ?{ ...worker, ...updatedWorker }: worker));
  }

  const deleteWorker = (id) => {
    setAllWorkers(allWorkers.filter((worker) => worker.id !== id));
  }

  const updateWorkstatus = (id, workstatus) => {
    setAllWorkers(allWorkers.map((worker) => worker.id === id ? {
      ...worker,
      workstatus,
      workid: "null",
      totalworkdone: (workstatus === "complete" ? worker.totalworkdone + 1 : worker.totalworkdone),
      progressRate: (workstatus === "complete" ? ((worker.totalworkdone + 1) / worker.totalAssignedwork)*100 : (worker.totalworkdone / worker.totalAssignedwork)*100)
    }
      : worker
    ));
  }

  const updateWorkid = (id, workid) => {
    setAllWorkers(allWorkers.map((worker) => worker.id === id ? { ...worker, workid, workstatus: "pending", totalAssignedwork: worker.totalAssignedwork + 1 } : worker));
  }

  // Work state and handlers
  const [allWorks, setAllWorks] = useState([]);

  const addWork = (work) => {
    setAllWorks([work, ...allWorks]);
  };

  const deleteWork = (id) => {
    setAllWorks(allWorks.filter((work) => work.id !== id));
  };

  const updateWork = (id, updatedWork) => {
    setAllWorks(allWorks.map((work) => work.id === id ? { ...work, ...updatedWork } : work));
  };

  useEffect(() => {
    const allWorksLocalData = JSON.parse(localStorage.getItem('allWorks'));
    if (allWorksLocalData && allWorksLocalData.length) {
      setAllWorks(allWorksLocalData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allWorks', JSON.stringify(allWorks));
  }, [allWorks]);

  useEffect(() => {
    const allWorkersLocalData = JSON.parse(localStorage.getItem('allWorkers'));
    if (allWorkersLocalData && allWorkersLocalData.length) {
      setAllWorkers(allWorkersLocalData);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('allWorkers', JSON.stringify(allWorkers));
  }, [allWorkers])
  return (
    <OperationProvider value={{
      allWorkers, setAllWorkers, addWorker, updateWorkerDetails, deleteWorker, updateWorkstatus, updateWorkid,
      filteredWorkers, setFilteredWorkers,
      allWorks, addWork, deleteWork, updateWork // <-- pass work handlers
    }}>
      {/* <Header/>
    <AddEmployee />
    <AllEmployees/> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<ManageEmployees />}>
              <Route path="" element={<AllEmployees />} />
              <Route path="pending" element={<PendingState />} />
              <Route path="complete" element={<CompleteState />} />
              <Route path="cancel" element={<CancelState />} />
            </Route>
            <Route path="add-work" element={<AddWork />} />
            <Route path="add-employee" element={<AddEmployee />} />
            <Route path="/employee/:idParam" element={<UpdateEmpDetails />} />
            <Route path="all-works" element={<AllWorks />} />
            <Route path="edit-work/:workId" element={<EditWork />} /> {/* <-- Add this route */}
          </Route>
        </Routes>
      </Router>

    </OperationProvider>
  )
}

export default App
