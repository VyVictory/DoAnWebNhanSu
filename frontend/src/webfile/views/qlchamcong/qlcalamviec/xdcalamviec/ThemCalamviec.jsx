import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ThemNhanvien = () => {
    const [Calam, setCalam] = useState({
        Tencalam: '',
        Starttime: '',
        Endtime: '',
    })
    const [Day, setDay] = useState({
        Ngay: '',
        Thang: '',
        Nam: '',
      });
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            Tencalam: Calam.Tencalam,
            Starttime: Calam.Starttime,
            Endtime: Calam.Endtime,
            Ngay: Day.Ngay,
            Thang: Day.Thang,
            Nam: Day.Nam
        };
        if (dataToSend.Nam > 9999) {
            alert("vui lòng kiểm tra lại năm");
        }
        else {
            axios.post('http://localhost:3000/calamviec', dataToSend)
                .then(_res => {
                    navigate('/quanlychamcong/quanlycalamviec/xaydungcalamviec')
                })
                .catch(err => console.log(err));
        }

    }

    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value);
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1; // Adding 1 because getMonth returns zero-based month index
        const year = selectedDate.getFullYear();
    
        setDay({
          Ngay: day < 10 ? `0${day}` : `${day}`, // Ensure leading zero for single-digit days
          Thang: month < 10 ? `0${month}` : `${month}`, // Ensure leading zero for single-digit months
          Nam: `${year}`,
        });
      };

    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className=''>
                <h1 className=''>Thêm Ca Làm</h1>
                <form className='form-them' onSubmit={handleSubmit}>
                    <div className=''>
                        <label className="">Tên ca làm:</label>
                        <input type="text" placeholder='Nhap Tencalam' className=''
                            onChange={(e) => setCalam({ ...Calam, Tencalam: e.target.value })}
                            required />
                    </div>

                    <div className=''>
                        <label className="">Starttime:</label>
                        <input type="time" placeholder='Nhap Starttime' className=''
                            onChange={(e) => setCalam({ ...Calam, Starttime: e.target.value })}
                            required />
                    </div>

                    <div className=''>
                        <label className="">Endtime:</label>
                        <input type="time" placeholder='Nhap Endtime' className=''
                            onChange={(e) => setCalam({ ...Calam, Endtime: e.target.value })}
                            required />
                    </div>


                    <label htmlFor="dateInput">Select a date: </label>
                    <input
                        type="date"
                        id="dateInput"
                        onChange={handleDateChange}
                        value={`${Day.Nam}-${Day.Thang}-${Day.Ngay}`} // Bind the selected value for the date input
                    />
                    <br/>
                    <button className=''>Them Ca Lam</button>
                </form>
            </div>
        </div>

    )
}

export default ThemNhanvien