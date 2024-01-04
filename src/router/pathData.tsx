import Home from '../page/Home/index';
import OpenBallpt from '../page/OpenBallot';
import CandidateInfo from '../page/CandidateInfo';

const pathData = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: 'openballot',
        element: <OpenBallpt />,
    },
    {
        path: 'candidateInfo/:candidate',
        element: <CandidateInfo />,
    },
];

export default pathData;
