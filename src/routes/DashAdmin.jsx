import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DashAdmin from '../components/Dashboard/DashAdmin';

const DashAdminPage = () => {
    return (
        <>
            <Header />
            <DashAdmin />
            <Footer />
        </>
    );
};

export default DashAdminPage;