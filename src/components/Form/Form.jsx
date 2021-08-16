import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
  const [mail, setMail] = useState('');

  const onChange = (e) => {
    setMail(e.target.value);
  };
  return (
    <form className={styles.form}>
      <label htmlFor='mail' className={styles.label}>
        Want us to contact you?
      </label>
      <input
        type='email'
        name='mail'
        placeholder='Email'
        value={mail}
        onChange={onChange}
        className={styles.input}
      />
      <button className={styles.button}>Join</button>
    </form>
  );
};

export default Form;
