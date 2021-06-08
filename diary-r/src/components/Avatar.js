import {React, useState, useRef} from 'react'
import ContentEditable from 'react-contenteditable'

export const Avatar = () => {
    const [fullname, setFullname] = useState(JSON.parse(localStorage.getItem('profile')).FullName);
    const [src,setSrc] = useState(JSON.parse(localStorage.getItem('profile')).srcAvatar)
    const text = useRef(JSON.parse(localStorage.getItem('profile')).FullName ? JSON.parse(localStorage.getItem('profile')).FullName : "Enter your name");
    function handleEditName (event) {
        alert('a')
        const oldData = JSON.parse(localStorage.getItem('profile'));
        const newData = {
            ...oldData,
            FullName: event.target.value
        }
        localStorage.setItem('profile', JSON.stringify(newData))
        setFullname(
            JSON.parse(localStorage.getItem('profile')).FullName
            
        )
    }

    const handleChange = evt => {
        const oldData = JSON.parse(localStorage.getItem('profile'));
        const newData = {
            ...oldData,
            FullName: evt.target.value
        }
        localStorage.setItem('profile', JSON.stringify(newData))
        text.current = evt.target.value;
    };

    function handleSelectImg(event){
        // alert(event.target.value)
        // const oldData = JSON.parse(localStorage.getItem('profile'));
        // const newData = {
        //     ...oldData,
        //     srcAvatar: event.target.value
        // }
        // localStorage.setItem('profile', JSON.stringify(newData))
        var reader = new FileReader();
    reader.onload = function(){
      //var output = document.getElementById('output');
      //output.src = reader.result;
        const oldData = JSON.parse(localStorage.getItem('profile'));
         const newData = {
             ...oldData,
             srcAvatar: reader.result
         }
         localStorage.setItem('profile', JSON.stringify(newData))
      setSrc(reader.result)
    };
    reader.readAsDataURL(event.target.files[0]);
    }
     
    return (
        <div className="avatar row align-items-center">
            <div className="col avatar-img ">
                <label htmlFor="file" className="file-label" ></label>
                <input type="file" id="file" name="file" onChange={handleSelectImg} className="file-input"/>
                <img src={src}/>
            </div>
            <ContentEditable className="col avatar-name" html={text.current} onChange={handleChange} />
            
        </div>
    )
}