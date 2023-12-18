import { Outlet } from 'react-router-dom';

const BasicLayout = () => (
    <>
        <div>我是 BasicLayout</div>
        <Outlet />
    </>
);

export default BasicLayout;
