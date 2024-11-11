// app/components/ResumeForm.tsx
import { useState } from "react";
import { ResumeFormData } from "../app/types";

const ResumeForm = ({ onFormSubmit }: { onFormSubmit: (data: ResumeFormData) => void }) => {
  const [formData, setFormData] = useState<ResumeFormData>({
    name: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    maritalStatus: "",
    nationality: "",
    religion: "",
    gender: "",
    fatherName: "",
    nic: "",
    sureName: "",
    education: "",
    projects: "",
    experience: "",
    languages: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>FatherName:</label>
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Marital Status:</label>
        <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required />
      </div>
      <div>
        <label>Nationality:</label>
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
      </div>
      <div>
        <label>Religion:</label>
        <input type="text" name="religion" value={formData.religion} onChange={handleChange} required />
      </div>
      <div>
        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
      </div>
      <div>
        <label>NIC:</label>
        <input type="text" name="nic" value={formData.nic} onChange={handleChange} required />
      </div>
      <div>
        <label>Sure Name:</label>
        <input type="text" name="sureName" value={formData.sureName} onChange={handleChange} required />
      </div>
      <div>
        <label>Education:</label>
        <textarea name="education" value={formData.education} onChange={handleChange} required />
      </div>
      <div>
        <label>Projects:</label>
        <textarea name="projects" value={formData.projects} onChange={handleChange} required />
      </div>
      <div>
        <label>Experience:</label>
        <textarea name="experience" value={formData.experience} onChange={handleChange} required />
      </div>
      <div>
        <label>Languages:</label>
        <textarea name="languages" value={formData.languages} onChange={handleChange} required />
      </div>
      <div>
        <label>Skills:</label>
        <textarea name="skills" value={formData.skills} onChange={handleChange} required />
      </div>
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
