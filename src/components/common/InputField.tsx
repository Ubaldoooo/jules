import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default InputField;
