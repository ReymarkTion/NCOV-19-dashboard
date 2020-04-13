
import Dashboard from "./views/Dashboard/Dashboard.js";
import DailyCharts from './views/DailyCharts/DailyCharts';

const studentRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
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
