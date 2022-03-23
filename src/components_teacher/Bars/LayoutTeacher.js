import { Outlet } from 'react-router-dom';
import AppNavBar from './AppNavBar';
import AppHeader from './AppHeader';

const LayOutTeacher = () => {
    return (
        <main className="App">
            <AppHeader />
            <AppNavBar />

            <Outlet />
        </main>
    )
}

export default LayOutTeacher