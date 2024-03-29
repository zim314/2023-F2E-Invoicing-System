import React from 'react';
import './index.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const LiLabal = ({ className = '', children }: Props) => (
    <li className={`liLabal ${className}`}>
        <div className="liLabal__point">•</div>
        {children}
    </li>
);

export default LiLabal;
