import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { SingleCategory } from "../pages/SingleCategory/SingleCategory";
import { SingleLawyer } from "../pages/SingleLawyer/SingleLawyer";
import { SearchPage } from "../pages/SearchPage/SearchPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category/:categoryId",
                element: <SingleCategory />
            },
            {
                path: "/lawyer/:lawyerId",
                element: <SingleLawyer />
            },
            {
                path: "/search",
                element: <SearchPage />
            },

        ]
    }
])
export default router;