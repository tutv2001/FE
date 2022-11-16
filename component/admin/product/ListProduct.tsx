import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteBlog, getBlog, getBlogs } from "../../../redux/blogSlice";
import { RootState } from "../../../redux/store";
// import { deleteUser, getUsers } from "../../../redux/userSlice";
import { formatDate } from "../../../untils";
import { getBlogCates } from "../../../redux/blogCateSlice";
import { Tblog } from "../../../models/blogs";

type Props = {};
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const BlogList = (props: Props) => {
    const blogs = useSelector((state: RootState) => state.blog.blogs);
    const blogCate = useSelector((state: RootState) => state.blogCate.blogCates);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBlogs());
        dispatch(getBlogCates());
    }, [dispatch]);
    console.log(blogCate);
    
    const blogsFilter = blogCate?.map((item) => {
       return  {
            text: item.name, value:  item.name ,
       }
    })

    const handleRemove = (id: any) => {
        Swal.fire({
            title: "Bạn có chắc chắn muốn xóa không?",
            text: "Không thể hoàn tác sau khi xóa",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(deleteBlog(id)).unwrap();
                Swal.fire("Thành công!", "Xóa thành công.", "success");
            }
        });
    };
    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
    const columns: ColumnsType<Tblog> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: ' name',
            key: ' name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: img => <img src={img} width='120' alt="" />,
        },
        {
            title: 'Price',
            dataIndex: ' price',
            key: ' price',
        },
        {
            title: 'Category',
            dataIndex: 'categoryId',
            key: 'categoryId',
            filters: 
            blogsFilter
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
         {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
        },
       
        {
            title: 'Action',
            key: 'action',
            render: item => (

                <><Link href={`/admin/blogs/${item.action._id}/edit`}>
                    <span className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Edit
                    </span>
                </Link><button
                        onClick={() => handleRemove(item.action._id)}
                        className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
                    >
                        Delete
                    </button></>
            ),
        },
    ];

    const data: any = blogs?.map((item, index) => {
        return {
            stt: index,
           Name: item.title,
            content: item.desc,
            category: item.categoryId.name,
            image: item.thumbnail,
            action: item
        }
    })
    return (
        <Table columns={columns} dataSource={data} />

    );
};

export default BlogList;
