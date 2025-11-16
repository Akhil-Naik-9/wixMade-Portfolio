import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';

// Import all page components
import Layout from '@/components/Layout';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import ProjectDetailPage from '@/components/pages/ProjectDetailPage';
import ProgrammingLanguagesPage from '@/components/pages/ProgrammingLanguagesPage';
import BlogPage from '@/components/pages/BlogPage';
import BlogPostPage from '@/components/pages/BlogPostPage';
import CourseworkPage from '@/components/pages/CourseworkPage';
import CertificatesPage from '@/components/pages/CertificatesPage';
import GalleryPage from '@/components/pages/GalleryPage';
import GalleryDetailPage from '@/components/pages/GalleryDetailPage';
import ContactPage from '@/components/pages/ContactPage';
import NotFoundPage from '@/components/pages/NotFoundPage';
import SitemapPage from '@/components/pages/SitemapPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "programming-languages",
        element: <ProgrammingLanguagesPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:id",
        element: <BlogPostPage />,
      },
      {
        path: "coursework",
        element: <CourseworkPage />,
      },
      {
        path: "certificates",
        element: <CertificatesPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "gallery/:id",
        element: <GalleryDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "sitemap",
        element: <SitemapPage />,
      },
      {
        path: "404",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
