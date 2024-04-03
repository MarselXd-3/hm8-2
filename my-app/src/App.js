import React from 'react';
import { useForm } from 'react-hook-form';

function FormWithHookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки формы');
      }

      console.log('Форма успешно отправлена');
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div>
      <h2>Форма с использованием react-hook-form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя:</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span style={{ color: 'red' }}>Это поле обязательно</span>}
        </div>
        <div>
          <label>Фамилия:</label>
          <input type="text" {...register('username', { required: true })} />
          {errors.username && <span style={{ color: 'red' }}>Это поле обязательно</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span style={{ color: 'red' }}>Это поле обязательно</span>}
        </div>
        <div>
          <label>Номер телефона:</label>
          <input type="tel" {...register('phone')} />
        </div>
        <div>
          <label>Веб-сайт:</label>
          <input type="url" {...register('website')} />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default FormWithHookForm;
