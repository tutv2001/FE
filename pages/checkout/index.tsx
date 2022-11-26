    import React from 'react'

type Props = {}

const CheckOut = (props: Props) => {
    return (
        <div>
          <>
  <div className="mt-20">
    <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
      Trang Thanh Toán
    </h1>
  </div>
  <div className="container p-12 mx-auto">
    <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
      <div className="flex flex-col md:w-full">
        <h2 className="mb-4 font-bold md:text-xl text-heading ">
          Địa chỉ thanh toán
        </h2>
        <form className="justify-center w-full mx-auto" method="post" action="">
          <div className="">
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Họ
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Họ"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Tên
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="tên"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Số điện thoại
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Địa chỉ"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Địa chỉ
                </label>
                <textarea
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Address"
                  cols={20}
                  rows={4}
                  placeholder="Địa chỉ"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Thành phố
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="Thành phố"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="postcode"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Mã code
                </label>
                <input
                  name="postcode"
                  type="text"
                  placeholder="Mã code"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <label className="flex items-center text-sm group text-heading">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                />
                <span className="ml-2">
                  Lưu thông tin cho lần thanh toán sau
                </span>
              </label>
            </div>
            <div className="relative pt-3 xl:pt-6">
              <label
                htmlFor="note"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                {" "}
                Ghi chú
              </label>
              <textarea
                name="note"
                className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                rows={4}
                placeholder=""
                defaultValue={""}
              />
            </div>
            <div className="mt-4">
              <button className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                Thanh toán
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
        <div className="pt-12 md:pt-0 2xl:ps-4">
          <h2 className="text-xl font-bold">Tổng thanh toán</h2>
          <div className="mt-8">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/user/erondu/1600x900"
                    alt="image"
                    className="w-60"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Title</h2>
                  <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                  <span className="text-red-600">Price</span> $20
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    alt="image"
                    className="w-60"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Title</h2>
                  <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                  <span className="text-red-600">Price</span> $20
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 mt-4">
            <h2 className="text-xl font-bold">ITEMS 2</h2>
          </div>
          <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Subtotal<span className="ml-2">$40.00</span>
          </div>
          <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Shipping Tax<span className="ml-2">$10</span>
          </div>
          <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Total<span className="ml-2">$50.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </div>
    )
}

export default CheckOut