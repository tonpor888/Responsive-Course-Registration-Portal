import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">มหาวิทยาลัยแม่โจ้</h3>
            <p className="text-sm">
              63 หมู่ 4 ตำบลหนองหาร อำเภอสันทราย จังหวัดเชียงใหม่ 50290
            </p>
            <p className="text-sm">โทรศัพท์: 053-873000</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">ติดต่อเรา</h3>
            <p className="text-sm">สำนักบริหารและพัฒนาวิชาการ</p>
            <p className="text-sm">โทรศัพท์: 053-873460</p>
            <p className="text-sm">อีเมล: academic@mju.ac.th</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">ช่วยเหลือ</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:underline">
                  คำถามที่พบบ่อย
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  คู่มือการใช้งาน
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  แจ้งปัญหาการใช้งาน
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-green-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ระบบทะเบียนนักศึกษา
            มหาวิทยาลัยแม่โจ้ สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;