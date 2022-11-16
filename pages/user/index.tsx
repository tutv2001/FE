import React from 'react'
import UserNav from '../../component/user-nav'

type Props = {}

const User = (props: Props) => {
    return (
        <div>
            <div className="main w-[1410px] mx-auto mt-[80px]">
                <h2 className='text-2xl'>Trang chủ/ <a href="" className='text-red-500'>Tài khoản</a></h2> 
                <div className=' flex mt-[14px]'>
                    <UserNav />
                    <div className='ml-[140px]'>
                        <h2 className='text-xl'>Thông tin tài khoản</h2>
                        <div className='mt-[14px]'>
                            <div className='text-lg'><a href="" >Họ và tên: </a> <a href="">Admin</a></div>
                            <div className='text-lg'><a href="" >Email: </a> <a href="">admin@gmail.com</a></div>
                            <div className='text-lg'><a href="" >Số điện thoại: </a> <a href="">0345236586</a></div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default User