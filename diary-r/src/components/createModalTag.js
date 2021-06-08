import {React,useState} from 'react'
import {connect} from 'react-redux'
import {Modal,Button} from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import {hideModalTag,createTag,updateTag} from '../actions/index'


const CreateModalTag = (props) => {
    const [color,setColor] = useState('')
    const [tag,setTag] = useState('');
    const [exp, setExp] = useState(props.tags.modal.editTag? props.tags.tags.find(item=>item.id === props.tags.modal.editTag).type:'');
    //const [titleTag, setTilteTag] = useState(JSON.parse(localStorage.getItem('tags')).modal.editTag ? props.tags.tags.find(item=>item.id === JSON.parse(localStorage.getItem('tags')).modal.editTag).type:'null' )
    
    function handleColorChange(color,event) {
        
        // setTag({
            
        //     color:color.hex
        // })
        
        //console.log(tag)
        setColor(color.hex);
    }


    function handleInputChange(event) {
        
        setExp(
           // ...tag,
            event.target.value
            ///id: `tag-${event.target.value}`
        )
        
    }

    function addTag() {
        const newTag = {
            type: exp,
            id: `tag-${exp}`,
            color: color
        }
        props.createTag(newTag)
    }

    function editTag() {
        const newTag = {
            type: exp,
            id: `tag-${exp}`,
            color: color
        }
         props.updateTag(newTag,props.tags.modal.editTag)
    }

    // function getContentNameTag() {
    //     setTag({
    //         type: props.tags.modal.editTag ? JSON.parse(localStorage.getItem('tags')).tags.find(item=>item.id===props.tags.modal.editTag).type : ''
    //     })
       
    // }

    return (
        <Modal className="tag-modal" show={props.tags.modal.isOpen} centered>
            <Modal.Header>
                {/* {props.tags.modal.editTag ?'Редактирование': 'Создание'} */}
            <Modal.Title>{props.tags.modal.editTag?'Изменение':'создание'} тега</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                {/* {console.log(JSON.parse(localStorage.getItem('tags')).modal.editTag)} */}
                {/* {console.log(titleTag)} */}
                <label htmlFor="inputPassword" className="col-sm-12 col-form-label">Название тега</label>
                <div className="col-sm-10">
                    <input type="text"  name="inputNameTag"   onChange={handleInputChange}  className="form-control" id="inputTag"/>
                </div>
                <label htmlFor="inputPassword" className="col-sm-12 col-form-label">Выберите цвет тега</label>
                <CirclePicker onChange={handleColorChange}/>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>props.hideModalTag()}>
                Отмена
            </Button>
            <Button variant="primary" onClick={props.tags.modal.editTag ? editTag:addTag}>
                {props.tags.modal.editTag ?'Изменить': 'Создать'} тег
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapDispatchToProps = {
    hideModalTag,
    createTag,
    updateTag

}

const mapStateToProps = state => {
    return {
        tags:state.tags
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateModalTag)