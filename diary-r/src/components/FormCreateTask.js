//import {Input, InputLabel} from '@material-ui/core';
import {connect} from 'react-redux';
import {addTask,hideCreatePost,updateTask} from '../actions/index'
import {React,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';


const FormCreateTask = (props) => {
    const [title,setTitle] = useState(
        {
            date:props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).date:'',
            inputTitleTask:props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).inputTitleTask:'',
            inputDescTask:props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).inputDescTask:'',
            done:false,
            id: props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).id:'',
            tag:props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).tag:'tag-no',
            timeNot:props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).timeNot:'',
            notification: props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).notification:false,
        }
    );
    const [activeBtn,setActiveBtn] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

      const handleChange = (event) => {
        setTitle({
            ...title,
            notification:event.target.checked});
      };
    
    function handleAddTask(event) {
        
        if (title.inputTitleTask && title.inputDescTask) {
            const newTask = {
                ...title,
                date: props.date,
                done:false
            }
            return props.addTask(newTask)
        } else {
            setActiveBtn(true)
        }
        
    }
    const [selectedDate, setSelectedDate] = useState(props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).timeNot:new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setTitle({
            ...title,
            timeNot: date
        });
    };

    function handleChangeTitle(event) {
        setTitle({
            ...title,
            [event.target.name]:event.target.value
        });
           
    }

    function handleSelectTag(id) {
        setTitle({
            ...title,
            tag: id
        })
    }
    function openWindow() {
        setIsOpen(true);
        let el =  document.querySelector('.MuiDialog-root')
        if (el) {
            el.style.zIndex='1300'
        }
    }

    function closeWindow() {
        setIsOpen(false);
        document.querySelector('.MuiDialog-root').style.zIndex='-1000'
    }

    function handleEditTask() {
        const newTask = {
            ...title,
            date: props.date,
            done:false
        }
        return props.updateTask(newTask)
    }


    return(
        <Modal
            show={props.tasks.modal.isCreateTask}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {props.tasks.modal.isCreateTask}
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                <h3 className="text-center">{props.tasks.modal.editTasks?'Редактирование задания':'Создание задания'}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 
         <form  noValidate autoComplete="off">
            
            
            <div className="mb-3">
                <label htmlFor="inputPassword" className="col-sm-12 col-form-label">Что вы хотите сделать</label>
                <div className="col-sm-10">
                    
                    
                    <input type="text" name="inputTitleTask" value={title.inputTitleTask}  onChange={handleChangeTitle} className={`form-control ${activeBtn ? !title.inputTitleTask ? 'is-invalid': '':''}` } id="inputPassword"/>
                    <div className="invalid-feedback">
                        Заполните поле
                    </div>
                </div>
                <label htmlFor="inputDescription" className="col-sm-12 col-form-label">Описание?</label>
                <div className="col-sm-10">
                    <input type="text" name="inputDescTask" value={title.inputDescTask}  onChange={handleChangeTitle} className={`form-control ${activeBtn ? !title.inputDescTask ? 'is-invalid': '':''}` } id="inputDescription"/>
                    <div className="invalid-feedback">
                        Заполните поле
                    </div>
                </div>
                <div className="row flex-column block-notification">
                    <FormControlLabel
                        label="Напоминание"
                        labelPlacement="start"
                        className="col-lg-3 notification-row"
                        control={
                        <Switch
                            checked={title.notification}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                    />
                    
                    
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        
                        <KeyboardTimePicker
                            className="col-lg-2 time-block"
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            disabled={!title.notification}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            open={isOpen}
                            onOpen={openWindow}
                            onClose={closeWindow}
                        />
                        
                    </MuiPickersUtilsProvider>
                </div>
                
                
            </div>
            


            <div>
            <ToggleButtonGroup className="button-group-tags" type="radio" name="tags-radio-btn" defaultValue={props.tasks.modal.editTasks ? props.tasks.posts.find(item=>item.id===props.tasks.modal.editTasks).tag:"tag-no"}>
                {/* <ToggleButton key="111" onClick={()=>handleSelectTag("tag-no")} style={{background:`gray`}} value="tag-no">Нет тега</ToggleButton> */}
                {
                    props.tags.map((tag,index)=> {
                        return(
                            <ToggleButton key={index} onClick={()=>handleSelectTag(tag.id)} className="lalal" style={{background:`${tag.color}`}} value={tag.id}>{tag.type}</ToggleButton>
                        )
                    })
                }
            </ToggleButtonGroup>
        </div>

            <br/>
            
          </form>
          
          
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{props.hideCreatePost()}}>Отмена</Button>
                <button onClick={props.tasks.modal.editTasks? handleEditTask: handleAddTask} type="button" className="btn btn-success">{props.tasks.modal.editTasks? 'Изменить': 'Добавить'} задание</button>
            </Modal.Footer>
        </Modal>
    )
}
const mapDispatchToProps = {
    addTask,
    hideCreatePost,
    updateTask
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        tags: state.tags.tags,
        date: state.calendar.selectDate
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormCreateTask)