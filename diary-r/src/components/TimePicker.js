import React, {useState} from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';


export default (props) => {
    const [diolog, setDiolog] = useState(false)
    return(<KeyboardTimePicker
                            className="col-lg-2 time-block"
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={props.selectedDate}
                            onChange={()=>props.changeData}
                            variant='dialog'
                           // disableOpenPicker={false}
                            //DialogProps={{open:diolog}}
                            //autoOk={true}
                            // disabled={!title.notification}
                            
    />
)
    }