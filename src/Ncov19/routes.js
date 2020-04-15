import Dashboard from "./views/Dashboard/Dashboard.js";
import DailyCharts from './views/DailyCharts/DailyCharts';

const studentRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/ncov19"
  },
  {
    path: "/daily-charts",
    name: "Daily Charts",
    component: DailyCharts,
    layout: "/ncov19"
  }
];

export default studentRoutes;
