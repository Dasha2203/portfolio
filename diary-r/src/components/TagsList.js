import React from 'react'

import {connect} from 'react-redux'
import {removeTag} from '../actions/index'
import {showModalTag} from '../actions/index'

const TagsList = (props) => {

    function handleRemoveTag(idTag){
        props.removeTag(idTag)
    }
    return(
        <div className="tags-list">
            <p className="title-section-sidebar">Теги
                <button type="button" className="btn btn-outline-primary" onClick={()=>props.showModalTag(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                    </svg>
                </button>
            </p>
            {
                props.tags.map((tag,index)=> {
                    return (
                        <div key={index} className="tag-list__item" >
                            <span style={{background:`${tag.color}`}} onClick={()=>props.showModalTag(tag.id)}></span>
                            {tag.type}
                            {tag.id !== 'tag-no' ? <button type="button" className="btn-close" onClick={() => handleRemoveTag(tag.id)} aria-label="Close"></button>:null}
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags
    }
}

const mapDispatchToProps = {
    showModalTag,
    removeTag
}

export default connect(mapStateToProps,mapDispatchToProps)(TagsList)