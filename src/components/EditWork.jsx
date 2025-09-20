import React, { useState, useEffect } from 'react';
import { useOperation } from '../contexts/OperationContext';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function EditWork() {
  const { allWorks, addWork, updateWork } = useOperation();
  const navigate = useNavigate();
  const { workId } = useParams();

  const isEdit = !!workId;
  const existingWork = isEdit ? allWorks.find(w => w.id === workId) : null;

  const [title, setTitle] = useState(existingWork ? existingWork.title : '');
  const [duration, setDuration] = useState(existingWork ? existingWork.duration : '');
  const [budget, setBudget] = useState(existingWork ? existingWork.budget : '');
  const [company, setCompany] = useState(existingWork ? existingWork.company : '');
  const [workIdState] = useState(existingWork ? existingWork.id : nanoid(8));

  useEffect(() => {
    if (isEdit && !existingWork) {
      navigate('/all-works');
    }
  }, [isEdit, existingWork, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const workData = {
      id: workIdState,
      title,
      duration,
      budget,
      company
    };
    if (isEdit) {
      updateWork(workIdState, workData);
    } else {
      addWork(workData);
    }
    navigate('/all-works');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 mt-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">{isEdit ? 'Edit Work' : 'Add Work'}</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Work Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Work Duration (days)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Work Budget
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  min="0"
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  value={workIdState}
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
          {isEdit ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
}