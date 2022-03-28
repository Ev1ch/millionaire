import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Start as StartPage } from 'components/pages';
import Routes from 'common/enums/routes';

function Start() {
    const navigate = useNavigate();

    const startHandler = () => {
        navigate(Routes.QUIZ);
    };

    return <StartPage onStart={startHandler} />;
}

export default Start;
