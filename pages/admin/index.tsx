import React, { ReactElement } from "react";
import { AdminLayout } from "../../layouts";
import { NextPageWithLayout } from "../../models/layout";

type Props = {};

const Andex: NextPageWithLayout = (props: Props) => {
  return <div>index</div>;
};
Andex.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Andex;
