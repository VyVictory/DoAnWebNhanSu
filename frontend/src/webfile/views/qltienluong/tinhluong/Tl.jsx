import React, { useEffect, useState } from "react";
import axios from "axios";

const Tl = () => {
    const [nhansus, setNhansus] = useState([])
    const [chucvus, setChucvus] = useState([])
    const [calams, setCalams] = useState([])
    const [chamcongs, setChamcongs] = useState([])
    const [idns, setIdns] = useState('657193fd255b3a2076ef95ec')
    const [tinhluong, setTinhluong] = useState({
        Idns: idns,
        Ngay: '2',
        Thang: '2',
        Nam: '2',
        luong: 2
    });
    
    useEffect(() => {
        axios.get('http://localhost:3000/nhansu')
            .then(Response => { if (Response.data) { setNhansus(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err))
        axios.get('http://localhost:3000/chucvu')
            .then(Response => { if (Response.data) { setChucvus(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err))
        axios.get('http://localhost:3000/calamviec')
            .then(Response => { if (Response.data) { setCalams(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err))
        axios.get('http://localhost:3000/chamcong')
            .then(Response => { if (Response.data) { setChamcongs(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err))

    }, []);

    const [tinhlungtacmo, setTinhlungtacmo] = useState(false)
    const [tableds, setTableds] = useState(true)
    const tacmotinhluong = () => {
        setTinhlungtacmo(!tinhlungtacmo);
        setTableds(!tableds)
    }
    //-----------------------
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const addluong = (a) => {
        if (a) {
            setTinhluong(prevState => ({
                ...prevState,
                luong: prevState.luong + a
            }));
        }
    };
    
    const handleGenerateDates = () => {
        const chamcongcanhan = chamcongs.filter(cccn => cccn.Idns === idns);
        
        calams.map(c => {
            let date = new Date(c.Nam + '-' + c.Thang + '-' + c.Ngay);
            let startday = new Date(startDate);
            let endday = new Date(endDate);
    
            if (startday < date && date < endday) {
                chamcongcanhan.map(cc => {
                    if (cc.Idcalamviec === c._id) {
                        addluong(cc.luong);
                    }
                    return null;
                });
            }
            return null;
        });
        const dataToSend = {
            Idns: tinhluong.Idns,
            Ngay: tinhluong.Ngay,
            Thang: tinhluong.Thang,
            Nam:tinhluong.Nam,
            luong:+tinhluong.luong
        };
        axios.post('http://localhost:3000/tinhluong', dataToSend)
        .then(Response => { if (Response.data) { } else {} }).catch(err => console.log(err))
    };
    
    return (
        <div>
            <h1>TÍNH LƯƠNG</h1>
            {tinhlungtacmo && (
                <div>
                    <form>
                        <div>
                            <div>
                                <div>
                                    <label>Ngày bắt đầu:</label>
                                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                                </div>
                                <div>
                                    <label>Ngày kết thúc:</label>
                                    <input type="date" value={endDate} onChange={handleEndDateChange} />
                                </div>
                            </div>
                            <label>Lương Thêm</label>
                            <input type="number" onChange={(e) => setTinhluong({ ...tinhluong, Ghichu: e.target.value })} placeholder='Nhập Lương Thêm' /><br />
                        </div>
                        <button onClick={() => handleGenerateDates()} className='btn btn-success w-100 rounded-0 mb-2'>Tính</button>
                    </form>
                </div>
            )}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã Nhân Viên</th>
                        <th>Tên</th>
                        <th>Chức Vụ</th>
                        <th>Tùy Chọn</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        nhansus.map(e => (
                            <tr key={e._id}>
                                <td>{e.Hoten}</td>
                                <td>{e.Mnv}</td>
                                {/* Find the corresponding job position */}
                                {
                                    chucvus.find(c => c._id === e.Chucvu) ? (
                                        <td>{chucvus.find(c => c._id === e.Chucvu).Tenchucvu}</td>
                                    ) : (
                                        <td>Chưa Có Chức Vụ</td> // Display a message if job position not found
                                    )
                                }
                                <td className='td-tuychon'>
                                    <button onClick={() => (setIdns(e._id), tacmotinhluong())} className=''>Tính Lương</button>
                                    <button className='bt-chamlai'>Tính Lại</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tl;