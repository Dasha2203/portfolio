import {React} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import {connect} from 'react-redux'


const ButtonsTags = ({tags}) => {
    return(
        <div>
            <ToggleButtonGroup className="button-group-tags" type="radio" name="tags-radio-btn" defaultValue={tags[0].id}>
                <ToggleButton key="111" style={{background:`gray`}} value="No tag">No tag</ToggleButton>
                {
                    tags.map((tag,index)=> {
                        return(
                            <ToggleButton style={{background:`${tag.color}`}} value={tag.id}>{tag.type}</ToggleButton>
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



export default connect(mapStateToProps,null)(ButtonsTags)