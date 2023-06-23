import { useState } from 'react'
import '../styles/Card.css'

const Card = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const switch_theme = () => {
        darkMode == false ? setDarkMode(true) : setDarkMode(false)
    };

    const [Result, setResult] = useState<number>(0)
    const [Weight, setWeight] = useState<number>(0)

    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(+event.target.value)
    } 

    const calculation = () => {
        setResult((Weight * 2.2 * 30/2).toFixed(2))
    };

    
    return (
        <>
          <div className={darkMode == false ? "bg-container bg-sky" : "bg-container bg-dark"}  >
              <div className={darkMode == false ? "card-container" : "card-container card-dark"}>
                  <div className="card-head">
                      <div className="switch-theme">
                          <label>
                              <input type="checkbox" onClick={switch_theme}/>
                              <div className="toggle">
                                  <div className="star"></div>
                                  <div className="cloud"></div>
                                  <div className="circle"></div>
                                  <div className="moon"></div>
                              </div>
                          </label>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className={darkMode == false ? "card-body-text" : "card-body-text text-dark"}>ควรดื่มน้ำวันละ<span className={darkMode == false ? "result-text" : "result-text result-dark"}> {Result} </span>มิลลิลิตร</div>
                      <div className="card-body-input-group">
                          <input type="text" placeholder="น้ำหนักของคุณ" className={darkMode == false ? "" : "input-dark"} onChange={onChangeWeight}/>
                          <p className={darkMode == false ? "" : "text-dark"}>กิโลกรัม</p> 
                      </div>
                  </div>
                  <div className="card-footer">
                    <button className={darkMode == false ? "btn btn-sky" : "btn btn-dark"} type="button" onClick={calculation}>คำนวณ</button>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Card