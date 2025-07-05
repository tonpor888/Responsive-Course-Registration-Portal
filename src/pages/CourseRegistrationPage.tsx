import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, PlusIcon, XIcon, AlertCircleIcon, CheckCircleIcon, ShoppingCartIcon } from 'lucide-react';
import { courses, Course } from '../data/courseData';
import { CartProvider, useCart } from '../context/CartContext';
const CourseSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    isInCart,
    hasTimeConflict
  } = useCart();
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filteredCourses = courses.filter(course => course.code.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(filteredCourses);
  }, [searchTerm]);
  const handleAddToCart = (course: Course) => {
    if (hasTimeConflict(course)) {
      alert('พบการซ้อนทับของเวลาเรียน กรุณาเลือกรายวิชาอื่น');
      return;
    }
    const success = addToCart(course);
    if (!success) {
      alert('ไม่สามารถเพิ่มรายวิชาได้ กรุณาตรวจสอบว่ามีรายวิชานี้ในตะกร้าแล้วหรือไม่');
    }
  };
  const handleConfirmRegistration = () => {
    if (cartItems.length === 0) {
      alert('กรุณาเลือกรายวิชาอย่างน้อย 1 รายวิชา');
      return;
    }
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/class-schedule');
    }, 3000);
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ลงทะเบียนเรียน</h1>
      {/* Success message */}
      {showSuccessMessage && <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <CheckCircleIcon className="text-green-500 mx-auto mb-4" size={64} />
            <h2 className="text-2xl font-bold mb-2">ลงทะเบียนสำเร็จ</h2>
            <p className="mb-4">ระบบกำลังนำท่านไปยังหน้าตารางเรียน</p>
          </div>
        </div>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Search Bar */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="px-3 py-2">
                <SearchIcon className="text-gray-500" size={20} />
              </div>
              <input type="text" placeholder="ค้นหารายวิชาด้วยรหัสวิชา เช่น CS101" className="flex-grow py-3 px-2 focus:outline-none" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              {searchTerm && <button className="px-3 py-2 hover:text-gray-700" onClick={() => setSearchTerm('')}>
                  <XIcon size={20} />
                </button>}
            </div>
          </div>
          {/* Search Results */}
          <div className="space-y-4">
            {searchResults.length > 0 ? searchResults.map(course => <div key={course.code} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-bold">
                        {course.code} - {course.name}
                      </h3>
                      <p className="text-gray-600">
                        Section {course.section} • {course.credits} หน่วยกิต
                      </p>
                    </div>
                    <button className={`flex items-center px-4 py-2 rounded-lg text-white ${isInCart(course.code) ? 'bg-red-500 hover:bg-red-600' : hasTimeConflict(course) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`} onClick={() => {
                if (isInCart(course.code)) {
                  removeFromCart(course.code);
                } else if (!hasTimeConflict(course)) {
                  handleAddToCart(course);
                }
              }} disabled={hasTimeConflict(course) && !isInCart(course.code)}>
                      {isInCart(course.code) ? <>
                          <XIcon size={18} className="mr-1" /> ลบออก
                        </> : <>
                          <PlusIcon size={18} className="mr-1" /> เพิ่ม
                        </>}
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-1">เวลาเรียน:</h4>
                      {course.time.map((time, index) => <p key={index} className="text-gray-600">
                          {time.day} {time.start}-{time.end} น.
                        </p>)}
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold">ห้องเรียน:</span>{' '}
                        {course.room}
                      </p>
                      <p>
                        <span className="font-semibold">อาจารย์ผู้สอน:</span>{' '}
                        {course.instructor}
                      </p>
                      <p>
                        <span className="font-semibold">ที่นั่งว่าง:</span>{' '}
                        {course.seats.available}/{course.seats.total}
                      </p>
                    </div>
                  </div>
                  {hasTimeConflict(course) && !isInCart(course.code) && <div className="mt-3 flex items-center text-red-500">
                      <AlertCircleIcon size={18} className="mr-1" />
                      <p>มีการซ้อนทับของเวลาเรียนกับรายวิชาอื่นในตะกร้า</p>
                    </div>}
                </div>) : searchTerm ? <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-500">ไม่พบรายวิชาที่ค้นหา</p>
              </div> : <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-500">
                  กรุณาค้นหารายวิชาด้วยรหัสวิชา เช่น CS101
                </p>
              </div>}
          </div>
        </div>
        {/* Registration Cart */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingCartIcon size={20} className="mr-2" />
                รายวิชาที่เลือก
              </h2>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                {cartItems.length} รายวิชา
              </span>
            </div>
            {cartItems.length > 0 ? <div className="space-y-3 mb-4">
                {cartItems.map(course => <div key={course.code} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{course.code}</p>
                      <p className="text-sm text-gray-600">{course.name}</p>
                    </div>
                    <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(course.code)}>
                      <XIcon size={18} />
                    </button>
                  </div>)}
              </div> : <div className="text-center py-6 text-gray-500">
                <p>ยังไม่มีรายวิชาที่เลือก</p>
              </div>}
            <div className="border-t pt-4">
              <button className={`w-full py-3 rounded-lg font-bold text-white ${isRegistrationOpen && cartItems.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`} disabled={!isRegistrationOpen || cartItems.length === 0} onClick={handleConfirmRegistration}>
                ยืนยันการลงทะเบียน
              </button>
              {!isRegistrationOpen && <p className="text-center text-red-500 mt-2 text-sm">
                  ขณะนี้ยังไม่เปิดให้ลงทะเบียน
                </p>}
              <p className="text-center text-sm text-gray-500 mt-2">
                กรุณาตรวจสอบรายวิชาและตารางเรียนก่อนยืนยัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const CourseRegistrationPage: React.FC = () => {
  return <CartProvider>
      <CourseSearch />
    </CartProvider>;
};
export default CourseRegistrationPage;