import React from 'react';
import Spinner from './Spinner';
import { useContext } from 'react';
import GlobalContext from '@/Store/GlobalContext';
const Overlay = () => {

    const { isLoading } = useContext(GlobalContext);

    return (
        <div>
            {isLoading && <Spinner />}
        </div>
    );
};

export default Overlay;