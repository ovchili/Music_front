import EmptyLayout from "@/layouts/Empty/EmptyLayout";
import ProtectedLayout from "@/layouts/Protected/ProtectedLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ProtectedLayout />}></Route>
  )
);
