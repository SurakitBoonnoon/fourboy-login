import React,{useState} from "react";
import md5 from "md5";
import PropTypes from "prop-types";
import {valEmail, valPassword } from "../../../utils/validate"
import "./Content.css";

const saltRounds = 10;
function LoginContent(props) {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  const [errortxt ,setErrortxt] = useState("");

  const handleChange = (type,value)=>{
    console.log(data);
    setData({
      ...data,
      [type]:value
    }
      
    )

  }
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const summit = ()=>{
    
    if(!valEmail(data.email)) {
      setErrortxt("อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง!"); 
      return
    };
    if(!valPassword(data.password)){
      setErrortxt("อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง!"); 
      return
    };
    setErrortxt("");
    let hash = md5(data.password);
    console.log(hash);
    

  }
  return (
    <div className="bgorange marg0auto center" style={{ height: "50rem" }}>
      <div className="width50P">
        <form
          class="loginform bg-white size-lg"
          style={{
            justifyContent: "space-evenly",
            padding: "30px",
            backgroundColor: "white",
          }}
        >
          <center><h1>Four Boy Login</h1></center>
          <div class="mb-4">
            <label 
              
              for="username"
            >
              อีเมล : 
            </label> 
            <input
              
              id="username"
              type="text"
              placeholder="กรอกอีเมล"
              value={data.email}
              onChange={(e)=>handleChange("email",e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              
              for="password"
            >
              รหัสผ่าน :
            </label>
            <input
              
              id="password"
              type="password"
              placeholder="กรอกรหัสผ่าน"
              value={data.password}
              onChange={(e)=>handleChange("password",e.target.value)}
            />
            <p class="text-red text-xs colorRed">{errortxt}</p>
          </div>
          <div className="flex items-center justify-between">
            <p><button type="button"onClick={summit}>
              เข้าสู่ระบบ
            </button></p>
            <a
              
              href="#"
            >
              ลืมรหัสผ่าน?
            </a>

            <ul className="circle">
            <li>ใส่อีเมล์เท่านั้น!</li>
            <li>ใส่รหัสผ่านมากกว่า 8 ตัว</li>
            <li>ต้องการอีเมลและรหัสผ่าน</li>
            <li>ใส่ตัวอักขระพิเศษ</li>
          </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginContent;
