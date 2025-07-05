export interface Course {
  code: string;
  name: string;
  section: number;
  time: {
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
    start: string;
    end: string;
  }[];
  room: string;
  instructor: string;
  seats: {
    total: number;
    available: number;
  };
  credits: number;
}
export interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
  important: boolean;
}
export const announcements: Announcement[] = [{
  id: 1,
  title: 'เปิดลงทะเบียนเรียนภาคเรียนที่ 1/2566',
  date: '15/04/2023',
  content: 'ขอเชิญนักศึกษาทุกชั้นปีลงทะเบียนเรียนประจำภาคเรียนที่ 1/2566 ได้ตั้งแต่วันที่ 1-15 พฤษภาคม 2566 ผ่านระบบทะเบียนนักศึกษา',
  important: true
}, {
  id: 2,
  title: 'การชำระค่าธรรมเนียมการศึกษา',
  date: '20/04/2023',
  content: 'นักศึกษาสามารถชำระค่าธรรมเนียมการศึกษาได้ที่ธนาคารกรุงไทยทุกสาขา หรือผ่านแอปพลิเคชัน Krungthai NEXT ภายในวันที่ 30 พฤษภาคม 2566',
  important: true
}, {
  id: 3,
  title: 'กำหนดการสอบกลางภาค',
  date: '25/04/2023',
  content: 'การสอบกลางภาคประจำภาคเรียนที่ 1/2566 จะมีขึ้นในวันที่ 1-7 กรกฎาคม 2566 นักศึกษาสามารถตรวจสอบตารางสอบได้ที่ระบบทะเบียน',
  important: false
}, {
  id: 4,
  title: 'ปิดปรับปรุงระบบทะเบียน',
  date: '28/04/2023',
  content: 'ระบบทะเบียนจะปิดปรับปรุงในวันที่ 30 เมษายน 2566 เวลา 22.00-24.00 น. ขออภัยในความไม่สะดวก',
  important: false
}, {
  id: 5,
  title: 'ทุนการศึกษาสำหรับนักศึกษาคณะวิทยาการคอมพิวเตอร์',
  date: '01/05/2023',
  content: 'คณะวิทยาการคอมพิวเตอร์เปิดรับสมัครทุนการศึกษาสำหรับนักศึกษาชั้นปีที่ 2-4 ที่มีผลการเรียนดีและขาดแคลนทุนทรัพย์ สามารถยื่นใบสมัครได้ที่สำนักงานคณะภายในวันที่ 15 พฤษภาคม 2566',
  important: true
}];
export const courses: Course[] = [{
  code: 'CS101',
  name: 'วิทยาการคอมพิวเตอร์เบื้องต้น',
  section: 1,
  time: [{
    day: 'Monday',
    start: '09:00',
    end: '12:00'
  }, {
    day: 'Thursday',
    start: '13:00',
    end: '15:00'
  }],
  room: 'CS-201',
  instructor: 'ดร.สมชาย ใจดี',
  seats: {
    total: 40,
    available: 15
  },
  credits: 3
}, {
  code: 'CS102',
  name: 'การเขียนโปรแกรมคอมพิวเตอร์',
  section: 1,
  time: [{
    day: 'Tuesday',
    start: '09:00',
    end: '12:00'
  }, {
    day: 'Friday',
    start: '13:00',
    end: '15:00'
  }],
  room: 'CS-202',
  instructor: 'ผศ.ดร.วิชัย เรียนเก่ง',
  seats: {
    total: 35,
    available: 10
  },
  credits: 3
}, {
  code: 'CS103',
  name: 'การพัฒนาเว็บ',
  section: 1,
  time: [{
    day: 'Wednesday',
    start: '09:00',
    end: '12:00'
  }],
  room: 'CS-301',
  instructor: 'อ.สุดา เว็บเก่ง',
  seats: {
    total: 30,
    available: 5
  },
  credits: 3
}, {
  code: 'CS104',
  name: 'โครงสร้างข้อมูลและอัลกอริทึม',
  section: 1,
  time: [{
    day: 'Monday',
    start: '13:00',
    end: '16:00'
  }, {
    day: 'Thursday',
    start: '09:00',
    end: '11:00'
  }],
  room: 'CS-203',
  instructor: 'รศ.ดร.ปัญญา คิดเร็ว',
  seats: {
    total: 35,
    available: 12
  },
  credits: 3
}, {
  code: 'CS105',
  name: 'ระบบฐานข้อมูล',
  section: 1,
  time: [{
    day: 'Tuesday',
    start: '13:00',
    end: '16:00'
  }, {
    day: 'Friday',
    start: '09:00',
    end: '11:00'
  }],
  room: 'CS-204',
  instructor: 'ดร.ฐานข้อมูล จัดเก็บดี',
  seats: {
    total: 30,
    available: 8
  },
  credits: 3
}, {
  code: 'CS106',
  name: 'วิศวกรรมซอฟต์แวร์',
  section: 1,
  time: [{
    day: 'Wednesday',
    start: '13:00',
    end: '16:00'
  }],
  room: 'CS-302',
  instructor: 'ผศ.ดร.พัฒนา ซอฟต์แวร์',
  seats: {
    total: 30,
    available: 7
  },
  credits: 3
}, {
  code: 'CS107',
  name: 'ระบบปฏิบัติการ',
  section: 1,
  time: [{
    day: 'Monday',
    start: '16:00',
    end: '18:00'
  }, {
    day: 'Wednesday',
    start: '16:00',
    end: '18:00'
  }],
  room: 'CS-205',
  instructor: 'อ.ระบบ ปฏิบัติการ',
  seats: {
    total: 35,
    available: 15
  },
  credits: 3
}, {
  code: 'CS108',
  name: 'เครือข่ายคอมพิวเตอร์',
  section: 1,
  time: [{
    day: 'Tuesday',
    start: '16:00',
    end: '18:00'
  }, {
    day: 'Thursday',
    start: '16:00',
    end: '18:00'
  }],
  room: 'CS-206',
  instructor: 'อ.เครือข่าย คอมพิวเตอร์',
  seats: {
    total: 30,
    available: 10
  },
  credits: 3
}, {
  code: 'CS109',
  name: 'ปัญญาประดิษฐ์',
  section: 1,
  time: [{
    day: 'Friday',
    start: '13:00',
    end: '17:00'
  }],
  room: 'CS-303',
  instructor: 'รศ.ดร.ปัญญา ประดิษฐ์',
  seats: {
    total: 25,
    available: 3
  },
  credits: 3
}, {
  code: 'CS110',
  name: 'ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์',
  section: 1,
  time: [{
    day: 'Thursday',
    start: '09:00',
    end: '12:00'
  }],
  room: 'CS-304',
  instructor: 'อ.ปฏิสัมพันธ์ มนุษย์คอม',
  seats: {
    total: 30,
    available: 12
  },
  credits: 3
}, {
  code: 'CS111',
  name: 'พัฒนาแอปพลิเคชันมือถือ',
  section: 1,
  time: [{
    day: 'Wednesday',
    start: '09:00',
    end: '12:00'
  }],
  room: 'CS-305',
  instructor: 'ผศ.แอพ มือถือ',
  seats: {
    total: 25,
    available: 5
  },
  credits: 3
}, {
  code: 'CS112',
  name: 'พื้นฐานความปลอดภัยไซเบอร์',
  section: 1,
  time: [{
    day: 'Friday',
    start: '09:00',
    end: '12:00'
  }],
  room: 'CS-306',
  instructor: 'อ.ความปลอดภัย ไซเบอร์',
  seats: {
    total: 25,
    available: 8
  },
  credits: 3
}, {
  code: 'CS113',
  name: 'คลาวด์คอมพิวติ้ง',
  section: 1,
  time: [{
    day: 'Tuesday',
    start: '13:00',
    end: '16:00'
  }],
  room: 'CS-307',
  instructor: 'ดร.คลาวด์ คอมพิวติ้ง',
  seats: {
    total: 25,
    available: 10
  },
  credits: 3
}, {
  code: 'CS114',
  name: 'กราฟิกคอมพิวเตอร์',
  section: 1,
  time: [{
    day: 'Monday',
    start: '09:00',
    end: '12:00'
  }],
  room: 'CS-308',
  instructor: 'ผศ.ดร.กราฟิก คอมพิวเตอร์',
  seats: {
    total: 25,
    available: 7
  },
  credits: 3
}, {
  code: 'CS115',
  name: 'โครงงานคอมพิวเตอร์ขั้นสุดท้าย',
  section: 1,
  time: [{
    day: 'Thursday',
    start: '13:00',
    end: '16:00'
  }],
  room: 'CS-309',
  instructor: 'รศ.ดร.โครงงาน วิจัย',
  seats: {
    total: 20,
    available: 5
  },
  credits: 3
}];
export const examSchedule = [{
  code: 'CS101',
  name: 'วิทยาการคอมพิวเตอร์เบื้องต้น',
  date: '12/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-101'
}, {
  code: 'CS102',
  name: 'การเขียนโปรแกรมคอมพิวเตอร์',
  date: '13/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-102'
}, {
  code: 'CS103',
  name: 'การพัฒนาเว็บ',
  date: '14/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-103'
}, {
  code: 'CS104',
  name: 'โครงสร้างข้อมูลและอัลกอริทึม',
  date: '15/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-104'
}, {
  code: 'CS105',
  name: 'ระบบฐานข้อมูล',
  date: '16/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-105'
}, {
  code: 'CS106',
  name: 'วิศวกรรมซอฟต์แวร์',
  date: '17/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-106'
}, {
  code: 'CS107',
  name: 'ระบบปฏิบัติการ',
  date: '18/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-107'
}, {
  code: 'CS108',
  name: 'เครือข่ายคอมพิวเตอร์',
  date: '19/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-108'
}, {
  code: 'CS109',
  name: 'ปัญญาประดิษฐ์',
  date: '20/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-109'
}, {
  code: 'CS110',
  name: 'ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์',
  date: '21/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-110'
}, {
  code: 'CS111',
  name: 'พัฒนาแอปพลิเคชันมือถือ',
  date: '22/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-111'
}, {
  code: 'CS112',
  name: 'พื้นฐานความปลอดภัยไซเบอร์',
  date: '23/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-112'
}, {
  code: 'CS113',
  name: 'คลาวด์คอมพิวติ้ง',
  date: '24/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-113'
}, {
  code: 'CS114',
  name: 'กราฟิกคอมพิวเตอร์',
  date: '25/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-114'
}, {
  code: 'CS115',
  name: 'โครงงานคอมพิวเตอร์ขั้นสุดท้าย',
  date: '26/05/2023',
  time: '09:00-12:00',
  room: 'EXAM-115'
}];