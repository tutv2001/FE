import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RootState } from "../../../redux/store";
import { deleteUser, getUsers } from "../../../redux/userSlice";
import { formatDate } from "../../../untils";

type Props = {};

const UserList = (props: Props) => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleRemove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng chắc chắn rồi!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteUser(id)).unwrap();
        Swal.fire("Thành công!", "Xóa thành công.", "success");
      }
    });
  };

  return (
    <table
      className="min-w-full divide-y divide-gray-200"
      id="cate__list-table"
    >
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {" "}
            STT{" "}
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {" "}
            User{" "}
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {" "}
            Vai trò{" "}
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {" "}
            Ngày tạo{" "}
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {" "}
            Actions{" "}
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users?.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {++index}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-20 h-20 relative rounded-full object-cover">
                    {item.avatar && (
                      <img src={item.avatar} alt="" className="rounded-full" />
                    )}
                  </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500">{item.email}</div>
                  <div className="text-sm text-gray-500">{item.phone}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.role ? "Admin" : "User"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              {formatDate(item.createdAt)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link href={`/admin/users/${item._id}/edit`}>
                <a className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sửa
                </a>
              </Link>
              <button
                onClick={() => handleRemove(item._id)}
                className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
              >
                Xoá
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
