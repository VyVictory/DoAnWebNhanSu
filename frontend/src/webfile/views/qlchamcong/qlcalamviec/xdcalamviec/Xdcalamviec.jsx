import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Xdcalamviec = () => {
    const navigate = useNavigate()
    const [Calams, setCalam] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [timtheo, setTimTheo] = useState('Tencalam');
    const UQuyentruyvan = sessionStorage.getItem('UQuyentruyvan');
    useEffect(() => {
        axios.get('http://localhost:3000/calamviec')
            .then((res) => setCalam(res.data))
            .catch(err => console.log(err))
    })

    const filteredCalams = Calams.filter(e => {
        const searchTermLower = searchTerm.toLowerCase();
        let dayly = e.Ngay + '/' + e.Thang + '/' + e.Nam;

        if (timtheo === "Tencalam") {
            return e.Tencalam.toLowerCase().includes(searchTermLower);
        } else if (timtheo === "Starttime") {
            return e.Starttime.toLowerCase().includes(searchTermLower);
        } else if (timtheo === "Endtime") {
            return e.Endtime.toLowerCase().includes(searchTermLower);
        } else if (timtheo === "Days") {
            return dayly.includes(searchTermLower);
        }
        else {
            return (
                e.Tencalam.toLowerCase().includes(searchTermLower) ||
                e.Ngay.toString().includes(searchTermLower) ||
                e.Thang.toString().includes(searchTermLower) ||
                e.Nam.toString().includes(searchTermLower)
            );
        }
    });
    const handleChange = (e) => {
        setTimTheo(e.target.value);
    };

    const handleDelete = (id) => {
        if (UQuyentruyvan.includes("xoa")||UQuyentruyvan==='admin') {
            axios.delete("http://localhost:3000/calamviec/" + id)
                .then(Response => {
                    if (Response.data) {
                        // Update state after successful deletion
                        setCalam(Calams.filter(cl => cl._id !== id));
                        navigate('/quanlychamcong/quanlycalamviec/xaydungcalamviec');
                    } else {
                        alert("Delete operation failed");
                    }
                })
        }
        else return alert('xóa không thành công do không có quyền')
    }
    return (
        <div>
            <h1>QUẢN LÝ CA LÀM VIỆC</h1>
            <div className='bt-them-page'>
                <Link to="/quanlychamcong/quanlycalamviec/xaydungcalamviec/themcalamviec" className='btn btn-success'>
                    Thêm Ca Làm Việc
                </Link>

            </div>

            <h3>
                <select onChange={handleChange} value={timtheo}>
                    <option value='Tencalam'>Tên</option>
                    <option value="Starttime">Thời Gian Bắc Đầu Ca</option>
                    <option value="Endtime">Thời Gian Kết Thúc Ca</option>
                    <option value="Days">Theo Ngày</option>
                </select>
                <input className='input-tim-kiem'
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tên Ca Làm Việc</th>
                        <th>Bắc Đầu</th>
                        <th>Kết Thúc</th>
                        <th>Ngày</th>
                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredCalams.map(e => {
                            return <tr>
                                <td>{e.Tencalam}</td>
                                <td>{e.Starttime}:h</td>
                                <td>{e.Endtime}:h</td>
                                <td>{e.Ngay}/{e.Thang}/{e.Nam}</td>
                                <td className='td-tuychon'>
                                    <Link to={'/quanlychamcong/quanlycalamviec/xaydungcalamviec/chinhsuacalamviec/&idcl=' + e._id} className='btn btn-info btn-sm me-2'>Chinh sua </Link>

                                    <button className='all-bt-delete' onClick={() => handleDelete(e._id)}>Xoa</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Xdcalamviec;
