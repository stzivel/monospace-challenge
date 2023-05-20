import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableData, updateToggleStatus } from '../redux/userSlice';
import userslogo from '../assets/userslogo.png'
import question from '../assets/questionmark.svg'

const UsersTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);
    const [selectedCount, setSelectedCount] = useState(0); // State to track the number of selected checkboxes


    useEffect(() => {
        dispatch(fetchTableData());
    }, [dispatch]);

    const handleToggleChange = (userId, toggleStatus) => {
        const newToggleStatus = !toggleStatus; // Invert the toggle status
        dispatch(updateToggleStatus({ userId, toggleStatus: newToggleStatus }))
            .unwrap()
            .then(() => {
                //Dispatch the fetchTableData action here to update the table data after toggle status update
                dispatch(fetchTableData());
            })
            .catch((error) => {
                console.error('Failed to update toggle status:', error);
            });
    };

    const handleCheckboxChange = (event) => {
        const { checked } = event.target;
        setSelectedCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
    };
    const getUserTypeClassName = (userType) => {
        switch (userType) {
            case 'Employee':
                return ' bg-type_em';
            case 'Supervisor':
                return 'bg-type_su';
            case 'Stakeholder':
                return 'bg-type_cr';
            case 'Guest':
                return 'bg-type_sup';
            default:
                return 'bg-gray-100';
        }
    };




    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (





        <div className='flex justify-center items-center w-[1920px] h-[1080px] '>





            <div className='w-[1722px] h-618px absolute top-[255px] left-[99px] '>
                <div className='w-[1678px] h-[32px]  flex  justify-between items-center p-8'>
                    <div className='flex justify-center items-center'>
                        <img src={userslogo} alt="" />
                        <h2 className='text-lg font-monserrat font-medium leading-5 mx-2 text-[#22242A]'>Users</h2>
                    </div>
                    <div>

                    </div>
                    <div className='flex items-center justify-between '>
                        <span className='ml-4 text-xs font-monserrat font-medium leading-4 text-[##808080] mx-2'>{selectedCount} selected</span>
                        <img src={question} alt="" className='w-[32px] h-[32px]' />
                    </div>
                </div>
                <table className='table-auto w-full border-y border-solid border-[#E2E2E2]'>
                    <thead>
                        <tr className='w-[1722px] h-[56px] border-b border-solid border-[#E2E2E2] '>
                            <th></th>
                            <th className='font-monserrat font-bold text-xs leading-4 text-primary'>TYPE</th>
                            <th className='font-monserrat font-bold text-xs leading-4 text-primary'>NAME</th>
                            <th className='font-monserrat font-bold text-xs leading-4 text-primary'>EMAIL</th>
                            <th className='font-monserrat font-bold text-xs leading-4 text-primary'>TELEPHONE</th>
                            <th className='font-monserrat font-bold text-xs leading-4 text-primary'>STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className='w-[1722px] h-[56px] hover:bg-[rgba(57,98,141,0.05)] border-b border-solid border-[#E2E2E2] '>
                                <td>
                                    <input type='checkbox' className='w-[16px] h-[16px] border border-solid' onChange={handleCheckboxChange} />
                                </td>


                                <td className=' text-sm font-monserrat font-normal leading-5 text-primary hover:font-semibold'>
                                    <div className={` w-[34px] h-[24px] inline-block   ${getUserTypeClassName(user.type)}`}>
                                        {user.type.substring(0, 2).toUpperCase()}
                                    </div>
                                </td>
                                <td className='text-sm font-monserrat font-normal leading-5 text-primary hover:font-semibold'>
                                    {user.name}
                                </td>
                                <td className='text-sm font-monserrat font-normal leading-5 text-primary hover:font-semibold'>
                                    {user.email}
                                </td>
                                <td className='text-sm font-monserrat font-normal leading-5 text-primary hover:font-semibold'>
                                    {user.phone}
                                </td>
                                <td>
                                    <label className='relative inline-flex items-center cursor-pointer'>
                                        <input
                                            type='checkbox'
                                            value=''
                                            className='sr-only peer'
                                            checked={user.active}
                                            onChange={() => handleToggleChange(user.id, user.active)}
                                        />

                                        <div class="w-11 h-6 bg-[#D8D8D8] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-['#6AB8B8'] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#99D9D9]"></div>


                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default UsersTable;

