import {React} from 'react'
import { Time } from './Timer';
import {showSideBar,hideSideBar} from '../actions/index'
import {connect} from 'react-redux';


const Header = (props) => {
    return(
        <header className="header">
            <div className="container d-flex">
                <div className="logo" onClick={()=>props.isSidebar ? props.hideSideBar():props.showSideBar()}>
                    <a href="#" className="logo-link">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-check svg-logo" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                    Diary
                    </a>
                </div>
                <Time/>
                
            </div>
        </header>
    )
}

const mapDispatchToProps = {
    showSideBar,
    hideSideBar
}

const mapStateToProps = state => {
    return {
        isSidebar: state.tasks.sidebar
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)