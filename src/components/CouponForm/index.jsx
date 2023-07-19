import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCouponRequest } from '../../async_actions/post_req';
import s from "./style.module.css"
import ErrorModalPhone from '../ErrorModalPhone';

const CouponForm = () => {
  const [formData, setFormData] = useState({
    phone: '+49',
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const couponRequestData = useSelector((state) => state.couponRequest.couponData);
  const error = useSelector((state) => state.couponRequest.error);
  const isValidPhoneNumber = (phoneNumber) => /^\+?[\d- ]{6,14}$/.test(phoneNumber.replace(/[ \-]/g, ''));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

 

       // Сбрасываем ошибку, если она существует, при изменении поля формы
       if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: '' });
      }
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Валидация формы перед отправкой
  const validationErrors = {};
    if (!formData.phone) {
      validationErrors.phone = 'Введите номер телефона';
    } else if (!isValidPhoneNumber(formData.phone)) {
      validationErrors.phone = 'Некорректный номер телефона';
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        dispatch(sendCouponRequest(formData));
    } else {
        setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрываем всплывающее окно
  };

  return (
    <div className={s.coupon_form}>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button type="submit">Get a discount</button>
      </form>
      {/* Всплывающее окно с ошибкой */}
      <ErrorModalPhone
        className={s.error_modal}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        errorMessage="Пожалуйста, проверьте номер телефона"
      />
    </div>
  );
};

export default CouponForm;