import React, { ReactElement } from 'react'
import { ClientLayout } from '../../layouts'
import styles from './cate.module.css'


type Props = {};

const Category = (props: Props) => {
  return (
    <>
      <nav className="relative w-[1410px] mx-auto flex flex-wrap items-center justify-between py-8 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
            <ol className="list-reset flex">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Trang chủ
                </a>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Sản phẩm
                </a>
              </li>

            </ol>
          </nav>
        </div>
      </nav>
      {/* Breadcrumb Section End */}
      {/* Shop Section Begin */}
      <div className="w-[1410px] mx-auto pt-[50px]">
        <div className="flex flex-no-wrap">
          <div className="lg:w-1/4 pr-4 pl-4">
            <div className="flex hidden lg:block">
              <div className="pt-1">
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <div className="flex items-center justify-between mb-2.5">
                    <h2 className="font-semibold text-heading text-xl md:text-2xl">
                      Lọc sản phẩm
                    </h2>
                    <button
                      className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
                      aria-label="Clear All"
                    >
                      Xoá hết
                    </button>
                  </div>
                  <div className="flex flex-wrap -m-1.5 pt-2" />
                </div>
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                    Danh mục
                  </h3>
                  <div className="mt-2 flex flex-col space-y-4">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="woman"
                        defaultValue="woman"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Woman
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="man"
                        defaultValue="man"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">Man</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="watch"
                        defaultValue="watch"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Watch
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="kids"
                        defaultValue="kids"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">Kids</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="sports"
                        defaultValue="sports"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Sports
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="sunglass"
                        defaultValue="sunglass"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Sunglass
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="bags"
                        defaultValue="bags"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">Bags</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="sneakers"
                        defaultValue="sneakers"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Sneakers
                      </span>
                    </label>
                  </div>
                </div>
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                    Thương hiệu
                  </h3>
                  <div className="mt-2 flex flex-col space-y-4">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="shovia"
                        defaultValue="shovia"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Shovia
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="fusion"
                        defaultValue="fusion"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Fusion
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="hunter shoes"
                        defaultValue="hunter-shoes"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Hunter Shoes
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="club shoes"
                        defaultValue="club-shoes"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Club Shoes
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="hoppister"
                        defaultValue="hoppister"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Hoppister
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="blaze fashion"
                        defaultValue="blaze-fashion"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Blaze Fashion
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="elegance"
                        defaultValue="elegance"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Elegance
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="fashadil"
                        defaultValue="fashadil"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Fashadil
                      </span>
                    </label>
                  </div>
                </div>
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                    Giá
                  </h3>
                  <div className="mt-2 flex flex-col space-y-4">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="under $50"
                        defaultValue="0-50"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Under $50
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$50 to $100"
                        defaultValue="50-100"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        $50 to $100
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$100 to $150"
                        defaultValue="100-150"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        $100 to $150
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$150 to $200"
                        defaultValue="150-200"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        $150 to $200
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$200 to $300"
                        defaultValue="200-300"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        $200 to $300
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$300 to $500"
                        defaultValue="300-500"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        $300 to $500
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$500 to $1000"
                        defaultValue="500-1000"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        $500 to $1000
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="over $1000"
                        defaultValue="1000-"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        Over $1000
                      </span>
                    </label>
                  </div>
                </div>
                <div className="block pb-7">
                  <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                    Màu sắc
                  </h3>
                  <div className="mt-2 flex flex-col space-y-4">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="black"
                        defaultValue="black"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(0, 0, 0)" }}
                          />
                          Đen
                        </span>
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="blue"
                        defaultValue="blue"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(51, 16, 206)" }}
                          />
                          Xanh dương
                        </span>
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="olive"
                        defaultValue="olive"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(12, 116, 72)" }}
                          />
                          Xanh lục
                        </span>
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="maroon"
                        defaultValue="maroon"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(95, 14, 14)" }}
                          />
                          Nâu hạt dẻ
                        </span>
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="brown"
                        defaultValue="brown"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(54, 39, 39)" }}
                          />
                          Nâu thường
                        </span>
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="white"
                        defaultValue="white"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(255, 255, 255)" }}
                          />
                          Trắng
                        </span>
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="gray"
                        defaultValue="gray"
                      />
                      <span className="ms-4 -mt-0.5 ml-[15px] text-normal">
                        <span className="flex items-center">
                          <span
                            className="w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20 mr-[5px]"
                            style={{ backgroundColor: "rgb(225, 225, 225)" }}
                          />
                          Xám
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[30px] lg:w-3/4 mx-auto pt-6 ml-[30px] ">
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg mr-[8px] font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-full pb-8">
              <div className="p-0 bg-light group text-center">
                <a className="block mb-2" href="#">
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img
                        className="object-cover w-full mx-auto transition-all h-[350px] group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 rounded group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative flex items-center justify-center p-3 mb-3 text-white transition-all translate-x-20 bg-gray-700 group-hover:translate-x-0 wishlist hover:bg-blue-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-cart2 "
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-normal text-[#999999] uppercase">
                    Quality Headphones
                  </h3>
                  <p className="text-lg font-semibold text-[#A71010] ">
                    <span className="text-lg mr-[8px] font-semibold text-gray-400 line-through ">
                      $33.69
                    </span>
                    <span>$29.89</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
Category.getLayout = (page: ReactElement) => <ClientLayout>{page}</ClientLayout>
export default Category