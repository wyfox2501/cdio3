import { useState } from "react";
import "./DoctorSelection.scss";
const departments = [
  { id: 1, name: "Khoa Tai Mũi Họng" },
  { id: 2, name: "Khoa Nội" },
  { id: 3, name: "Khoa Ngoại" },
  { id: 4, name: "Khoa Nhi" },
  { id: 5, name: "Khoa Da Liễu" }
];

const doctorsData = {
  1: [
    { id: 1, name: "Nguyễn Văn An", experience: 15, title: "Bác sĩ chuyên khoa II", price: 250000 },
    { id: 2, name: "Trần Thị Minh Hằng", experience: 10, title: "Thạc sĩ Y khoa", price: 300000 },
    { id: 3, name: "Phạm Hoàng Lâm", experience: 20, title: "Tiến sĩ Y khoa", price: 400000 },
    { id: 4, name: "Lê Ngọc Ánh", experience: 8, title: "Bác sĩ chuyên khoa I", price: 350000 },
    { id: 5, name: "Đỗ Mạnh Cường", experience: 12, title: "Bác sĩ chuyên khoa II", price: 320000 }
  ],
  2: [
    { id: 6, name: "Hoàng Văn Bình", experience: 18, title: "Tiến sĩ Y khoa", price: 500000 },
    { id: 7, name: "Nguyễn Thị Lan", experience: 7, title: "Thạc sĩ Y khoa", price: 280000 },
    { id: 8, name: "Trần Đức Long", experience: 14, title: "Bác sĩ chuyên khoa I", price: 330000 },
    { id: 9, name: "Phạm Thùy Linh", experience: 9, title: "Bác sĩ chuyên khoa II", price: 270000 },
    { id: 10, name: "Lê Văn Tài", experience: 11, title: "Bác sĩ chuyên khoa I", price: 310000 }
  ],
  3: [
    { id: 11, name: "Vũ Minh Quân", experience: 9, title: "Bác sĩ chuyên khoa I", price: 280000 },
    { id: 12, name: "Ngô Thị Hương", experience: 12, title: "Thạc sĩ Y khoa", price: 320000 },
    { id: 13, name: "Đinh Văn Tú", experience: 15, title: "Tiến sĩ Y khoa", price: 450000 },
    { id: 14, name: "Lương Thị Mai", experience: 6, title: "Bác sĩ chuyên khoa II", price: 260000 },
    { id: 15, name: "Phan Đức Thành", experience: 18, title: "Bác sĩ chuyên khoa I", price: 380000 }
  ],

  4: [
    { id: 16, name: "Trương Thị Ngọc", experience: 8, title: "Bác sĩ Nhi khoa", price: 270000 },
    { id: 17, name: "Bùi Văn Hiếu", experience: 11, title: "Thạc sĩ Nhi khoa", price: 310000 },
    { id: 18, name: "Hoàng Thị Thảo", experience: 14, title: "Tiến sĩ Nhi khoa", price: 420000 },
    { id: 19, name: "Mai Văn Đạt", experience: 5, title: "Bác sĩ chuyên khoa II", price: 240000 },
    { id: 20, name: "Lê Thị Hồng", experience: 16, title: "Bác sĩ chuyên khoa I", price: 360000 }
  ],

  5: [
    { id: 21, name: "Nguyễn Thị Hằng", experience: 7, title: "Bác sĩ Da liễu", price: 290000 },
    { id: 22, name: "Trần Văn Khôi", experience: 10, title: "Thạc sĩ Da liễu", price: 330000 },
    { id: 23, name: "Phạm Thị Lan", experience: 13, title: "Tiến sĩ Da liễu", price: 410000 },
    { id: 24, name: "Đỗ Minh Tuấn", experience: 4, title: "Bác sĩ chuyên khoa II", price: 220000 },
    { id: 25, name: "Võ Thị Kim", experience: 17, title: "Bác sĩ chuyên khoa I", price: 390000 }
  ]
};

export default function DoctorSelection() {
  const [selectedDepartment, setSelectedDepartment] = useState(1);

  return (
    <div className="container">
      {/* Tìm kiếm & chọn chuyên khoa */}
      <div className="controls">
        <input type="text" placeholder="Tìm kiếm bác sĩ" className="search-box" />
        <select
          className="department-select"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(Number(e.target.value))}
        >
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      {/* Danh sách bác sĩ */}
      <div className="doctor-list">
        {doctorsData[selectedDepartment]?.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-avatar">{doctor.avatar}</div>
            <div>
              <p className="doctor-name">{doctor.name}</p>
              <p>{doctor.experience} năm kinh nghiệm - {doctor.title}</p>
              <p className="doctor-price">{doctor.price.toLocaleString()} VND</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}