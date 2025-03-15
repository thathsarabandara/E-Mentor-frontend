import React, { useState } from 'react';
import TeacherCard from '../../../../Components/Learner/Auth/TeacherCard/TeacherCard';
import teacher1 from '../../../../assets/images/instructor/instructor1.png';
import teacher2 from '../../../../assets/images/instructor/instructor2.png';
import teacher3 from '../../../../assets/images/instructor/instructor3.png';
import teacher4 from '../../../../assets/images/instructor/instructor4.png';
import teacher5 from '../../../../assets/images/instructor/instructor5.png';
import teacher6 from '../../../../assets/images/instructor/instructor6.png';

function Teacher() {
  const [searchTerm, setSearchTerm] = useState('');
  const teachersData = [
    { image: teacher1, name: 'Dr. Emily Carter', position: 'Herbal Medicine Expert', review: '4.9', students: '1.2K' },
    { image: teacher2, name: 'John Doe', position: 'Holistic Nutritionist', review: '4.7', students: '950' },
    { image: teacher3, name: 'Sarah Johnson', position: 'Sound Therapist', review: '4.8', students: '870' },
    { image: teacher4, name: 'Michael Lee', position: 'Essential Oils Specialist', review: '4.6', students: '760' },
    { image: teacher5, name: 'Sophia Martinez', position: 'Aromatherapy Coach', review: '4.9', students: '1.1K' },
    { image: teacher6, name: 'David Wilson', position: 'Natural Healing Instructor', review: '4.5', students: '800' },
  ];

  const filteredTeachers = teachersData.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center font-inter">
      <div className="w-full sm:w-10/12 lg:w-8/12">
        <div className="flex flex-col items-center lg:items-start mb-5">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold">Teachers ({filteredTeachers.length})</p>
          <div className="flex flex-col w-11/12 my-4">
            <label className="text-xs font-medium text-gray-700 mb-1">Search Teachers:</label>
            <input
              type="text"
              placeholder="Search by name or expertise..."
              className="border p-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8 lg:gap-8 xl:gap-12 pt-6">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
              ))
            ) : (
              <p className="text-gray-500">No teachers found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
