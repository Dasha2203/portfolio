import React from 'react'
import { Avatar } from './Avatar'
import CalendarMy  from './Calendar'
import  TagsList  from './TagsList'
import {connect} from 'react-redux';
import {hideSideBar} from '../actions/index'

const SideBar = (props) => {
    return (
        <div className={`col-xxl-3 col-xl-3 col-lg-4 col-sm-2 col-xs-10 sidebar ${props.isSidebar ? '':'hide'}`}>
            <Avatar/>
            <button type="button" className="btn-close btn-close-white btn-sidebar-close" onClick={()=>props.hideSideBar()} aria-label="Close"></button>
            <div className="sidebar-body">
                <CalendarMy/>
                <TagsList/>
            </div>
            

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSidebar: state.tasks.sidebar
    }
}

const mapDispatchToProps =  {
    hideSideBar
}


export default connect(mapStateToProps,mapDispatchToProps)(SideBar)