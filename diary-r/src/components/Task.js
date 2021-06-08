import {React, useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card'
import {getTagById, createPost,removeTask} from '../actions/index'
import { connect } from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import {updateDonTask } from '../actions/index'
import ModalNotification from './ModalNotification'
import FormCreateTask from './FormCreateTask';

const Task = (props) =>{

    
    const [lg,setlg] = useState(false);
    const [editTaskModal,setEditTaskModal] = useState(false)
    useEffect(()=> {
        setInterval(()=>
        notificaton(),1000)
    })
    const notificaton = () => {
        let nottime = new Date(props.title.timeNot);
        if ( nottime.getHours() === new Date().getHours() && nottime.getMinutes() === new Date().getMinutes()) {
            setlg(true)
            // let indexOld = JSON.parse(localStorage.getItem('posts')).posts.findIndex(item=>item.id === props.title.id);
            // console.log('old!')
            // console.log(indexOld)
            // let objOld = {...props.title, notification: false};
            // localStorage.setItem('posts', JSON.stringify({...JSON.parse(localStorage.getItem('posts')), posts: [...JSON.parse(localStorage.getItem('posts')).posts.splice(indexOld+1,1,objOld)] }))
            //localStorage.setItem('posts',JSON.stringify({...old,notification:false}))
        }
    }

    const handleChange = () => {
        props.updateDonTask(props.title.id)
    };

    function submitHandler() {
        props.createPost(props.title.id);
    }

    return (
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2 mb-1">
            <Card className={`task-card ${props.title.done ?'task-done':''}`}>
            <button type="button" className="btn-close btn-delete-task" onClick={()=> props.removeTask(props.title.id)}  aria-label="Close"></button>
            <button type="button" className="btn btn-outline-primary btn-edit-task" onClick={submitHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>

            </button>
                <div className="task-line" style={{background:`${JSON.parse(localStorage.getItem('tags')).tags.find(item=>item.id===props.title.tag).color}`}}></div>
                    <div className="done-check">
                        <ToggleButtonGroup type="checkbox" value={props.title.done ? [1]: []} onChange={handleChange}>
                            <ToggleButton className="btn-done" value={1}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                                </svg>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                
                <Card.Body className="">
                    
                <Card.Title >{props.title.inputTitleTask}</Card.Title>
                {/* {console.log(`${new Date(props.title.timeNot).getHours()}:${new Date(props.title.timeNot).getMinutes()}`)} */}
                <Card.Text>
                    {
                        props.title.inputDescTask
                    }
                </Card.Text>
                </Card.Body>
            </Card>
            {
                lg ?
                <ModalNotification task={props.title.inputTitleTask}/>:null
            }
            {
                editTaskModal?<FormCreateTask editData={props.title}/> : null
            }
        </div>
        
    );
  }

const mapDispatchToProps = {
    getTagById,
    updateDonTask,
    createPost ,
    removeTask
    
}

export default connect(null,mapDispatchToProps)(Task)

