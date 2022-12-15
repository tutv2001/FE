import { animated, useSpring } from "react-spring";
import numeral from 'numeral';

const Value = (props: any) => {
  const data = useSpring({ total: props.loading ? 0 : props.value });
  let value;
  const numberFormat = (value: number) => numeral(value).format('0,0')
  switch (props.size) {
    case "lg":
      value = (
        <animated.h2 className="mb-0 font-weight-bold">
          {data.total.to((x: number) => numberFormat(x))}
        </animated.h2>
      );
      break;
    case "md":
      value = (
        <animated.h2 className="mb-0 font-weight-bold">
          {data.total.to((x: number) => numberFormat(x))}
        </animated.h2>
      );
      break;
    case "sm":
      value = (
        <animated.h2 className="mb-0 font-weight-bold">
          {data.total.to((x: number) => numberFormat(x))}
        </animated.h2>
      );
      break;
    default:
      value = (
        <animated.h2 className="mb-0 font-weight-bold">
          {data.total.to((x: number) => numberFormat(x))}
        </animated.h2>
      );
  }
  return value;
};

export const CustomStatistic = (props: any) => {
  const { size, value, title, loading } = props;
  return (
    <div>
      <Value value={value} size={size} loading={loading} />
      <p className="mb-0 text-muted">{title}</p>
    </div>
  );
};
