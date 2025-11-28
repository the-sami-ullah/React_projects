import React, { useState } from "react";
import styles from "./Formm.module.css";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Formm = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    number: "",
    about: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!form.firstname.trim()) newErrors.firstname = "First name is required";
    if (!form.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!form.gender) newErrors.gender = "Please select a gender";

    // Phone number: must be 11 digits (Pakistan)
    if (!/^[0-9]{11}$/.test(form.number))
      newErrors.number = "Phone number must be exactly 11 digits";

    if (!form.about.trim()) newErrors.about = "About section is required";

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData(form);
    setShowToast(true);
  };

  // Reset form
  const handleReset = () => {
    setForm({
      firstname: "",
      lastname: "",
      gender: "",
      number: "",
      about: "",
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <>
      {/* Toast Alert */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          bg="success"
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Form submitted successfully!</Toast.Body>
        </Toast>
      </ToastContainer>

      <form className={styles.container} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Form</h1>

        <label>First Name</label>
        <input
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your first name"
        />
        {errors.firstname && <p className={styles.error}>{errors.firstname}</p>}

        <label>Last Name</label>
        <input
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your last name"
        />
        {errors.lastname && <p className={styles.error}>{errors.lastname}</p>}

        <label>Gender</label>
        <div className={styles.genderGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={form.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        {errors.gender && <p className={styles.error}>{errors.gender}</p>}

        <label>Phone Number</label>
        <input
          name="number"
          value={form.number}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter 11-digit number"
        />
        {errors.number && <p className={styles.error}>{errors.number}</p>}

        <label>About</label>
        <textarea
          name="about"
          value={form.about}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Enter about description"
        ></textarea>
        {errors.about && <p className={styles.error}>{errors.about}</p>}

        <div className={styles.buttons}>
          <Button type="button" variant="success" onClick={handleReset}>
            Reset
          </Button>

          <Button type="submit" variant="warning">
            Submit
          </Button>
        </div>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className={styles.outputBox}>
          <h2>Submitted Data:</h2>
          <p><strong>First Name:</strong> {submittedData.firstname}</p>
          <p><strong>Last Name:</strong> {submittedData.lastname}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Phone Number:</strong> {submittedData.number}</p>
          <p><strong>About:</strong> {submittedData.about}</p>
        </div>
      )}
    </>
  );
};

export default Formm;
