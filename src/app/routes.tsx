import { createBrowserRouter, Navigate } from "react-router";
import { SplashScreen } from "./screens/SplashScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { MobileLayout } from "./components/MobileLayout";
import { HomeScreen } from "./screens/HomeScreen";
import { TrackingScreen } from "./screens/TrackingScreen";
import { RoutesScreen } from "./screens/RoutesScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

function HomeShortcut() { return <Navigate to="/app/home" replace />; }
function TrackShortcut() { return <Navigate to="/app/track" replace />; }
function RoutesShortcut() { return <Navigate to="/app/routes" replace />; }
function NotificationsShortcut() { return <Navigate to="/app/notifications" replace />; }
function ProfileShortcut() { return <Navigate to="/app/profile" replace />; }

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/app",
    Component: MobileLayout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "home", Component: HomeScreen },
      { path: "track", Component: TrackingScreen },
      { path: "routes", Component: RoutesScreen },
      { path: "notifications", Component: NotificationsScreen },
      { path: "profile", Component: ProfileScreen },
    ],
  },
  { path: "/home", Component: HomeShortcut },
  { path: "/track", Component: TrackShortcut },
  { path: "/routes", Component: RoutesShortcut },
  { path: "/notifications", Component: NotificationsShortcut },
  { path: "/profile", Component: ProfileShortcut },
]);
