import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseData() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 定義一個函式來從後端獲取資料
    const fetchCourses = async () => {
      try {
        // 發送GET請求到後端的/course路徑，獲取資料
        const response = await axios.get('/course');
        // 從回應中獲取資料並設置到state中
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false); // 設置loading為false以顯示錯誤訊息或其他內容
      }
    };

    // 呼叫函式來獲取資料
    fetchCourses();
  }, []); // 空依賴陣列表示這個useEffect只會在組件掛載時執行一次

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(courses)) {
    return <div>Error: Courses data is not an array.</div>;
  }

  return (
    <div>
      <h1>Course Data</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseData;
