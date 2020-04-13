
import Dashboard from "./views/Dashboard/Dashboard.js";
import Articles from './views/ArticlesTeacher/ArticlesTeacher';

import DailyCharts from './views/DailyCharts/DailyCharts';

const studentRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/"
  },
  {
    path: "/java-articles",
    name: "Java Tutorial",
    component: Articles,
    layout: "/"
  },
  {
    path: "/daily-charts",
    name: "Daily Charts",
    component: DailyCharts,
    layout: "/"
  }
];

export default studentRoutes;
