import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

export default BasicLayout;
