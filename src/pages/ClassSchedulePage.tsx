import React, { useState } from 'react';
import { courses, examSchedule, Course } from '../data/courseData';
import { PrinterIcon, DownloadIcon } from 'lucide-react';
const ClassSchedulePage: React.FC = () => {
  // In a real app, this would come from the user's registered courses
  // For demo purposes, we'll use a few sample courses
  const [registeredCourses] = useState<Course[]>([courses[0], courses[3], courses[5], courses[8] // CS109
  ]);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hours = Array.from({
    length: 10
  }, (_, i) => i + 8); // 8:00 to 17:00
  // Get color for a course (consistently)
  const getCourseColor = (courseCode: string): string => {
    const colors = ['bg-blue-100 border-blue-300 text-blue-800', 'bg-green-100 border-green-300 text-green-800', 'bg-yellow-100 border-yellow-300 text-yellow-800', 'bg-purple-100 border-purple-300 text-purple-800', 'bg-pink-100 border-pink-300 text-pink-800', 'bg-indigo-100 border-indigo-300 text-indigo-800'];
    // Use the course code to determine a consistent color
    const index = parseInt(courseCode.replace('CS', '')) % colors.length;
    return colors[index];
  };
  // Check if a course is scheduled at a specific day and hour
  const getCourseAtTime = (day: string, hour: number) => {
    const coursesAtTime = registeredCourses.filter(course => {
      return course.time.some(timeSlot => {
        if (timeSlot.day !== day) return false;
        const startHour = parseInt(timeSlot.start.split(':')[0]);
        const endHour = parseInt(timeSlot.end.split(':')[0]);
        return hour >= startHour && hour < endHour;
      });
    });
    return coursesAtTime;
  };
  // Calculate if a course spans multiple hours
  const getCourseTimespan = (course: Course, day: string, hour: number) => {
    const timeSlot = course.time.find(t => t.day === day);
    if (!timeSlot) return 1;
    const startHour = parseInt(timeSlot.start.split(':')[0]);
    const endHour = parseInt(timeSlot.end.split(':')[0]);
    if (hour === startHour) {
      return endHour - startHour;
    }
    return 0; // Not the start hour
  };
  // Get registered courses for the exam schedule
  const getRegisteredExams = () => {
    const registeredCoursesCodes = registeredCourses.map(c => c.code);
    return examSchedule.filter(exam => registeredCoursesCodes.includes(exam.code));
  };
  const handlePrint = () => {
    window.print();
  };
  return <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">ตารางเรียน</h1>
        <div className="flex space-x-2">
          <button onClick={handlePrint} className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            <PrinterIcon size={18} className="mr-1" />
            พิมพ์
          </button>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            <DownloadIcon size={18} className="mr-1" />
            ดาวน์โหลด PDF
          </button>
        </div>
      </div>
      {/* Class Schedule */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-4 bg-green-700 text-white">
          <h2 className="text-xl font-bold">ตารางเรียนประจำสัปดาห์</h2>
          <p className="text-sm">ภาคการศึกษาที่ 1/2566</p>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-50">เวลา/วัน</th>
                {days.map(day => <th key={day} className="border p-2 bg-gray-50 min-w-[150px]">
                    {day === 'Monday' ? 'จันทร์' : day === 'Tuesday' ? 'อังคาร' : day === 'Wednesday' ? 'พุธ' : day === 'Thursday' ? 'พฤหัสบดี' : 'ศุกร์'}
                  </th>)}
              </tr>
            </thead>
            <tbody>
              {hours.map(hour => <tr key={hour}>
                  <td className="border p-2 text-center bg-gray-50 font-medium">
                    {`${hour}:00 - ${hour + 1}:00`}
                  </td>
                  {days.map(day => {
                const coursesAtTime = getCourseAtTime(day, hour);
                if (coursesAtTime.length === 0) {
                  return <td key={`${day}-${hour}`} className="border p-2"></td>;
                }
                return coursesAtTime.map(course => {
                  const timespan = getCourseTimespan(course, day, hour);
                  if (timespan === 0) return null; // Skip if not the start hour
                  const colorClass = getCourseColor(course.code);
                  return <td key={`${day}-${hour}-${course.code}`} rowSpan={timespan} className={`border p-2 ${colorClass}`}>
                          <div className="font-bold">{course.code}</div>
                          <div className="text-sm">{course.name}</div>
                          <div className="text-xs">ห้อง {course.room}</div>
                          <div className="text-xs">
                            อาจารย์ {course.instructor}
                          </div>
                        </td>;
                });
              })}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Exam Schedule */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-green-700 text-white">
          <h2 className="text-xl font-bold">ตารางสอบ</h2>
          <p className="text-sm">ภาคการศึกษาที่ 1/2566</p>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2">รหัสวิชา</th>
                <th className="border p-2">ชื่อวิชา</th>
                <th className="border p-2">วันที่</th>
                <th className="border p-2">เวลา</th>
                <th className="border p-2">ห้องสอบ</th>
              </tr>
            </thead>
            <tbody>
              {getRegisteredExams().map(exam => <tr key={exam.code}>
                  <td className="border p-2 font-medium">{exam.code}</td>
                  <td className="border p-2">{exam.name}</td>
                  <td className="border p-2">{exam.date}</td>
                  <td className="border p-2">{exam.time}</td>
                  <td className="border p-2">{exam.room}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Course Summary */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
        <div className="p-4 bg-green-700 text-white">
          <h2 className="text-xl font-bold">สรุปรายวิชาที่ลงทะเบียน</h2>
        </div>
        <div className="p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2">รหัสวิชา</th>
                <th className="border p-2">ชื่อวิชา</th>
                <th className="border p-2">Section</th>
                <th className="border p-2">หน่วยกิต</th>
                <th className="border p-2">อาจารย์ผู้สอน</th>
              </tr>
            </thead>
            <tbody>
              {registeredCourses.map(course => <tr key={course.code}>
                  <td className="border p-2 font-medium">{course.code}</td>
                  <td className="border p-2">{course.name}</td>
                  <td className="border p-2 text-center">{course.section}</td>
                  <td className="border p-2 text-center">{course.credits}</td>
                  <td className="border p-2">{course.instructor}</td>
                </tr>)}
              <tr className="bg-gray-50 font-bold">
                <td colSpan={3} className="border p-2 text-right">
                  รวมหน่วยกิต
                </td>
                <td className="border p-2 text-center">
                  {registeredCourses.reduce((sum, course) => sum + course.credits, 0)}
                </td>
                <td className="border p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default ClassSchedulePage;