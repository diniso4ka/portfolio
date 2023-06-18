import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <AppRouter />
        </div>
    );
};
