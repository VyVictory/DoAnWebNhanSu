import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Chinhsua = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idns = timid.get('idns');
    
    const [Nhansu, setNhansu] = useState({
        Hoten:'',
        Cccd:'',
        Mnv:'',
        Sdt:'',
        luong:'',
        Chucvu:''
    })
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
		axios.put('http://localhost:3000/nhansu/'+ idns ,dataToSend)
            .then(res => {navigate('/quanlythongtinnhanvien')}).catch(err => console.log(err));
	}

    const [Chucvu, setChucvu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/chucvu')
            .then(response => {if(response.data) {setChucvu(response.data);}else{alert('No data found');}}).catch(err => console.log(err));
        axios.get("http://localhost:3000/nhansu/"+ idns)
            .then(Response =>{if(Response.data) {setNhansu(Response.data);}else{alert(Response.data)}}).catch(err => console.log(err))
    },)
    
  return (
    <div className=''>
        <div className=''>
            <h3 className=''>Chinh sua Nhanvien</h3>
            <form className='' onSubmit={handleSubmit}>
                <div className=''>
                    <label >Ho Ten:</label>
                <input type="text" placeholder='Nhap Hoten' value={Nhansu.Hoten} onChange ={(e) => setNhansu({...Nhansu, Hoten: e.target.value})} required/>
                </div>
                <div className='col-12'>
                    <label for="inputCCCD" className="" htmlFor="CCCD">CCCD:</label>
                <input type="number" placeholder='Nhap CCCD' value={Nhansu.Cccd} onChange ={(e) => setNhansu({...Nhansu, Cccd: e.target.value})} required/>
                </div>
                <div className='col-12'>
                    <label for="inputID" className="" htmlFor="Mnv">Ma nhan vien:</label>
                <input type="text" placeholder='Nhap Mnv' value={Nhansu.Mnv} onChange ={(e) => setNhansu({...Nhansu, Mnv: e.target.value})} required />
                </div>
                <div className=''>
                    <label for="inputSdt" className="" htmlFor="SDT">SDT:</label>
                <input type="number" placeholder='Nhap SDT' value={Nhansu.Sdt} onChange ={(e) => setNhansu({...Nhansu, Sdt: e.target.value})}required/>
                </div>
                
                <label for="inputLuong" className="">Luong:</label>
                <input type="number" placeholder='Nhap Luong'value={Nhansu.luong} onChange ={(e) => setNhansu({...Nhansu, luong: e.target.value})}required/> 
                <div className='col-12'>
                    <label>Chuc vu:</label>
                    <select name="Chucvu" id="Chucvu" className='' onChange={(e) => setNhansu({ ...Nhansu, Chucvu: e.target.value })}>
                        {Chucvu.map((cv) => (
                            <option key={cv._id} value={cv._id} selected={Nhansu.Chucvu === cv._id}>{cv.Tenchucvu}</option>
                        ))}
                    </select>
                </div>
                <button className=''>sửa Nhan vien</button>
            </form>
        </div>
    </div>
  )
}

export default Chinhsua