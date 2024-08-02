import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function ManageEmployees() {
    return (
        <>
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-[#0e121b] tracking-light text-[32px] font-bold leading-tight text-left">Jobs</p>
                            <p className="text-[#4e6797] text-sm font-normal leading-normal text-left">View and manage your Employees</p>
                        </div>
                    </div>
                    <div className="pb-3">
                        <div className="flex border-b border-[#d0d7e7] px-4 gap-8">
                            <NavLink to="" className={({isActive}) =>`flex flex-col items-center justify-center border-b-[3px] ${isActive ? 'border-b-[#195de6] text-[#0e121b]' : 'border-b-transparent text-[#4e6797]'} pb-[13px] pt-4`}>
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">All</p>
                            </NavLink>
                            <NavLink to="pending" className={({isActive}) =>`flex flex-col items-center justify-center border-b-[3px] ${isActive ? 'border-b-[#195de6] text-[#0e121b]' : 'border-b-transparent text-[#4e6797]'} pb-[13px] pt-4`}>
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Pending</p>
                            </NavLink>
                            <NavLink to="complete" className={({isActive}) =>`flex flex-col items-center justify-center border-b-[3px] ${isActive ? 'border-b-[#195de6] text-[#0e121b]' : 'border-b-transparent text-[#4e6797]'} pb-[13px] pt-4`}>
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Complete</p>
                            </NavLink>
                            <NavLink to="cancel" className={({isActive}) =>`flex flex-col items-center justify-center border-b-[3px] ${isActive ? 'border-b-[#195de6] text-[#0e121b]' : 'border-b-transparent text-[#4e6797]'} pb-[13px] pt-4`}>
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Cancel</p>
                            </NavLink>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default ManageEmployees
