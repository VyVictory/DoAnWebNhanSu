import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ThemNhanvien = () => {
    const [Nhansu, setNhansu] = useState({
        Hoten: '',
        Cccd: '',
        Mnv: '',
        Sdt: '',
        luong: '',
        Chucvu: ''
    })
    const [Chucvu, setChucvu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/chucvu')
            .then(response => {
                if (response.data) {
                    setChucvu(response.data);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            Hoten: Nhansu.Hoten,
            Cccd: Nhansu.Cccd,
            Mnv: Nhansu.Cccd,
            Sdt: Nhansu.Cccd,
            luong: Nhansu.luong,
            Chucvu: Nhansu.Chucvu
        };
        if (dataToSend.Chucvu === '') {
            dataToSend.Chucvu = Chucvu[0];
        }
        axios.post('http://localhost:3000/nhansu', dataToSend)
            .then(_res => {
                navigate('/quanlythongtinnhanvien')
            })

            .catch(err => console.log(err));
    }


    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className=''>
                <h1 >Thêm Nhân Viên</h1>
                <form className='form-them-nv' onSubmit={handleSubmit}>
                    <div className='tachbentrong-themnv'>
                        <div className='namngang'>
                            <div>
                                <div className='motcombo-input'>
                                    <label for="inputTen" className="" htmlFor="Hoten">Họ Tên:</label><br />
                                    <input type="text" placeholder='Nhap Hoten' onChange={(e) => setNhansu({ ...Nhansu, Hoten: e.target.value })} required /> </div>

                                <div className='motcombo-input'>
                                    <label for="inputCCCD" className="" htmlFor="CCCD">CCCD:</label><br />
                                    <input type="number" placeholder='Nhap CCCD' onChange={(e) => setNhansu({ ...Nhansu, Cccd: e.target.value })} required /> </div>

                                <div className='motcombo-input'>
                                    <label for="inputID" className="" htmlFor="Mnv">Mã Nhân Viên:</label><br />
                                    <input type="text" placeholder='Nhap Mnv' onChange={(e) => setNhansu({ ...Nhansu, Mnv: e.target.value })} required /> </div>
                            </div>
                            <div>
                                <div className='motcombo-input'>
                                    <label for="inputSdt" className="" htmlFor="SDT">Số Điện Thoại:</label><br />
                                    <input type="number" placeholder='Nhap SDT' onChange={(e) => setNhansu({ ...Nhansu, Sdt: e.target.value })} required /> </div>
                                <div className='motcombo-input'>
                                    <label for="inputLuong" className="">Lương:</label><br />
                                    <input type="number" placeholder='Nhap Luong' className='' onChange={(e) => setNhansu({ ...Nhansu, luong: e.target.value })} required />
                                </div>
                                <div className='motcombo-input'>
                                    <label for="inputChucvu" className="" >Chức Vụ:</label><br />
                                    <select name="Chucvu" id="Chucvu" className='' onChange={(e) => setNhansu({ ...Nhansu, Chucvu: e.target.value })}>
                                        {Chucvu.map((cv) => (
                                            <option key={cv._id} value={cv._id}>{cv.Tenchucvu}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className='ngoai-them-nut-nv'>
                            <button className='them-nut'>Them Nhan vien</button>
                        </div>

                    </div>
                </form>
            </div >
        </div >

    )
}

export default ThemNhanvien