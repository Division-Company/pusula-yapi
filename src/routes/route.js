import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/pages/home";
import Company from "../components/pages/company";
import References from "../components/pages/references";
import OngoingProjects from "../components/pages/ongoing-projects";
import Services from "../components/pages/services";
import Contact from "../components/pages/contact";
import Careers from "../components/pages/careers";
import FormPage from "../components/pages/formpage";
import AdminLogin from "../components/pages/admin/admin-login";
import AdminPage from "../components/pages/admin/admin-page";
import CVDetailsPage from "../components/pages/admin/CVDetailsPage";
import AdminLayout from "../layouts/adminlayout";
import ErrorPage from "../components/ErrorPage"

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
    },
    {
        path: "/services",
        element: (
            <MainLayout>
                <Services />
            </MainLayout>
        ),
    },
    {
        path: "/references",
        element: (
            <MainLayout>
                <References />
            </MainLayout>
        ),
    },
    {
        path: "/ongoing-projects",
        element: (
            <MainLayout>
                <OngoingProjects />
            </MainLayout>
        ),
    },
    {
        path: "/form",
        element: (
            <MainLayout>
                <FormPage />
            </MainLayout>
        ),
    },
    {
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
    },
    {
        path: "/admin/*",
        element: (
            <PrivateRoute>
                <AdminLayout>
                    <Routes>
                        <Route path="applications" element={<AdminPage />} />
                        <Route path="cv-details/:id" element={<CVDetailsPage />} />
                        <Route path="*" element={<Navigate to="/not-found" />} />
                    </Routes>
                </AdminLayout>
            </PrivateRoute>
        ),
    },
    {
        path: "/not-found",
        element: <ErrorPage />,
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />,
    },
];

export default routes;
