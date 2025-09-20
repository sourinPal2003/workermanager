import React from 'react';
import { useOperation } from '../contexts/OperationContext';
import { Link } from 'react-router-dom';

export default function AllWorks() {
  const { allWorks, allWorkers, deleteWork } = useOperation();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">All Works</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Work ID</th>
            <th className="border px-2 py-1">Title</th>
            <th className="border px-2 py-1">Duration</th>
            <th className="border px-2 py-1">Budget</th>
            <th className="border px-2 py-1">Company</th>
            <th className="border px-2 py-1">Assigned Employees</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allWorks.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-2">No works found</td>
            </tr>
          ) : (
            allWorks.map(work => {
              
              const assignedEmployees = allWorkers
                ? allWorkers.filter(emp => emp.workid === work.id)
                : [];
              return (
                <tr key={work.id}>
                  <td className="border px-2 py-1">{work.id}</td>
                  <td className="border px-2 py-1">{work.title}</td>
                  <td className="border px-2 py-1">{work.duration}</td>
                  <td className="border px-2 py-1">{work.budget}</td>
                  <td className="border px-2 py-1">{work.company}</td>
                  <td className="border px-2 py-1">
                    {assignedEmployees.length === 0
                      ? <span className="text-gray-400">None</span>
                      : assignedEmployees.map(emp => (
                          <span key={emp.id} className="inline-block mr-2">
                            <Link to={`/employee/${emp.id}`} className="text-blue-600 underline">
                              {emp.firstname} {emp.lastname}
                            </Link>
                          </span>
                        ))}
                  </td>
                  <td className="border px-2 py-1">
                    <Link
                      to={`/edit-work/${work.id}`}
                      className="text-blue-600 mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="text-red-600"
                      onClick={() => deleteWork(work.id)}
                    >Delete</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}