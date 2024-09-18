import Navbar from '@/components/Navbar/page';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;