import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../components/pages/home";
import Company from "../components/pages/company";
import References from "../components/pages/references";
import OngoingProjects from "../components/pages/ongoing-projects";
import Processes from "../components/pages/processes";
import Services from "../components/pages/services";
import Contact from "../components/pages/contact";
import Careers from "../components/pages/careers";

const Error = () => {
    return <div>404 Not Found!</div>;
};

const routes = [
    {
        path: "/",
        element: (
            <MainLayout>
                <HomePage /> {/* Ana sayfa MainLayout içinde gösteriliyor */}
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
        path: "/processes",
        element: (
            <MainLayout>
                <Processes />
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
        path: "/not-found",
        element: <Error />,
    },

    {
        path: "*",
        element: <Navigate to="/not-found" />, // 404 sayfasına yönlendirme
    },
];

export default routes;