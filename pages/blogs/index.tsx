import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement, useEffect } from "react";

import { ClientLayout } from "../../layouts";
import { TblogCate } from "../../models/blogCates";
import { Tblog } from "../../models/blogs";
type Props = {
  posts: Tblog[];
  catePost: TblogCate[];
};

const index = ({ posts, catePost }: Props) => {
  return (
    <div className="container-base ">
      <Head>
        <title>News</title>
      </Head>
      <ul className="text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
        <li className="hover:text-[#4d8a54] ">
          {" "}
          <Link href=""> Trang chủ / </Link>{" "}
        </li>
        <li className="text-[#4d8a54]">
          <Link href=""> Tin tức</Link>
        </li>
      </ul>
      <div className="grid md:grid-cols-3 md:gap-5 sm:gap-6 sm:grid-cols-2">
        {posts.map((item, index) => (
          <div className=" shadow-xl" key={index}>
            <div className="md:col-span-2 sm:col-span-1">{item.title}</div>
            <div className="col-span-1 ">{item.slug}</div>
            <img src={item.thumbnail} alt="" />
            <Link href={`/blogs/${item.slug}`}>ssssss</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://duan01cuongnd.herokuapp.com/api/news");
  const posts = await res.json();

  const req = await fetch("https://duan01cuongnd.herokuapp.com/api/categoryNews");
  const catePost = await req.json();

  return {
    props: {
      posts,
      catePost,
    },
    revalidate: 60,
  };
};
index.getLayout = (page: ReactElement) => <ClientLayout>{page}</ClientLayout>;
export default index;
