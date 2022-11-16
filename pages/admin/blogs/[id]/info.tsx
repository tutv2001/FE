import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../../../layouts";
import { getBlog } from "../../../../redux/blogSlice";
import { RootState } from "../../../../redux/store";

type Props = {};

const InfoBlog = (props: Props) => {
  const { blog } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const { id } = router.query;
  console.log(blog);
  const render = document.getElementById('content')
  if(render) {
    render.innerHTML = blog.content
  }
  useEffect(() => {
    dispatch(getBlog(id));
    
  }, [dispatch]);
  if (blog == "") return <div>Loading...</div>;
  return (
    <>
    <html lang="en">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
    <div id="content"></div>
    </body>
    </html>
    </>
  );
};

InfoBlog.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default InfoBlog;
