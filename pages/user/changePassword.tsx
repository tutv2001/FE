import React from 'react'
import UserNav from '../../component/user-nav'

type Props = {}

const changePassword = (props: Props) => {
    return (
        <div>
            <div className="main w-[1410px] mx-auto mt-[80px]">
                <h2 className='text-2xl'>Trang chủ/ <a href="" className='text-red-500'>Tài khoản</a></h2>
                <div className=' flex mt-[14px]'>
                    <UserNav />
                    <div className='ml-[140px]'>
                        <h2 className='text-xl'>Đổi mật khẩu</h2>
                        <div className='mt-[14px]'>
                            <div className='mb-8'>
                                <label htmlFor="">Mật khẩu cũ</label><br />
                                <input type="text" className='mt-2 w-[400px] h-[40px] border'/>
                            </div>
                            <div>
                                <label htmlFor="">Mật khẩu mới</label><br />
                                <input type="text" className='mt-2 w-[400px] h-[40px] border'/>
                            </div>
                            <button className='bg-black text-white text-center w-[160px] h-[38px] mt-4 rounded-full'>Đổi mật khẩu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default changePassword