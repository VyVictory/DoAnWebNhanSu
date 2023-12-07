import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Chinhsuachucvu = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idcv = timid.get('idcv');
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');
    const [Chucvu, setChucvu] = useState({
        Tenchucvu: '',
        Quyenhang: '',
        Ghichu: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            Tenchucvu: Chucvu.Tenchucvu,
            Quyenhang: Chucvu.Quyenhang,
            Ghichu: Chucvu.Ghichu
        };
        if (dataToSend.Quyenhang < UQuyenhang) {
            alert("không thể thêm chức vụ mới có quyền hạng cao hơn bản thân. quyền hạng bản thân: " + UQuyenhang)
        } else {
            axios.put('http://localhost:3000/chucvu/' + idcv, dataToSend)
                .then(res => {
                    navigate('/quanlycongtacnhanvien/quanlyvitri')
                })
                .catch(err => console.log(err));
        }

    }

    useEffect(() => {
        axios.get('http://localhost:3000/chucvu/' + idcv)
            .then(response => {
                if (response.data) {
                    setChucvu(response.data);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div className='Chinhsuachucvu'>
            <h1>Chỉnh Sửa Chức Vụ</h1>
            <form className='form-them' onSubmit={handleSubmit}>
                <div className='tachbentrong-chinhsua'>
                    <div className='motcombo-input'>
                        <label >Tên Chức Vụ:</label><br/>
                        <input type="text" placeholder='Nhập Tên Chức Vụ' value={Chucvu.Tenchucvu} onChange={(e) => setChucvu({ ...Chucvu, Tenchucvu: e.target.value })} required /></div>
                    <div className='motcombo-input'>
                        <label>Quyền Hạng:</label><br/>
                        <input type="text" placeholder='Nhập Quyền Hạng' value={Chucvu.Quyenhang} onChange={(e) => setChucvu({ ...Chucvu, Quyenhang: e.target.value })} />
                    </div>

                    <div className='motcombo-input'>
                        <label>Ghi Chú:</label><br/>
                        <input type="text" placeholder='Nhập Ghi Chú' value={Chucvu.Ghichu} onChange={(e) => setChucvu({ ...Chucvu, Ghichu: e.target.value })} />
                    </div>
                    <div className='ngoai-them-nut'>
                        <button className='them-nut'>sửa Chức Vụ</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Chinhsuachucvu;
