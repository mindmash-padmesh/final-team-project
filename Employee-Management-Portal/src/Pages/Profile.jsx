import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaBuilding } from "react-icons/fa";
import "../Styles/Profile.css";
import Button from "../Component/Button";
import Card from '../Component/Card';
import Input from "../Component/Input";

function Profile() {
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");
    return savedProfile
      ? JSON.parse(savedProfile)
      :{
        name: "Emily Johnson",
        email: "emily123@gmail.com",
        phone: "+91 98765 43210",
        role: "Administrator",
        department: "Human Resources",
      };
  });

  const validateProfile = () => {
    const namePattern = /^[A-Za-z][A-Za-z\s.'-]{2,49}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanedPhone = profile.phone.replace(/[\s-]/g,"");
    const phonePattern = /^(\+91)?[6-9]\d{9}$/;

    if (!namePattern.test(profile.name.trim())) {
      return "Enter a valid name with at least 3 characters.";
    }
    if (!emailPattern.test(profile.email.trim())) {
      return "Enter a valid email address.";
    }
    if (!phonePattern.test(cleanedPhone)) {
      return "Enter a valid 10-digit Indian phone number.";
    }
    if (profile.role.trim().length < 2) {
      return "Role must contain at least 2 characters.";
    }
    if (profile.department.trim().length < 2) {
      return "Department must contain at least 2 characters.";
    }
    return "";
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleEdit = () => {
    if (!isEditing) {
      setError("");
      setIsEditing(true);
      return;
    }
    const validationError = validateProfile();
    if (validationError) {
      setError(validationError);
      return;
    }
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
    setError("");
    setIsEditing(false);
  };

  return (
    <main className="profile-container">
        <h1>My Profile</h1>
      <Card className="profile-card">
        <h2> <FaUser/> &nbsp;
          {isEditing ? ( <Input type="text" name="name" value={profile.name} onChange={handleChange}/> ) : ( profile.name )}
        </h2>
        <p>
          <strong> <FaEnvelope /> &nbsp; Email:</strong> 
          {isEditing ? ( <Input type="email" name="email" value={profile.email} onChange={handleChange}/> ) : ( profile.email )}
        </p>
        <p>
          <strong> <FaBriefcase/> &nbsp; Role:</strong>
          {isEditing ? (  <Input type="text" name="role" value={profile.role} onChange={handleChange}/> ) : ( profile.role )}
        </p>
        <p>
          <strong> <FaBuilding /> &nbsp; Department:</strong>
          {isEditing ? ( <Input type="text" name="department" value={profile.department} onChange={handleChange} /> ) : ( profile.department )}
        </p>
        <p>
          <strong> <FaPhone /> &nbsp; Phone:</strong>
          {isEditing ? ( <Input type="tel" name="phone" value={profile.phone} onChange={handleChange} /> ) : ( profile.phone )}
        </p>
        {error && (<p className="validation-error" role="alert">{error} </p>)}
        <div className="edit-btn">
          <Button text={isEditing ? "Save Profile" : "Edit Profile"} onClick={handleEdit} className="edit-profile-btn" />
        </div>
      </Card>
    </main>
  );
}

export default Profile;