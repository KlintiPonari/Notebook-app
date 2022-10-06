import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
     <div className="note">
        <span>First note!</span>
        <div className="note-footer">
            <small>10/6/2022</small>
            <MdDeleteForever className='delete-icon' size='1.2em' />
        </div>
    </div>
    );
};

export default Note;
