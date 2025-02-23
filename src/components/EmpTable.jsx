import React, { useEffect, useState } from 'react';
import { useOperation } from '../contexts/OperationContext';
import EmpTableItem from './EmpTableItem';

export default function EmpTable({ bannerWorkState }) {
    const { allWorkers,filteredWorkers, setFilteredWorkers } = useOperation();
    // const [filteredWorkers, setFilteredWorkers] = useState([]);

    useEffect(() => {
        const tempVar = bannerWorkState === "all" ? allWorkers : allWorkers.filter(worker => worker.workstatus === bannerWorkState);
        setFilteredWorkers(tempVar);
    }, [allWorkers, bannerWorkState]);

    return (
        <div id="ss1" className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-xl border border-[#d0d7e7] bg-[#f8f9fc]">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-[#f8f9fc]">
                            {bannerWorkState === "all" && (
                                <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-120 px-4 py-3 text-center text-[#0e121b] w-[40px] text-sm font-medium leading-normal"></th>
                            )}
                            <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-240 px-4 py-3 text-center text-[#0e121b] w-[400px] text-sm font-medium leading-normal">Name</th>
                            <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-360 px-4 py-3 text-center text-[#0e121b] w-60 text-sm font-medium leading-normal">Role</th>
                            <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-480 px-4 py-3 text-center text-[#0e121b] w-[400px] text-sm font-medium leading-normal">Progress Rate</th>
                            <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-600 px-4 py-3 text-center text-[#0e121b] w-[100px] text-sm font-medium leading-normal">work Id</th>
                            <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-600 px-4 py-3 text-center text-[#0e121b] w-[100px] text-sm font-medium leading-normal">Total Work</th>
                            <th className="table-a589e3d2-3512-4ac2-81b6-837810765f5f-column-720 px-4 py-3 text-center w-60 text-[#4e6797] text-sm font-medium leading-normal">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(allWorkers) && allWorkers.length > 0 ? (
                            filteredWorkers.length > 0 ? (
                                filteredWorkers.map((worker) => (
                                    <EmpTableItem key={worker.id} worker={worker} bannerWorkState={bannerWorkState} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center text-[#4e6797] text-sm font-normal leading-normal">
                                        No workers found
                                    </td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center text-[#4e6797] text-sm font-normal leading-normal">
                                    No workers found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
