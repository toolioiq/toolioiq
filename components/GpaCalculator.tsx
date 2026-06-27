"use client";

import { useState } from "react";

type Course = {
  grade: string;
  credits: string;
};

const gradePoints: Record<string, number> = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { grade: "A", credits: "3" },
    { grade: "B", credits: "3" },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const [error, setError] = useState("");

  const updateCourse = (
    index: number,
    field: keyof Course,
    value: string
  ) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: "A", credits: "3" }]);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const calculateGpa = () => {
    setError("");
    setGpa(null);

    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credits = Number(course.credits);

      if (!course.grade || isNaN(credits) || credits <= 0) {
        setError("Please enter valid grades and credit hours.");
        return;
      }

      totalPoints += gradePoints[course.grade] * credits;
      totalCredits += credits;
    }

    setGpa(Number((totalPoints / totalCredits).toFixed(2)));
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      {courses.map((course, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block font-medium mb-1">Grade</label>
            <select
              value={course.grade}
              onChange={(e) => updateCourse(index, "grade", e.target.value)}
              className="border rounded-lg p-3 w-full"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Credits</label>
            <input
              type="number"
              value={course.credits}
              onChange={(e) => updateCourse(index, "credits", e.target.value)}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <button
            onClick={() => removeCourse(index)}
            className="border px-4 py-3 rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex gap-3">
        <button onClick={addCourse} className="border px-6 py-3 rounded-lg">
          Add Course
        </button>

        <button
          onClick={calculateGpa}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Calculate GPA
        </button>
      </div>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      {gpa !== null && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="text-2xl font-bold mb-2">Your GPA</h2>
          <p className="text-xl">
            <strong>{gpa}</strong>
          </p>
        </div>
      )}
    </div>
  );
}