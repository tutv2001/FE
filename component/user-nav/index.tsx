import React from 'react'

type Props = {}

const UserNav = (props: Props) => {
    return (
        <div className='w-[200px]'>
            <h2 className='text-xl'>Trang tài khoản</h2>
            <div className='mt-[14px]'>
                <span><a href="" className='text-lg'>Xin chào: </a><a href="" className='text-red-500 text-lg'>Admin</a></span>
            </div>

            <ul className=' text-lg'>
                <li><a href="" className='mb-8'>Thông tin tài khoản</a></li>
                <li><a href="" className='mb-[12px]'>Đơn hàng của bạn</a></li>
                <li><a href="" className='mb-[12px]'>Đổi lại mật khẩu</a></li>
                <li><a href="" className='mb-[12px]'>Đăng xuất</a></li>

            </ul>
        </div>
    )
}

export default UserNav