import { useEffect, useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [students, setStudents] = useState([]); 

  useEffect(() => {
    fetch("/api/average-score")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  const getScoreClass = (score) => {
    if (score < 40) return "score-red";
    if (score < 60) return "score-yellow";
    return "score-green";
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Reports</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Student Scores</h1>
        <div className="cards-container">
          {students.length > 0 ? (
            students.map((student) => (
              <div
                key={student.studentId}
                className={`student-card ${getScoreClass(student.score)}`}
              >
                <h3>{student.studentName}</h3>
                <p>Score: {student.score}</p>
              </div>
            ))
          ) : (
            <p>Loading students...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
