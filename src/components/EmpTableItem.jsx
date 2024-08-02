import React, { useState } from 'react';
import { useOperation } from '../contexts/OperationContext';
import { Link } from 'react-router-dom';

export default function EmpTableItem({ worker, bannerWorkState }) {

    // Sample workId array
    const workIdDatas = ["A1B2C3", "D4E5F6", "G7H8I9", "J0K1L2", "M3N4O5", "P6Q7R8", "S9T0U1", "V2W3X4", "Y5Z6A7", "B8C9D0"];

    const { id, firstname, lastname, jobrole, progressRate, workid, totalworkdone,totalAssignedwork, workstatus } = worker;
    const { deleteWorker, updateWorkstatus, updateWorkid } = useOperation();
    const [workstatusHold, SetWorkstatusHold] = useState(workstatus);
    const [workidHold, SetWorkidHold] = useState(workid || "null");

    const editWorkstatus = (e) => {
        const newWorkstatus = e.target.value;
        updateWorkstatus(id, newWorkstatus);
        SetWorkstatusHold(newWorkstatus);
        SetWorkidHold("null");    //    
        // alert(`${firstname} ${lastname}'s Work status updated successfully`);
    };

    const editWorkid = (e) => {
        const newWorkid = e.target.value;
        updateWorkid(id, newWorkid);
        SetWorkidHold(newWorkid);  
        SetWorkstatusHold("pending");      
        // alert(`${firstname} ${lastname}'s Work id updated successfully`);
    };

    return (
        <tr className="border-t border-t-[#d0d7e7]">
            {bannerWorkState === "all" && (
                <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-120 h-[72px] px-4 py-2 w-[40px] text-[#4e6797] text-sm font-normal leading-normal text-center">
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={() => deleteWorker(id)}
                    >
                        ❌
                    </button>
                </td>
            )}

            <td  className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0e121b] text-sm font-normal leading-normal text-center">
                <Link to={`/employee/${id}`}>{firstname} {lastname} </Link>
            </td>

            <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal text-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7ebf3] text-[#0e121b] text-sm font-medium leading-normal w-full">
                    <span className="truncate">{jobrole}</span>
                </button>
            </td>

            <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal text-center">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#d0d7e7]">
                        <div className="h-1 rounded-full bg-[#195de6]" style={{ width: `${progressRate}%` }}></div>
                    </div>
                    <p className="text-[#0e121b] text-sm font-medium leading-normal">{Math.round(progressRate)}%</p>
                </div>
            </td>

            {(bannerWorkState === "all" || bannerWorkState === "complete" || bannerWorkState === "cancel") && workidHold === "null" ? (
                <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal text-center">
                    <select
                        id="workid"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={workidHold}
                        onChange={editWorkid}
                    >
                        <option value="null" disabled>Null</option>
                        {workIdDatas.map((wId) => <option key={wId} value={wId}>#{wId}</option>)}
                    </select>
                </td>
            ) : (
                <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-600 h-[72px] px-4 py-2 w-[100px] text-[#4e6797] text-sm font-normal leading-normal text-center">
                    #{workidHold}
                </td>
            )}

            <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-720 h-[72px] px-4 py-2 w-60 text-[#4e6797] text-sm font-bold leading-normal tracking-[0.015em] text-center">
                {totalworkdone}
            </td>

            {(bannerWorkState === "all" || bannerWorkState === "complete" || bannerWorkState === "cancel") ? (
                <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-600 h-[72px] px-4 py-2 w-[100px] text-[#4e6797] text-sm font-normal leading-normal text-center">
                    {workstatusHold}
                </td>
            ) : (
                <td className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal text-center">
                    <select
                        id="workstatus"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={workstatusHold}
                        onChange={editWorkstatus}
                    >
                        <option value="" disabled>Select Job Role</option>
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                        <option value="cancel">Cancel</option>
                    </select>
                </td>
            )}
        </tr>
    );
}
