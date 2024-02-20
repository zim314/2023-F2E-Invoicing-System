import React, { useEffect } from 'react';

const useOnClickOutSide = (
    ref: React.MutableRefObject<Node | null>,
    handler: (e: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(e.target as Node)) return;
            handler(e);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref]);
};

export default useOnClickOutSide;
