    import React from 'react'

type Props = {}

const CheckOut = (props: Props) => {
    return (
        <div>
            <div className="main w-[1410px] mx-auto mt-[112px] mb-[50px]">
                <div className="form w-[700px] mx-auto">

                    <label className="text-lg">Số điện thoại của bạn</label><br />
                    <input type="text" placeholder=""
                        className="w-[700px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[20px] mb-[30px]" /><br />
                    <label className="text-lg ">Giao đến địa chỉ</label><br />
                    <input type="text" placeholder="Tên của bạn"
                        className="w-[700px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[20px]" /><br />
                    <input type="text" placeholder="Thành phố"
                        className="w-[700px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[40px]" /><br />
                    <input type="text" placeholder="Nơi ở chi tiết"
                        className="w-[700px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[40px]" /><br />
                    <div className="mt-[15px]">
                        <input type="checkbox" /> Lưu địa chỉ
                    </div>
                    <label className="text-lg ">Sử dụng mã giảm giá</label><br />
                    <input type="text" placeholder=""
                        className="w-[700px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[20px] bg-[#D9D9D9]" /><br />
                    <div className="relative flex mt-[50px]">
                        <a href="./cart/order" className="text-[#E22C43] my-auto">
                            Quay lại giỏ hàng </a>
                        <div className="absolute right-0 ">
                            <button className="w-[200px] h-[60px] bg-black text-slate-50">Thanh toán</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckOut