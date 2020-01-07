import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../components/Home";
import InputData from "../components/inputData";
import ViewReviews from "../components/viewReviews";
import Login from "../components/Login";
const screens = {
  EXPERIENCE: {
    screen: Home
  },
  LOGIN: {
    screen: Login
  },
  LEAVEYOURREVIEW: {
    screen: InputData
  },
  VIEWREVIEWS: {
    screen: ViewReviews
  }
};

const routes = createStackNavigator(screens);

export default createAppContainer(routes);
