"use client";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

type BorderLinearProgressProps = {
  value: number;
};

export const BorderLinearProgress = styled(
  ({ value, ...rest }: BorderLinearProgressProps) => (
    <LinearProgress variant="determinate" value={value} {...rest} />
  )
)(({ theme, value }) => {
  let barColorPrimary;
  let barColorSecondary;

  if (value < 40) {
    barColorPrimary = "#00914C";
    // barColorSecondary = "#FAAC18";
  } else if (value >= 40 && value < 60) {
    barColorPrimary = "#FAAC18";
    // barColorSecondary = "#00914C";
  } else if (value >= 60) {
    barColorPrimary = "#CF232A";
    // barColorSecondary = "#00914C";
  }

  return {
    height: 16,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: barColorPrimary,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: "calc(100% - " + (value / 100) * 100 + "%)",
      backgroundColor: barColorSecondary,
      borderRadius: 5,
    },
  };
});
