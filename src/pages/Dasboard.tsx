import DashboardContent from '@/components/DashboardContent';
import DashSidebar from '@/components/DashSidebar';
import Employees from '@/components/Employees';
import Managers from '@/components/Managers';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Roles from '@/components/Roles';
import SetPermissions from '@/components/SetPermissions';
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';


export default function Dashboard() {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search]);
  return (
    <div className='flex flex-col max-h-screen md:flex-row'>
        <DashSidebar/>
        { tab === 'dash' &&  <DashboardContent/>}
        { tab === 'profile' &&  <Profile/>}
        { tab === 'employees' &&  <Employees/>}
        { tab === 'managers' &&  <Managers/>}
        { tab === 'projects' && <Projects/>}
        { tab === 'roles' && <Roles/>}
        { tab === 'permissions' && <SetPermissions/>}
    </div>
  )
}
