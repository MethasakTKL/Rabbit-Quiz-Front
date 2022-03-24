import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppNavBar from './AppNavBar';
import AppNavBarTeacher from '../../components_teacher/Bars/AppNavBarTeacher';
import AppHeaderTeacher from '../../components_teacher/Bars/AppHeaderTeacher';

const LayOut = () => {
    let isstaff = localStorage.getItem('user_is_staff')

    return (
        <main className="App">
            {isstaff ? <AppHeaderTeacher /> : <AppHeader />}
            {isstaff ? <AppNavBarTeacher /> : <AppNavBar />}

            <Outlet />
        </main>
    )
}

export default LayOut