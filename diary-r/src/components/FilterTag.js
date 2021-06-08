import {React} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import {connect} from 'react-redux'
import {filterTag} from '../actions/index'


const ButtonsTags = (props) => {
    return(
        <div className="mb-3">
            <ToggleButtonGroup className="button-group-tags" type="radio" name="tags-radio-btn" defaultValue="all">
            <ToggleButton  style={{background:`green`}} onClick={()=>props.filterTag('all')} value="all">Все</ToggleButton>
                {
                    props.tags.map((tag,index)=> {
                        return(
                            <ToggleButton key={tag.id} style={{background:`${tag.color}`}} onClick={()=>props.filterTag(tag.id)} value={tag.id}>{tag.type}</ToggleButton>
                        )
                    })
                }
            </ToggleButtonGroup>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags
    }
}

const mapDispatchToProps = {
    filterTag
}



export default connect(mapStateToProps,mapDispatchToProps)(ButtonsTags)