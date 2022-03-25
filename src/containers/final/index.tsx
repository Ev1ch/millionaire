import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Final as FinalPage } from 'components/pages';
import Routes from 'common/enums/routes';

interface IFinalLocationState {
    prize: number;
}

function Final() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as IFinalLocationState;
    const prize = Number(state.prize);

    const tryAgainHandler = () => {
        navigate(Routes.START);
    };

    return <FinalPage prize={prize} onTryAgain={tryAgainHandler} />;
}

export default Final;
