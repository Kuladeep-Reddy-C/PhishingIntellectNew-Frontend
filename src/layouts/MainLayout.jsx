// src/layouts/MainLayout.jsx
import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
    const [userRole] = useState('guest');

    const location = useLocation();
    const navigate = useNavigate();

    const currentPage = useMemo(() => {
        const path = location.pathname;
        if (path === '/detect') return 'detect';
        if (path === '/report') return 'report';
        if (path === '/about') return 'about';
        return 'home';
    }, [location.pathname]);

    const handleNavigate = (page) => {
        const path = page === 'home' ? '/' : `/${page}`;
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const scroll = () => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(scroll, 100);
        } else {
            scroll();
        }
    };

    // Inject navigation props into the page component if it wants them
    const enhancedChild = React.isValidElement(children)
        ? React.cloneElement(children, {
            onNavigate: handleNavigate,
            onScrollToSection: scrollToSection,
            userRole,
            currentPage,
        })
        : children;

    return (
        <div className="min-h-screen bg-white">
            <Navbar
                onNavigate={handleNavigate}
                onScrollToSection={scrollToSection}
                userRole={userRole}
                currentPage={currentPage}
            />
            {enhancedChild}
        </div>
    );
}

export default MainLayout;
