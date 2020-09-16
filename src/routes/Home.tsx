import React from 'react';

import AutdioList from 'src/components/AudioList/AudioList';
import Search from 'src/components/Search/Search';

const Home = () => {
    return (
        <div>
            <Search />
            <AutdioList />
        </div>
    );
};

export default Home;
