// app/page.tsx
"use client"  // Add this line at the top to mark it as a client component

import { useState } from "react";
import ResumeForm from "../app/ResumeForm";
import { ResumeFormData } from "./types";

const Home = () => {
  const [resumeData, setResumeData] = useState<ResumeFormData | null>(null);

  const handleFormSubmit = (data: ResumeFormData) => {
    setResumeData(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detailed Resume Builder</h1>
      <ResumeForm onFormSubmit={handleFormSubmit} />

      {resumeData && (
        <div className="resume-preview">
          <h2>Resume Preview</h2>

          <div className="section">
            <p><strong>Name:</strong> {resumeData.name}</p>
            <p><strong>FatherName:</strong> {resumeData.fatherName}</p>
            <p><strong>Email:</strong> {resumeData.email}</p>
            <p><strong>Mobile:</strong> {resumeData.mobile}</p>
            <p><strong>Address:</strong> {resumeData.address}</p>
            <p><strong>Date of Birth:</strong> {resumeData.dob}</p>
            <p><strong>Marital Status:</strong> {resumeData.maritalStatus}</p>
            <p><strong>Nationality:</strong> {resumeData.nationality}</p>
            <p><strong>Religion:</strong> {resumeData.religion}</p>
            <p><strong>Gender:</strong> {resumeData.gender}</p>
            
            <p><strong>NIC:</strong> {resumeData.nic}</p>
            <p><strong>Sure Name:</strong> {resumeData.sureName}</p>
          </div>

          <div className="section">
            <h3>Education</h3>
            <p>{resumeData.education}</p>
          </div>

          <div className="section">
            <h3>Projects</h3>
            <p>{resumeData.projects}</p>
          </div>

          <div className="section">
            <h3>Experience</h3>
            <p>{resumeData.experience}</p>
          </div>

          <div className="section">
            <h3>Languages</h3>
            <p>{resumeData.languages}</p>
          </div>

          <div className="section">
            <h3>Skills</h3>
            <p>{resumeData.skills}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
