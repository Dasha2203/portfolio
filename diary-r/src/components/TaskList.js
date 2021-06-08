
import CreateTask from './CreateTask';
import Task from './Task';

import {connect} from 'react-redux';


const TaskList = (props) => {
    return(
        <div className="row align-items-stretch">
        
            {
                
                props.tasks.map(((item, index)=>{
                    if(item.date === props.selecttime && (item.tag === props.tags.filterTag||props.tags.filterTag==='all')) {
                        return <Task title={item}  key={index}/>
                    }
                    }
                ))
            }
            <CreateTask/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        tasks: state.tasks.posts,
        selecttime: state.calendar.selectDate,
        tags: state.tags
    }
}


export default connect(mapStateToProps,null)(TaskList);