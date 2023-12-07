import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ThemChucvu = () => {
    const [ChucVu, setChucVu] = useState({
        Tenchucvu: '',
        Quyenhang: '',
        Ghichu: '',
    });
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataToSend = {
            Tenchucvu: ChucVu.Tenchucvu,
            Quyenhang: ChucVu.Quyenhang,
            Ghichu: ChucVu.Ghichu,
        };
        if (dataToSend.Quyenhang < UQuyenhang) {
            alert("không thể thêm chức vụ mới có quyền hạng cao hơn bản thân. quyền hạng bản thân: " + UQuyenhang)
        } else {
            axios.post('http://localhost:3000/chucvu', dataToSend)
                .then(Response => { if (Response.data) { navigate('/quanlycongtacnhanvien/quanlyvitri') } else { alert(Response.data) } }).catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex justify-cotent-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h1>Thêm Chức Vụ</h1>
                <form className='form-them' onSubmit={handleSubmit}>

                    <div className='themcv-container'>
                        <div className='motcombo-input'>
                            <label>Chức Vụ: </label><br />
                            <input required type="text" onChange={(e) => setChucVu({ ...ChucVu, Tenchucvu: e.target.value })} placeholder='Nhập Chức Vụ' />
                        </div>
                        <div  className='motcombo-input'>
                            <label>Quyền Hạng Chức Vụ: </label><br />
                            <input type='number' onChange={(e) => setChucVu({ ...ChucVu, Quyenhang: e.target.value })} placeholder='Nhập Quyền Hạng'></input>

                            <span class="ctk-tooltip-container">
                                <span class="ctk-hover-element" title="Quyền Hạng này phân cấp cho chức vụ nhằm xác định chức vụ lớn hơn cao nhất là 1"> ?</span>
                            </span>
                        </div>
                        <div className='motcombo-input'>
                            <label>Ghi Chú: </label><br />
                            <input required type="text" onChange={(e) => setChucVu({ ...ChucVu, Ghichu: e.target.value })} placeholder='Nhập Ghi Chú' />
                        </div>
                        <div className='ngoai-them-nut'>
                            <button className='them-nut'>Thêm Chức Vụ</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default ThemChucvu