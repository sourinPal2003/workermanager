import React, { useState } from 'react'
import { useOperation } from '../contexts/OperationContext'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function AddWork() {
  const { addWork } = useOperation();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [company, setCompany] = useState('');
  const [workId] = useState(nanoid(8));

  const handleSubmit = (e) => {
    e.preventDefault();
    addWork({
      id: workId,
      title,
      duration,
      budget,
      company
    });
    setTitle('');
    setDuration('');
    setBudget('');
    setCompany('');
    navigate('..');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 mt-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Work Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Fill the details for the new work assignment.</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Work Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                Work Duration (days)
              </label>
              <div className="mt-2">
                <input
                  id="duration"
                  name="duration"
                  type="number"
                  min="1"
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="budget" className="block text-sm font-medium leading-6 text-gray-900">
                Work Budget
              </label>
              <div className="mt-2">
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  min="0"
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Work ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={workId}
                  disabled
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddWork
