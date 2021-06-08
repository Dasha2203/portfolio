
 import {createPost} from '../actions/index'
 import { connect } from 'react-redux';
import React from "react";
import Card from 'react-bootstrap/Card'



const CreateTask = (props) => {

    function submitHandler() {
        props.createPost(null);
    }
    return( 
        <div className="  col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 mb-1" onClick={submitHandler}>
            <Card className="create-card" style={{height: '100%'}}>
                <Card.Body>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </Card.Body>
            </Card>
        </div>
        
    )
}

const mapDispatchToProps = {
    createPost
}

export default connect(null,mapDispatchToProps)(CreateTask);

