import Home from '../page/Home/index';
import OpenBallpt from '../page/OpenBallot';
import CandidateInfo from '../page/CandidateInfo';
import BasicLayout from 'layout/BasicLayout';

const pathData = [
    {
        path: '/',
        element: <Home />,
    },
    {
        element: <BasicLayout />,
        children: [
            {
                path: 'candidateinfo/:candidate',
                element: <CandidateInfo />,
            },
            {
                path: 'openballpt',
                element: <OpenBallpt />,
            },
        ],
    },
    {
        path: '*',
        element: <div>404</div>,
    },
];

export default pathData;
