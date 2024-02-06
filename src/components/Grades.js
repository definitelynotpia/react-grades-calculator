import { useState } from "react";

export default function Grades() {
	const [Quiz, setQuizScore] = useState(50);
	const [LabActivity, setLabActivityScore] = useState(50);
	const [FinalExam, setFinalExamScore] = useState(50);
	const [Grade, setGrade] = useState("");
	const [GPA, setGPA] = useState("");
	const [showResults, setShowResults] = useState(false);

	const gradeScale = [
		{ lowerLimit: 0.00, upperLimit: 49.99, pointEquivalent: "FDA" },
		{ lowerLimit: 50.00, upperLimit: 74.50, pointEquivalent: 0.00 },
		{ lowerLimit: 74.51, upperLimit: 76.50, pointEquivalent: 1.00 },
		{ lowerLimit: 76.51, upperLimit: 78.50, pointEquivalent: 1.25 },
		{ lowerLimit: 78.51, upperLimit: 80.50, pointEquivalent: 1.50 },
		{ lowerLimit: 80.51, upperLimit: 82.50, pointEquivalent: 1.75 },
		{ lowerLimit: 82.51, upperLimit: 84.50, pointEquivalent: 2.00 },
		{ lowerLimit: 84.51, upperLimit: 86.50, pointEquivalent: 2.25 },
		{ lowerLimit: 86.51, upperLimit: 88.50, pointEquivalent: 2.50 },
		{ lowerLimit: 88.51, upperLimit: 90.50, pointEquivalent: 2.75 },
		{ lowerLimit: 90.51, upperLimit: 92.50, pointEquivalent: 3.00 },
		{ lowerLimit: 92.51, upperLimit: 94.50, pointEquivalent: 3.25 },
		{ lowerLimit: 94.51, upperLimit: 96.50, pointEquivalent: 3.50 },
		{ lowerLimit: 96.51, upperLimit: 98.50, pointEquivalent: 3.75 },
		{ lowerLimit: 98.51, upperLimit: 100.00, pointEquivalent: 4.00 },
	];

	const resetForm = () => {
		setQuizScore(50);
		setLabActivityScore(50);
		setFinalExamScore(50);
		setShowResults(false);
	};

	const calculate = () => {
		// set Grade
		let avgScores = (FinalExam + LabActivity + Quiz) / 3;
		setGrade(avgScores);

		// get gpa from gpa conversion table
		const arrayIndex = gradeScale.findIndex((obj) => avgScores >= obj.lowerLimit && avgScores <= obj.upperLimit);
		const gpaValue = gradeScale[arrayIndex].pointEquivalent;
		// set gpa
		setGPA(gpaValue);

		// show results
		setShowResults(true);
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
						<input type="number" className="form-control" onChange={(e) => setQuizScore(parseFloat(e.target.value))} value={Quiz} id="quiz" name="quiz" min="0" max="100" />
					</div>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">Lab Activity</span>
						<input type="number" className="form-control" onChange={(e) => setLabActivityScore(parseFloat(e.target.value))} value={LabActivity} id="labActivity" name="labActivity" min="0" max="100" />
					</div>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">Final Exam</span>
						<input type="number" className="form-control" onChange={(e) => setFinalExamScore(parseFloat(e.target.value))} value={FinalExam} id="finalExam" name="finalExam" min="0" max="100" />
					</div>
					<button type="button" className="btn btn-danger" onClick={resetForm}><i className="fa fa-rotate-right"></i></button>
					<button type="button" className="btn btn-success" onClick={calculate}><i className="fa fa-calculator"></i></button>
				</form>
			</div>

			{showResults && <div className="card-body border border-primary-subtle">
				<div><b>Grade:</b> {Grade}</div>
				<div><b>GPA:</b> {GPA}</div>
			</div>}

		</div>
	</div>;
}