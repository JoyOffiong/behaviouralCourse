import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularProgressBar(
  props: CircularProgressProps & {
    value: number;
    label?: string;
    size: number;
    style?: any;
  }
) {
  return (
    <Box
      sx={{ position: "relative", display: "inline-flex" }}
      style={{ ...props.style, marginRight: "8px" }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        size={props.size}
        color="success"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="font-sans font-bold text-[#1E1E1E] text-[10px] ">
          {props.label ? props.label : `${Math.round(props.value)}%`}
        </p>
      </Box>
    </Box>
  );
}

//  CircularStatic() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }
