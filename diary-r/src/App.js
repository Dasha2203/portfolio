
import TaskList from "./components/TaskList";
import {connect} from 'react-redux';

import React from "react";
import FormCreateTask from "./components/FormCreateTask";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreateModalTag from "./components/createModalTag";
import FilterTag from "./components/FilterTag";




const App = (props) => {
  const mounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  function getDate(strDate) {
    let arrDate = strDate.split('/');
    return `${arrDate[0]} ${mounths[Number(arrDate[1])-1]} ${arrDate[2]}`
  }

  function getCountTasksOnThisDay() {
    let count = 0
    props.tasks.posts.map(item => {
      if(item.date === props.selecttime) {
        count++
      }
    })

    return count
  }

  function getCountDoneTasks() {
    let count = 0
    props.tasks.posts.map(item=> {
      if(item.date === props.selecttime && item.done) {
        count++
      }
    })

    return count
  }

  return (
    <div className="row justify-content-end">
      <SideBar/>
      <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-xs-10 app-content">
        <Header/>
        <div className="dask-tasks container">
          
          <h1 className="title">Задания на {getDate(props.selecttime.toString())}</h1>
          <p>Все задания: <span>{getCountTasksOnThisDay()}</span> </p>
          <p>Выполнено: <span>{getCountDoneTasks()}</span> </p>
          <FilterTag/>

          {
            !props.tasks.modal.isCreateTask ? <TaskList/>: <FormCreateTask/>
            
          }
          <CreateModalTag/>
        </div>
      </div>
      
    </div>
    
);
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    selecttime: state.calendar.selectDate
  }
}

export default connect(mapStateToProps,null)(App);
