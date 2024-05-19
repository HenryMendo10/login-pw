import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DashUser from '../components/Dashboard/DashUser';

const DashUserPage = () => {
    return (
        <>
            <Header />
            <DashUser />
            <Footer />
        </>
    );
};

export default DashUserPage;