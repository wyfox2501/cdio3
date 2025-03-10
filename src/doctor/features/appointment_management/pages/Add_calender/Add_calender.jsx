import React from 'react';
import PropTypes, { object } from 'prop-types';
import { useState } from 'react';
import "./style_Add.scss"

Add_calender.propTypes = {
    
};
const hours = ["7H", "8H", "9H", "10H", "11H", "12H", "13H", "14H", "15H", "16H", "17H", "18H","19H","20H","21H"];
function Add_calender(props) {
    const [data,setData]=useState({
        ngay:"",
        thoigianstart:"",
        thoigianend:"",
        doctor:""
    })
    const [meseger, setMeseger]=useState('')
    const [errors,setErrors]=useState({})
    const [color, setColor]=useState('#f03242')
    const setinput=(e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: '',
        })
    }
    const check_input=(e)=>{
        e.preventDefault();
        const newErorrs={};
        if(!data.ngay.trim())
            newErorrs.ngay='vui lòng nhập ngày'
        if(!data.thoigianstart.trim())
            newErorrs.thoigianstart='vui lòng nhập thời gian bắt đầu'
        if(!data.thoigianend.trim())
            newErorrs.thoigianend='vui lòng nhập thời gian kết thúc'
        if(!data.doctor.trim())
            newErorrs.doctor='vui lòng nhập doctor'
        if(Object.keys(newErorrs).length>0){
            setErrors(newErorrs);
            setMeseger('Lỗi')
        }else{
            setErrors({});
            setMeseger("Lưu Thành Công")
            setColor(!color?"#f03242":"green")
        }
        //chạy 5s sẽ tắt là load trang
        setTimeout(() => {
            setMeseger('');
            window.location.reload(); // 🔁 reload lại trang
          }, 5000);
    }
    return (
        <div className='add'>
          {
                    meseger &&(
                        <p style={{backgroundColor:color, color:"white"}}>
                        {meseger}</p>
                    )
                }
            <form action="" onSubmit={check_input}>
                <h2>Thêm lịch</h2>
               <div className="insert">
                <div className="date">
                        <span> Ngày</span>
                        <input  type="text" name="ngay" id="" placeholder='22/03/2025'  onChange={setinput}/>
                    </div>
                    <div className="hourStart">
                        <span>Thời Gian Bắt Đầu</span>
                        <input type="text" name="thoigianstart" id="input" placeholder='7H' onChange={setinput}/>
                    </div>
                    <div className="hourEnd">
                        <span>Thời Gian Kết Thúc</span>
                        <input type="text" name="thoigianend" id="input" placeholder='11H' onChange={setinput} />
                    </div>
                
                    <div className="doctor">
                        <span>Doctor</span>
                        <input type="text" name="doctor" id="" placeholder='Nguyễn Hoàng Huy' onChange={setinput}/>
                    </div>
               </div>
                <button type='submit'>Lưu</button>
              
            </form>
        </div>
    );
}

export default Add_calender;