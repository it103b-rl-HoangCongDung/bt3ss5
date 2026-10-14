function chuanHoaTieuDe(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function bockTachVaChuanHoa(rawString) {
  const parts = rawString.split('-');
  
  let rawDoctor = parts[0].replace('BS.', '');
  let doctorName = chuanHoaTieuDe(rawDoctor.replaceAll('_', ' '));
  
  let department = chuanHoaTieuDe(parts[1].replaceAll('_', ' '));
  let timeSlot = parts[2];
  let room = parts[3].replace('PHONG_', 'Phòng ');
  
  return {
    bacSi: doctorName,
    chuyenKhoa: department,
    gioKham: timeSlot,
    phongKham: room
  };
}

const danhSachCaTruc = [
  'BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302',
  'BS.tran_thi_thu_ha-KHOA_NHI-09:15-PHONG_104',
  'BS.le_hoang_nam-KHOA_NGOAI_TONG_QUAT-10:00-PHONG_205'
];

console.log('=== BANG PHAN CONG CA KHAM TAI PHONG KHAM ===');
const ketQuaHienThi = danhSachCaTruc.map(item => bockTachVaChuanHoa(item));
console.table(ketQuaHienThi);
