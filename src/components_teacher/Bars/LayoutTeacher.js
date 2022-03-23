import { Outlet } from 'react-router-dom';
import AppNavBar from './AppNavBarTeacher';
import AppHeader from './AppHeaderTeacher';

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