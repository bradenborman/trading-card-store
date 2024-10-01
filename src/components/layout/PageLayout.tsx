import React, { ReactNode, useState } from 'react';
import SideMenu from '../sidemenu/SideMenu';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="page-layout">
            <SideMenu />
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
