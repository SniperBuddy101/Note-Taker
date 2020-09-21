import React from 'react';
import Note from "./Note";  
import AddaNote from "./AddaNote";

function NoteSection(){

    const [noteList, changeNoteList] = React.useState([{title: "Yeah", taskText: "Damn right"}]);

    function deleteItem(id){
        changeNoteList(prevValue => {
            return prevValue.filter((itemValue, index) => index !== id);
        });
    }
    

    return <div id="noteSection">
    <AddaNote changeNoteList={changeNoteList} />    
    {noteList.map((note, index) => <Note text={note.taskText} id={index} deleteFunction={deleteItem} title={note.title} key={index} />)}
    </div>;
}

export default NoteSection;