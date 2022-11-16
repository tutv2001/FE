import React from 'react'
import UserNav from '../../component/user-nav'

type Props = {}

const userCart = (props: Props) => {
    return (
        <div>
            <div className="main w-[1410px] mx-auto mt-[80px]">
                <h2 className='text-2xl'>Trang chủ/ <a href="" className='text-red-500'>Tài khoản</a></h2>
                <div className=' flex mt-[14px]'>
                    <UserNav />
                    <div className='ml-[140px] w-full'>
                        <h2 className='text-xl'>Đơn hàng của bạn</h2>
                        <table className="table-auto text-center border border-black mt-4">
                            <thead className='bg-black text-white'>
                                <tr >
                                    <th className='px-[60px]'>ĐƠN HÀNG</th>
                                    <th className='px-[60px]'>KHÁCH HÀNG</th>
                                    <th className='px-[60px]'>NGÀY</th>
                                    <th className='px-[60px]'>GIÁ TRỊ ĐƠN HÀNG </th>
                                    <th className='px-[60px]'>TT ĐƠN HÀNG</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='py-[10px]'>
                                    <td>#62ceb</td>
                                    <td>
                                        <a href="">Admin</a><br />
                                        <a href="">036468888</a>
                                    </td>
                                    <td>25/05/2022 23:00:20</td>
                                    <td>50.000vnd</td>
                                    <td>Chờ</td>
                                </tr>

                                <tr className='py-[10px]'>
                                    <td>#62ceb</td>
                                    <td>
                                        <a href="">Admin</a><br />
                                        <a href="">036468888</a>
                                    </td>
                                    <td>25/05/2022 23:00:20</td>
                                    <td>50.000vnd</td>
                                    <td>Đã giao</td>
                                </tr>

                                <tr className='py-[10px]'>
                                    <td>#62ceb</td>
                                    <td>
                                        <a href="">Admin</a><br />
                                        <a href="">036468888</a>
                                    </td>
                                    <td>25/05/2022 23:00:20</td>
                                    <td>50.000vnd</td>
                                    <td>Đang giao</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default userCart