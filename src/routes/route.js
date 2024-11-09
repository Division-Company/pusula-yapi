import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/main";
import PrivateRoute from "./PrivateRoute"
import HomePage from "../components/pages/home";
import Company from "../components/pages/company";
import References from "../components/pages/references";
import OngoingProjects from "../components/pages/ongoing-projects";
import Services from "../components/pages/services";
import Contact from "../components/pages/contact";
import Careers from "../components/pages/careers";
import Form from "../components/pages/formpage"
import FormPage from "../components/pages/formpage";
import AdminLogin from "../components/pages/admin-login";
import AdminPage from "../components/pages/admin-page";

const Error = () => {
    return <div>404 Not Found!</div>;
};

const routes = [
    {
        path: "/",
        element: (
            <MainLayout>
                <HomePage />
            </MainLayout>
        ),
    },
    {
        path: "/company",
        element: (
            <MainLayout>
                <Company />
            </MainLayout>
        ),
    }, {
        path: "/services",
        element: (
            <MainLayout>
                <Services />
            </MainLayout>
        ),
    }, {
        path: "/references",
        element: (
            <MainLayout>
                <References />
            </MainLayout>
        ),
    }, {
        path: "/ongoing-projects",
        element: (
            <MainLayout>
                <OngoingProjects />
            </MainLayout>
        ),
    }, {
        path: "/form",
        element: (
            <MainLayout>
                <FormPage />
            </MainLayout>
        ),
    }, {
        path: "/careers",
        element: (
            <MainLayout>
                <Careers />
            </MainLayout>
        ),
    },
    {
        path: "/contact",
        element: (
            <MainLayout>
                <Contact />
            </MainLayout>
        ),
    },
    {
        path: "/admin",
        element: <AdminLogin />,
    }, {
        path: "/admin-page",
        element: (
            <PrivateRoute>
                <AdminPage />
            </PrivateRoute>
        ),
    },
    {
        path: "/not-found",
        element: <Error />,
    },

    {
        path: "*",
        element: <Navigate to="/not-found" />,
    },
];

export default routes;