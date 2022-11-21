import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RootState } from "../../../redux/store";
import { Tblog } from "../../../models/blogs";
import { deleteprdCate, getprdCates } from "../../../redux/prdCateSlice";
import { deleteBlogCate, getBlogCates } from "../../../redux/blogCateSlice";

type Props = {};
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const BlogCateList = (props: Props) => {
    const blogCate = useSelector((state: RootState) => state.blogCate.blogCates);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBlogCates());
    }, [dispatch]);
    console.log(blogCate);

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
                await dispatch(deleteBlogCate(id)).unwrap();
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
            title: 'TÊN',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
        },
        // {
        //     title: 'Image',
        //     dataIndex: 'image',
        //     key: 'image',
        //     render: img => <img src={img} width='120' alt="" />,
        // },

        {
            title: 'HÀNH ĐỘNG',
            key: 'action',
            render: item => (

                <><Link href={`/admin/blogCates/${item.action._id}/edit`}>
                    <span className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sửa
                    </span>
                </Link>
                    <button
                        onClick={() => handleRemove(item.action._id)}
                        className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
                    >
                        Xóa
                    </button></>
            ),
        },
    ];

    const data: any = blogCate?.map((item, index) => {
        return {
            stt: index,
            title: item.name,
            // image: item.image,
            action: item
        }
    })
    return (
        <Table columns={columns} dataSource={data} />
    );
};

export default BlogCateList;
