import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, UserIcon } from 'lucide-react';
const navItems = [{
  name: 'หน้าหลัก',
  path: '/'
}, {
  name: 'ลงทะเบียนเรียน',
  path: '/course-registration'
}, {
  name: 'ตารางเรียน',
  path: '/class-schedule'
}, {
  name: 'ตารางสอบ',
  path: '/exam-schedule'
}, {
  name: 'ปฏิทินการศึกษา',
  path: '/academic-calendar'
}, {
  name: 'ค่าธรรมเนียม',
  path: '/tuition-fees'
}, {
  name: 'ผลการเรียน',
  path: '/grade-report'
}, {
  name: 'สถานะการลงทะเบียน',
  path: '/enrollment-status'
}, {
  name: 'แบบประเมิน',
  path: '/feedback'
}, {
  name: 'รายชื่อนักศึกษา',
  path: '/student-directory'
}, {
  name: 'ประวัตินักศึกษา',
  path: '/student-history'
}, {
  name: 'โปรไฟล์',
  path: '/profile'
}];
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <header className="bg-green-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png" alt="Maejo University" className="h-12" />
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-lg">ระบบทะเบียนนักศึกษา</span>
              <span className="text-sm">มหาวิทยาลัยแม่โจ้</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex space-x-2">
              {navItems.slice(0, 8).map(item => <Link key={item.path} to={item.path} className={`px-3 py-2 rounded hover:bg-green-700 transition ${location.pathname === item.path ? 'bg-green-700' : ''}`}>
                  {item.name}
                </Link>)}
            </div>
            <div className="border-l border-green-600 h-8"></div>
            <Link to="/login" className="flex items-center space-x-1 px-3 py-2 bg-green-700 rounded hover:bg-green-600 transition">
              <UserIcon size={18} />
              <span>เข้าสู่ระบบ</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-white hover:bg-green-700 focus:outline-none">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden mt-2 py-2 border-t border-green-700">
            <div className="flex flex-col space-y-1">
              {navItems.map(item => <Link key={item.path} to={item.path} className={`px-3 py-2 rounded hover:bg-green-700 transition ${location.pathname === item.path ? 'bg-green-700' : ''}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <Link to="/login" className="flex items-center space-x-1 px-3 py-2 mt-2 bg-green-700 rounded hover:bg-green-600 transition" onClick={() => setIsOpen(false)}>
                <UserIcon size={18} />
                <span>เข้าสู่ระบบ</span>
              </Link>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navbar;