import Navbar from '../component/Navber';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

export default BasicLayout;
