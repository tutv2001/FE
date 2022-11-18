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

      <>
  {/* component */}
  {/* <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
        From the blog
      </h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

    {posts.map((item, index) => (
              <div className="lg:flex" key={index}>
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src={item.thumbnail}
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  {item.title}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                {item.content}
                </span>
              </div>
            </div>
    ))}
      
      </div>
    </div>
  </section> */}
        <div className="bg-gray-100 dark:bg-gray-900 w-[1410px] mx-auto">
  <div className="container mt-12">
    <div className="flex relative rounded-md overflow-hidden bg-blue-400">
      <div
        className="grayscale-1 blend-multiply gatsby-image-wrapper"
        style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-block",
          width: 1496,
          height: 280
        }}
      >
        <img
          src="https://img.freepik.com/free-photo/fashion-portrait-two-elegant-women-best-friends-posing-indoor-grey-wall-wearing-winter-fluffy-coat-black-casual-hat-fashionable-clothes-sisters-walking_273443-4074.jpg?w=1800&t=st=1668166467~exp=1668167067~hmac=4519dfc425d3104deb9098227646dc0cc453b95ef84658f322f49ade5fa382bd"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(49, 130, 206, 0) 24%, rgba(49, 130, 206, .5) 100%)"
        }}
      ></div>
      <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6 text-white">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
          Travel destinations
        </h1>
        <h3 className="text-lg font-medium md:w-2/3">
          Check the most popular travel locations in Europe.
        </h3>
      </div>
    </div>
  </div>
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div>Blog</div>
      <div className="flex flex-wrap -m-4">

      {posts.map((item, index) => (
          <div className="p-4 md:w-1/3" key={index}>
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={item.thumbnail}
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {item.title}
              </h1>
              <p className="leading-relaxed mb-3">
                {item.content}
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  </section>
</div>
</>


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
