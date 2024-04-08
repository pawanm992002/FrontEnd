import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useState } from "react";
import Carosel from '../helper/Carosel';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Header = () => {
  return (
    <>
      <Carosel/>
    </>
  )
}

export default Header
