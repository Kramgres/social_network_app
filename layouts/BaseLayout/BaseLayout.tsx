import React from 'react';
import Header from "../../components/Header/Header";

const BaseLayout: React.FC = ({children}) => {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
        </>

    );
};

export default BaseLayout;
