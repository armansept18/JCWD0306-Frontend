import { useFormik } from 'formik';
import { ReactComponent as Shape } from '../assets/shape.svg';
import { ReactComponent as Elipse } from '../assets/Ellipse 11.svg';
import { ReactComponent as Clock } from '../assets/clock.svg';
import { Task } from '../components/task';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from '../components/loading';
import { api } from '../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../components/navbar';
import { types } from '../redux/types';
export const EditPage = () => {
 const userSelector = useSelector((state) => state.auth);
 const dispatch = useDispatch();
 const nav = useNavigate();
 const formik = useFormik({
  initialValues: {
   fullname: userSelector.fullname,
   email: userSelector.email
  },
  onSubmit: async (values) => {
   const data = await api
    .patch(`/users/${userSelector.id}`, values)
    .then((res) => res.data.payload);
   localStorage.setItem('auth', JSON.stringify(data));
   dispatch({
    type: types.login,
    payload: data
   });
  }
 });

 useEffect(() => {
  if (!userSelector.id) nav('/login');
 }, []);

 return (
  <>
   <Navbar />
   <div className="bg">
    <Shape className="shape" />
    <div className="center full col gap-10">
     <Elipse />
     <div className="semibold white">edit profile</div>
    </div>
   </div>
   <div className="center">
    <div className="container">
     <div className="container2 col gap-15 center">
      <div className="end semibold full">Good Morning</div>
      <div className="center">
       <Clock />
      </div>

      <input
       className="input"
       value={formik.values.fullname}
       onChange={(e) => formik.setFieldValue('fullname', e.target.value)}
       placeholder="fullname"
      />
      <input
       className="input"
       value={formik.values.email}
       onChange={(e) => formik.setFieldValue('email', e.target.value)}
       placeholder="email"
      />

      <button onClick={formik.handleSubmit}>SUBMIT</button>
     </div>
    </div>
   </div>
  </>
 );
};
