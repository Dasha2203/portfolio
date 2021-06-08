import {React,useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {connect} from 'react-redux';
import {selectDate} from '../actions/index'

const CalendarMy = (props) => {
    const [value, onChange] = useState(new Date());
    function myFunction () {
        
        props.selectDate(value.toLocaleDateString())
    }
   
    return(
        <div className="calendar-section">
            <p className="title-section-sidebar">Календарь</p>
            <Calendar onClickDay={myFunction()} onChange={onChange}
        value={value}/>
        
        </div>
    )
}

const mapDispatchToProps = {
    selectDate
}

const mapStateToProps = state => {
    return {selectdatet: state.calendar.selectDate}
}

export default connect(mapStateToProps,mapDispatchToProps)(CalendarMy)