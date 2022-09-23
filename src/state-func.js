import React, { useState } from "react";

export default function MessageBox(){
    let[text,setText] = useState('Hello World')
    let[size,setSize] = React.useState(16)

    const onClickSetText = () => {
        let t = prompt('กำหนดข้อความ')
        if(t){
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newSize = size+1
        setSize(newSize)
    }

    const onClickClearText = () => {
            setText('')
    }


    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize : size,
        backgroundColor : '#ccc',
        padding :5,
        textAlign:'center'

    }

    return (
        <div style={{textAlign:'center',marginTop:20}}>
            <div style={msgboxSyle}>{text}</div><br/><br/>
            <button onClick={onClickSetText}>ข้อความมมม</button>&nbsp;
            <button onClick={onClickZoomIn}>เพิ้มขนาดดด</button>&nbsp;
            <button onClick={() => setSize(size-1)}>ลดขนาด</button>&nbsp;
            <button onClick={onClickClearText}>ลบข้อความ</button>
        </div>
    )
}