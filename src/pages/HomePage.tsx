import React from 'react';
import { Link } from 'react-router-dom';
import { announcements } from '../data/courseData';
import { BellIcon, CalendarIcon, BookOpenIcon, ClipboardListIcon } from 'lucide-react';
const HomePage: React.FC = () => {
  return <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ระบบทะเบียนนักศึกษา
          </h1>
          <p className="text-xl mb-6">
            คณะวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/course-registration" className="bg-white text-green-800 hover:bg-green-100 px-6 py-3 rounded-lg font-bold transition">
              ลงทะเบียนเรียน
            </Link>
            <Link to="/class-schedule" className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition">
              ตารางเรียน
            </Link>
          </div>
        </div>
      </div>
      {/* Quick Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/course-registration" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
            <BookOpenIcon className="text-green-700 mr-3" size={24} />
            <div>
              <h3 className="font-bold text-lg">ลงทะเบียนเรียน</h3>
              <p className="text-gray-600 text-sm">ค้นหาและลงทะเบียนรายวิชา</p>
            </div>
          </Link>
          <Link to="/class-schedule" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
            <CalendarIcon className="text-green-700 mr-3" size={24} />
            <div>
              <h3 className="font-bold text-lg">ตารางเรียน</h3>
              <p className="text-gray-600 text-sm">ดูตารางเรียนและตารางสอบ</p>
            </div>
          </Link>
          <Link to="/grade-report" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
            <ClipboardListIcon className="text-green-700 mr-3" size={24} />
            <div>
              <h3 className="font-bold text-lg">ผลการเรียน</h3>
              <p className="text-gray-600 text-sm">
                ตรวจสอบผลการเรียนทุกภาคการศึกษา
              </p>
            </div>
          </Link>
          <Link to="/academic-calendar" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center">
            <BellIcon className="text-green-700 mr-3" size={24} />
            <div>
              <h3 className="font-bold text-lg">ปฏิทินการศึกษา</h3>
              <p className="text-gray-600 text-sm">
                กำหนดการสำคัญประจำภาคการศึกษา
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* Announcements */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">ประกาศจากมหาวิทยาลัย</h2>
          <Link to="/announcements" className="text-green-700 hover:underline">
            ดูทั้งหมด
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {announcements.map(announcement => <div key={announcement.id} className={`p-4 border-b ${announcement.important ? 'bg-green-50' : ''}`}>
              <div className="flex items-start">
                {announcement.important && <div className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2 mt-1">
                    สำคัญ
                  </div>}
                <div>
                  <h3 className="font-bold text-lg">{announcement.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    วันที่ {announcement.date}
                  </p>
                  <p className="text-gray-700">{announcement.content}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Academic Calendar Highlight */}
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            ปฏิทินการศึกษา - กำหนดการสำคัญ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-800">ลงทะเบียนเรียน</h3>
              <p className="text-gray-700">1-15 พฤษภาคม 2566</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-800">เปิดภาคเรียน</h3>
              <p className="text-gray-700">1 มิถุนายน 2566</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-800">สอบกลางภาค</h3>
              <p className="text-gray-700">1-7 กรกฎาคม 2566</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-800">
                วันสุดท้ายของการถอนรายวิชา
              </h3>
              <p className="text-gray-700">31 กรกฎาคม 2566</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-800">สอบปลายภาค</h3>
              <p className="text-gray-700">1-15 ตุลาคม 2566</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-800">ประกาศผลการเรียน</h3>
              <p className="text-gray-700">31 ตุลาคม 2566</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HomePage;