import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Tuser } from "../models/user";
import { RootState } from "../redux/store";

type PrivateRouteProps = {
  children: any;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  ) as Tuser;
  const router = useRouter();

  if (!isLogged) {
    router.push("/login");
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <img src="/loading2.gif" />
        </div>
      </>
    );
  }

  return children;
};

export default PrivateRoute;
