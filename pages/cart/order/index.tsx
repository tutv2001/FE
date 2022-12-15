import React from 'react'
import Image from 'next/image'
type Props = {}

const Cart = (props: Props) => {
  return (
    <>
    <div className="container p-8 mx-auto mt-12">
  <div className="w-full overflow-x-auto">
    <div className="my-2">
      <h3 className="text-xl font-bold tracking-wider">Giỏ hàng</h3>
    </div>
    <table className="w-full shadow-inner">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 font-bold whitespace-nowrap">Ảnh</th>
          <th className="px-6 py-3 font-bold whitespace-nowrap">Tên sản phẩm</th>
          <th className="px-6 py-3 font-bold whitespace-nowrap">Màu sắc, kích cỡ</th>
          <th className="px-6 py-3 font-bold whitespace-nowrap">Số lượng</th>
          <th className="px-6 py-3 font-bold whitespace-nowrap">Giá</th>
          <th className="px-6 py-3 font-bold whitespace-nowrap">Xoá</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="object-cover h-28 w-28 rounded-2xl"
                alt="image"
              />
            </div>
          </td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <div className="flex flex-col items-center justify-center">
              <h3>Áo nữ</h3>
            </div>
          </td>
          <td className="p-4 px-6 text-center whitespace-nowrap">xanh,xl</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                name="qty"
                defaultValue={2}
                className="w-12 text-center bg-gray-100 outline-none"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td className="p-4 px-6 text-center whitespace-nowrap">$1,000</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="object-cover h-28 w-28 rounded-2xl"
                alt="image"
              />
            </div>
          </td>
          <td className="p-4 px-6 text-center whitespace-nowrap">Áo nam</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">xanh,xl</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                name="qty"
                defaultValue={1}
                className="w-12 text-center bg-gray-100 outline-none"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </td>
          
          <td className="p-4 px-6 text-center whitespace-nowrap">$12,00</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-center">
              <img
                src="https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w="
                className="object-cover h-28 w-28 rounded-2xl"
                alt="image"
              />
            </div>
          </td>
          <td className="p-4 px-6 text-center whitespace-nowrap">Áo nam</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">xanh,xl</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                name="qty"
                defaultValue={1}
                className="w-12 text-center bg-gray-100 outline-none"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td className="p-4 px-6 text-center whitespace-nowrap">$1,300</td>
          <td className="p-4 px-6 text-center whitespace-nowrap">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="lg:w-2/4">
      <div className="mt-4">
        <div className="px-4 py-4 rounded-md">
          <label htmlFor="coupon code" className="font-semibold text-gray-600">
            Nhập mã khuyến mãi
          </label>
          <input
            type="text"
            placeholder="coupon code"
            defaultValue="whitecat"
            className="
            w-full
            px-2
            py-2
            border border-blue-600
            rounded-md
            outline-none
          "
          />
          <span className="block text-green-600">
            Áp mã khuyến mãi thành công
          </span>
          <button
            className="
            px-6
            py-2
            mt-2
            text-sm text-indigo-100
            bg-indigo-600
            rounded-md
            hover:bg-indigo-700
          "
          >
           Áp mã
          </button>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <div className="py-4 rounded-md shadow">
        <h3 className="text-xl font-bold text-blue-600">Tổng tiền</h3>
        <div className="flex justify-between px-4">
          <span className="font-bold">Subtotal</span>
          <span className="font-bold">$35.25</span>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-bold">Discount</span>
          <span className="font-bold text-red-600">- $5.00</span>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-bold">Sales Tax</span>
          <span className="font-bold">$2.25</span>
        </div>
        <div
          className="
          flex
          items-center
          justify-between
          px-4
          py-2
          mt-3
          border-t-2
        "
        >
          <span className="text-xl font-bold">Tổng</span>
          <span className="text-2xl font-bold">$37.50</span>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <button
        className="
        w-[200px]
        py-2
        text-center text-white
        bg-blue-500
        rounded-md
        shadow
        hover:bg-blue-600
      "
      >
        Tới trang thanh toán
      </button>
    </div>
  </div>
</div>
</>
  );
};

export default Cart;
