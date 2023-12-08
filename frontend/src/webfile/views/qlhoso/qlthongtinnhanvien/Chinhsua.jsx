import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Chinhsua = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idns = timid.get('idns');

    const [Nhansu, setNhansu] = useState({
        Hoten: '',
        Cccd: '',
        Mnv: '',
        Sdt: '',
        luong: '',
        Chucvu: ''
    },[])
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            Hoten: Nhansu.Hoten,
            Cccd: Nhansu.Cccd,
            Mnv: Nhansu.Mnv,
            Sdt: Nhansu.Sdt,
            luong: Nhansu.luong,
            Chucvu: Nhansu.Chucvu
        };

        axios.put('http://localhost:3000/nhansu/' + idns, dataToSend)
            .then(res => { navigate('/quanlythongtinnhanvien') }).catch(err => console.log(err));
    }

    const [Chucvu, setChucvu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/chucvu')
            .then(response => { if (response.data) { setChucvu(response.data); } else { alert('No data found'); } }).catch(err => console.log(err));
    }, [])
    useEffect(() => {
        axios.get("http://localhost:3000/nhansu/" + idns)
            .then(Response => { if (Response.data) { setNhansu(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err))
    }, [])
    return (
        <div className=''>
            <div className=''>
                <h1 className=''>Chỉnh Sửa Nhân Viên</h1>
                <form className='form-them-nv' onSubmit={handleSubmit}>
                    <div className='tachbentrong-themnv'>
                        <div className='namngang'>
                            <div>
                                <div className='motcombo-input'>
                                    <label >Họ Tên:</label><br />
                                    <input type="text" placeholder='Nhap Hoten' value={Nhansu.Hoten} onChange={(e) => setNhansu({ ...Nhansu, Hoten: e.target.value })} required />
                                </div>
                                <div className='motcombo-input'>
                                    <label for="inputCCCD" className="" htmlFor="CCCD">CCCD:</label><br />
                                    <input type="number" placeholder='Nhap CCCD' value={Nhansu.Cccd} onChange={(e) => setNhansu({ ...Nhansu, Cccd: e.target.value })} required />
                                </div>
                                <div className='motcombo-input'>
                                    <label for="inputID" className="" htmlFor="Mnv">Mã Nhân Viên:</label><br />
                                    <input type="text" placeholder='Nhap Mnv' value={Nhansu.Mnv} onChange={(e) => setNhansu({ ...Nhansu, Mnv: e.target.value })} required />
                                </div>
                            </div>
                            <div>
                                <div className='motcombo-input'>
                                    <label for="inputSdt" className="" htmlFor="SDT">SDT:</label><br />
                                    <input type="number" placeholder='Nhap SDT' value={Nhansu.Sdt} onChange={(e) => setNhansu({ ...Nhansu, Sdt: e.target.value })} required />
                                </div>
                                <div className='motcombo-input'>


                                    <label for="inputLuong" className="">Lương:</label><br />
                                    <input type="number" placeholder='Nhap Luong' value={Nhansu.luong} onChange={(e) => setNhansu({ ...Nhansu, luong: e.target.value })} required />
                                </div>
                                <div className='motcombo-input'>
                                    <div className='col-12'>
                                        <label>Chức Vụ:</label>
                                        <select className='' onChange={(e) => setNhansu({ ...Nhansu, Chucvu: e.target.value })} value={Nhansu.Chucvu}><option value="">Select Chuc vu</option>
                                            {Chucvu.map((cv) => (
                                                <option key={cv._id} value={cv._id}>
                                                    {cv.Tenchucvu}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='ngoai-them-nut-nv'>
                            <button className='them-nut'>sửa Nhan vien</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chinhsua