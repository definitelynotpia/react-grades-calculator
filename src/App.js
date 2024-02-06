import "./App.css";
import { useState, useTransition } from "react";

// function isReady() {
//   return 
// }

function Grades() {
  const [Quiz, setQuizScore] = useState(0);
  const [LabActivity, setLabActivityScore] = useState(0);
  const [FinalExam, setFinalExamScore] = useState(0);

  const isReady = () => {
    return (Quiz != 0 && LabActivity != 0 && FinalExam != 0);
  };

  const resetForm = () => {
    setQuizScore(0);
    setLabActivityScore(0);
    setFinalExamScore(0);
  };

  return <div>
    <div className="card">

      <div className="card-body bg-info">
        <h5 className="card-title">Grades Calculator</h5>
      </div>

      <div className="card-body">
        <form>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Quiz</span>
            <input type="number" className="form-control" onChange={(e) => setQuizScore(e.target.value)} value={Quiz} id="quiz" name="quiz" />
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Lab Activity</span>
            <input type="number" className="form-control" onChange={(e) => setLabActivityScore(e.target.value)} value={LabActivity} id="labActivity" name="labActivity" />
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Final Exam</span>
            <input type="number" className="form-control" onChange={(e) => setFinalExamScore(e.target.value)} value={FinalExam} id="finalExam" name="finalExam" />
          </div>
          <button class="btn btn-danger" onClick={resetForm}><i class="fa fa-rotate-right"></i></button>
        </form>
      </div>

      <div className="card-body border border-primary-subtle" style={{ display: isReady() ? 'initial' : 'none' }}>
        AvgGrade: {Math.round(((parseInt(FinalExam) + parseInt(LabActivity) + parseInt(Quiz)) / 3 + Number.EPSILON) * 100) / 100}
      </div>

    </div>
  </div>;
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grades />
      </header>
    </div>
  );
}