import React from 'react';
import { IWalletsServiceConsumer } from '../iwallets-service-context/iwallets-services-context';

const withIWalletsService = () => (Wrapper) => {

    return (props) => {
        return(
            <IWalletsServiceConsumer>
                {
                    (iWalletsService) => {
                        return <Wrapper {...props} iWalletsService={iWalletsService} />
                    }
                }
            </IWalletsServiceConsumer>
        )
    }
};

export default withIWalletsService;