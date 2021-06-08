import {React,useState,useEffect} from 'react'

export const Time = () => {
    const [time, setTime] = useState(new Date());
    const mounths = ['Jan', 'Fab', 'Mar', 'Apr', 'May']
    useEffect(() => {
        setInterval(
            () => tick(),
            1000
          );
    });
    function tick() {
        setTime(
           new Date()
        );
    }
    return(
        <div className="date-container">
            <div className="clock-time">{time.toLocaleTimeString()}</div>
            <div className="date">{`${time.getDate()} ${mounths[time.getMonth()]} ${time.getFullYear()}`}</div>
            
        </div>
        
    )
}