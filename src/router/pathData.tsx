import BasicLayout from 'layout/BasicLayout';

const pathData = [
    {
        element: <BasicLayout />,
        children: [
            {
                index: true,
                element: <div>我是route 首頁</div>,
            },
        ],
    },
];

export default pathData;
