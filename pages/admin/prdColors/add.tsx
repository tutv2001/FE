import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AdminLayout } from "../../../layouts";
import { NextPageWithLayout } from "../../../models/layout";
import { addprdColor } from "../../../redux/prdColorSlice";
import { addprdSize } from "../../../redux/prdSizeSlice";



type Props = {};

type Inputs = {
    name: string;
};

const AddprdSize: NextPageWithLayout = (props: Props) => {
    const [preview, setPreview] = useState<string>();
    const dispatch = useDispatch<any>();
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
        try {
          console.log(values);
          await dispatch(addprdColor(values)).unwrap();
          toast.success("Thêm thành công");
          reset();
          setPreview("");
          router.push("/admin/prdColors")
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <>
            <Head>
                <title>Thêm Màu Sắc</title>
            </Head>
            <header className="z-10 fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative mb-0 pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Màu Sắc
                    </h5>
                    <span>Thêm Màu Sắc</span>
                </div>
                <Link href="/admin/prdColors">
                    <button
                        type="button"
                        className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        DS Màu Sắc
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">
                                Thêm Màu Sắc:
                            </span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6">
                                    <label
                                        htmlFor="form__add-user-fullname"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Màu
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Vui lòng không bỏ trống" })}
                                        id="form__add-user-fullname"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">
                                        {errors.name?.message}
                                    </div>
                                </div>                                                                                                                                                                                                                                              
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {" "}
                                Thêm {" "}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

AddprdSize.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default AddprdSize;
