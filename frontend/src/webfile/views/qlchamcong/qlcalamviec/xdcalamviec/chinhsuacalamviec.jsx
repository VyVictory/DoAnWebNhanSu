import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Chinhsua = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idcl = timid.get('idcl');

    const [Calam, setCalam] = useState({
        Tencalam: '',
        Starttime: '',
        Endtime: '',
        Ngay: '',
        Thang: '',
        Nam: ''
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
            Ngay: +Day.Ngay,
            Thang: +Day.Thang,
            Nam: +Day.Nam
        };
        if (dataToSend.Nam > 9999) {
            alert("vui lòng kiểm tra lại năm");
        }
        else {
            axios.put('http://localhost:3000/calamviec/' + idcl, dataToSend)
                .then(_res => {
                    navigate('/quanlychamcong/quanlycalamviec/xaydungcalamviec')
                })
                .catch(err => console.log(err));
        }
    }
    useEffect(() => {
        axios.get("http://localhost:3000/calamviec/" + idcl)
            .then(Response => {
                if (Response.data) {
                    setCalam(Response.data);
                } else {
                    alert(Response.data)
                }
            })
            .catch(err => console.log(err))
    }, [])
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
        <div className=''>
            <div className=''>
                <h3 className=''>Chỉnh Sửa Ca Làm Việc</h3>
                <form className='form-them' onSubmit={handleSubmit}>
                <div className='center-form'>
                    <div className='motcombo-input'>
                        <label className="">Tên ca làm:</label><br />
                        <input type="text" value={Calam.Tencalam} placeholder='Nhap Tencalam' className=''
                            onChange={(e) => setCalam({ ...Calam, Tencalam: e.target.value })}
                            required />
                    </div>

                    <div className='motcombo-input'>
                        <label className=''>Starttime:</label><br />
                        <input type="time" value={Calam.Starttime} placeholder='Nhap Starttime' className=''
                            onChange={(e) => setCalam({ ...Calam, Starttime: e.target.value })}
                            required />
                    </div>

                    <div className='motcombo-input'>
                        <label className="">Endtime:</label><br />
                        <input type="time" value={Calam.Endtime} placeholder='Nhap Endtime' className=''
                            onChange={(e) => setCalam({ ...Calam, Endtime: e.target.value })}
                            required />
                    </div>
                    <div className='motcombo-input'>
                        <label htmlFor="dateInput">Select a date: </label><br />
                        <input
                            type="date"
                            id="dateInput"
                            onChange={handleDateChange}
                        ></input>
                    </div>
                  
                    </div>
                    <div className='ngoai-bt-themcalam'>
                          <button className='bt-themcalam'>sửa</button>  
                    </div>
            
                </form>
            </div>
        </div>
    )
}

export default Chinhsua