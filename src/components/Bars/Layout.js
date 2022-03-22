import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppNavBar from './AppNavBar';

const LayOut = () => {
    return (
        <main className="App">
            <AppHeader />
            <AppNavBar />

            <Outlet />
        </main>
    )
}

export default LayOut