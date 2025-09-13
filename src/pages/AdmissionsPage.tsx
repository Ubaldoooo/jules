import React, { useState } from 'react';
import styles from './AdmissionsPage.module.css';
import InputField from '../components/common/InputField';

interface FormState {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
}

interface FormErrors {
  parentName?: string;
  email?: string;
  phone?: string;
  studentName?: string;
}

const AdmissionsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.parentName) newErrors.parentName = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido';
    }
    if (!formData.phone) newErrors.phone = 'El teléfono es requerido';
    if (!formData.studentName) newErrors.studentName = 'El nombre del estudiante es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData);
      // Here you would typically send the data to a server
      alert('Formulario enviado con éxito!');
      setFormData({ parentName: '', email: '', phone: '', studentName: '' });
    }
  };

  return (
    <div className={styles.admissionsPage}>
      <h1>Formulario de Admisiones</h1>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <InputField
          label="Nombre del Padre/Madre"
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          error={errors.parentName}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Teléfono"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <InputField
          label="Nombre del Estudiante"
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          error={errors.studentName}
        />
        <button type="submit" className={styles.submitButton}>
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default AdmissionsPage;
