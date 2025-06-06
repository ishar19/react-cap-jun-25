import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userName: "",
    mobile: "",
    tnc: false,
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    userName: false,
    mobile: false,
    tnc: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError((error) => { return { ...error, name: false, email: false, userName: false, mobile: false, tnc: false } })
    let error = false;
    if (formData.name.trim().length === 0) {
      setError((error) => { return { ...error, name: true } });
      error = true;
    }
    if (formData.email.trim().length === 0) {
      setError((error) => { return { ...error, email: true } });
      error = true;
    }
    if (formData.userName.trim().length === 0) {
      setError((error) => { return { ...error, userName: true } });
      error = true;
    }
    if (formData.mobile.trim().length === 0) {
      setError((error) => { return { ...error, mobile: true } });
      error = true;
    }
    if (formData.tnc === false) {
      setError((error) => { return { ...error, tnc: true } });
      error = true;
    }
    if (error === false) {
      alert("Form submitted successfully");
      navigate("/home");
    }
    else {
      return
    }


  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.image}>

        <p>
          Discover new things <br />on Superapp
        </p>
      </div>
      <div className={styles.formContainer}>
        <h2>Super App</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} placeholder="name" onChange={handleChange} style={{
            border: error.name ? "1px solid red" : null
          }} />
          {error.name && <p className={styles.error}>Name is required</p>}
          <input type="text" name="email" value={formData.email} placeholder="email" onChange={handleChange} style={{
            border: error.email ? "1px solid red" : null
          }} />
          {error.email && <p className={styles.error}>Email is required</p>}
          <input type="text" name="userName" value={formData.userName} placeholder="userName" onChange={handleChange} style={{
            border: error.userName ? "1px solid red" : null
          }} />
          {error.userName && <p className={styles.error}>Username is required</p>}
          <input type="text" name="mobile" value={formData.mobile} placeholder="mobile" onChange={handleChange} style={{
            border: error.mobile ? "1px solid red" : null
          }} />
          {error.mobile && <p className={styles.error}>Mobile is required</p>}
          <div className={styles.checkbox}>
            <input type="checkbox" name="tnc" id="tnc" checked={formData.tnc} onChange={() => setFormData({ ...formData, tnc: !formData.tnc })} />
            <label htmlFor="tnc">I agree to the Terms and Conditions</label>
          </div>
          {error.tnc && <p className={styles.error}>You must agree to the Terms and Conditions</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
