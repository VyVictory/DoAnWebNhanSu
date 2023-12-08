import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../viewcss/qlhoso/qlthongtinnhanvien/Qlthongtinnhanvien.css'
import { Link, useNavigate } from 'react-router-dom';
const Qlthongtinnhanvien = () => {
    const navigate = useNavigate()
    const [Nhansus, setNhansu] = useState([])
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');
    const UQuyentruyvan = sessionStorage.getItem('UQuyentruyvan');
    const [Chucvu, setChucvu] = useState([])
    const inputRef = useRef(null);
    useEffect(() => {
        axios.get('http://localhost:3000/nhansu')
            .then((res) => setNhansu(res.data)).catch(err => console.log(err))

        axios.get('http://localhost:3000/chucvu')
            .then(Response => { if (Response.data) { setChucvu(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        if (UQuyentruyvan.includes("xoa")||UQuyentruyvan==='admin') {
                    axios.delete("http://localhost:3000/nhansu/" + id)
            .then(res => {
                if (res.data) { setNhansu(Nhansus.filter(ns => ns._id !== id)); navigate('/quanlythongtinnhanvien') } else (alert(res.data)
                )
            })
        }
        else return alert('xóa không thành công do không có quyền')
    }
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    function resettimkiem() {
        setIsButtonClicked(false);
    }
    const [loc, setLoc] = useState([]);
    const [tutim, setTutim] = useState({
        tutim: ''
    })
    const [selectedOption, setSelectedOption] = useState({
        selecto: ''
    });
    const handleTim = () => {
        const a = tutim.tutim ? tutim.tutim + '' : 'Hoten';
        const filteredNhansus = Nhansus.filter(ns => {
            const b = ns[selectedOption.selecto] + '';
            if (typeof a === 'string' && typeof b === 'string') {
                return b.includes(a);
            }
            return false;
        });
        setLoc(filteredNhansus);
        setIsButtonClicked(true);
    };
    function resettimkiemtext() {
        inputRef.current.value = ''; // Xóa giá trị của input
    };
    const tieudedanhsach = () => {
        return <thead>
            <tr>
                <th>Hoten</th>
                <th>Cccd</th>
                <th>Mnv</th>
                <th>Sdt</th>
                <th>luong</th>
                <th>Chucvu </th>
                <th>Quyền Hạng</th>
                <th> Tuy chon </th>
            </tr>
        </thead>
    }
    return (
        <div>
            <h1 >QUẢN LÝ HỒ SƠ NHÂN SỰ</h1>
            <div className='bt-them-page'>
                            <Link to="/ThemNhanvien" className='btn btn-success'>
                Thêm nhân viên
            </Link>
            </div>
            <h3>
                <select onChange={(e) => setSelectedOption({ ...selectedOption, selecto: e.target.value })}>
                    <option value='Hoten'>Chọn một trường</option>
                    <option value="Hoten">Họ Tên</option>
                    <option value="Cccd">Cccd</option>
                    <option value="Mnv">Mnv</option>
                    <option value="Sdt">Sdt</option>
                    <option value="luong">Luong</option>
                </select>

                <input className='input-tim-kiem' type='text' ref={inputRef} onChange={(e) => { setTutim({ ...tutim, tutim: e.target.value }) }} placeholder='từ khóa tìm'></input>
                <button className='cachra' onClick={handleTim}>Tìm</button>
                <button className='cachra'  onClick={() => { resettimkiem(); resettimkiemtext(); }}>reset</button>
            </h3>

            {isButtonClicked ? (
                <table className='table'>
                    {tieudedanhsach()}
                    <tbody>
                        {
                            loc.map(e => {
                                if(!Chucvu.some(item => item._id === e.Chucvu)){
                                    return {
                                        id: e._id,
                                        Hoten: e.Hoten,
                                        Cccd: e.Cccd,
                                        Mnv: e.Mnv,
                                        Sdt: e.Sdt,
                                        luong: e.luong,
                                        Tenchucvu: 'không có',
                                        Quyenhang: 'không',
                                }}
                                const correspondingChucvu = Chucvu.find((c) => c._id === e.Chucvu);
                                if (correspondingChucvu && +correspondingChucvu.Quyenhang > +UQuyenhang) {
                                    if (Chucvu.some(item => item._id === e.Chucvu)) {
                                        return {
                                            id: e._id,
                                            Hoten: e.Hoten,
                                            Cccd: e.Cccd,
                                            Mnv: e.Mnv,
                                            Sdt: e.Sdt,
                                            luong: e.luong,
                                            Tenchucvu: correspondingChucvu.Tenchucvu,
                                            Quyenhang: correspondingChucvu.Quyenhang,

                                        };
                                    }
                                    else {
                                    }

                                } else {
                                    return null;
                                }
                            })
                                .filter(Boolean) // Lọc bỏ các phần tử null
                                .sort((a, b) => a.Quyenhang - b.Quyenhang) // Sắp xếp theo Quyenhang tăng dần
                                .map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.Hoten}</td>
                                        <td>{e.Cccd}</td>
                                        <td>{e.Mnv}</td>
                                        <td>{e.Sdt}</td>
                                        <td>{e.luong}</td>
                                        <td>{e.Tenchucvu ? e.Tenchucvu : '-'}</td>
                                        <td>{e.Quyenhang ? e.Quyenhang : '-'}</td>
                                        <td className='td-tuychon'>
                                            <Link to={'/quanlythongtinnhanvien/Chinhsua/&idns=' + e.id} className='btn btn-info btn-sm me-2'> Chinh sua </Link>
                                            <button className='all-bt-delete' onClick={() => handleDelete(e.id)}> Xoa</button>
                                        </td>
                                    </tr>
                                ))
                        }

                    </tbody>
                </table>
            ) : (
                <table className='table'>
                    {tieudedanhsach()}
                    <tbody>
                        {
                            Nhansus.map(e => {
                                if(!Chucvu.some(item => item._id === e.Chucvu)){
                                    return {
                                        id: e._id,
                                        Hoten: e.Hoten,
                                        Cccd: e.Cccd,
                                        Mnv: e.Mnv,
                                        Sdt: e.Sdt,
                                        luong: e.luong,
                                        Tenchucvu: 'không có',
                                        Quyenhang: 'không',
                                }}
                                const correspondingChucvu = Chucvu.find((c) => c._id === e.Chucvu);
                                if (correspondingChucvu && +correspondingChucvu.Quyenhang > +UQuyenhang) {
                                    if (Chucvu.some(item => item._id === e.Chucvu)) {
                                        return {
                                            id: e._id,
                                            Hoten: e.Hoten,
                                            Cccd: e.Cccd,
                                            Mnv: e.Mnv,
                                            Sdt: e.Sdt,
                                            luong: e.luong,
                                            Tenchucvu: correspondingChucvu.Tenchucvu,
                                            Quyenhang: correspondingChucvu.Quyenhang,

                                        };
                                    }
                                    else {
                                    }

                                } else {
                                    return null;
                                }
                            })
                                .filter(Boolean) // Lọc bỏ các phần tử null
                                .sort((a, b) => a.Quyenhang - b.Quyenhang) // Sắp xếp theo Quyenhang tăng dần
                                .map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.Hoten}</td>
                                        <td>{e.Cccd}</td>
                                        <td>{e.Mnv}</td>
                                        <td>{e.Sdt}</td>
                                        <td>{e.luong}</td>
                                        <td>{e.Tenchucvu ? e.Tenchucvu : '-'}</td>
                                        <td>{e.Quyenhang ? e.Quyenhang : '-'}</td>
                                        <td className='td-tuychon'>
                                            <Link to={'/quanlythongtinnhanvien/Chinhsua/&idns=' + e.id} className='btn btn-info btn-sm me-2'> Chinh sua </Link>
                                            <button className='all-bt-delete' onClick={() => handleDelete(e.id)}> Xoa</button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            )
            }
        </div>
    );
}

export default Qlthongtinnhanvien;
