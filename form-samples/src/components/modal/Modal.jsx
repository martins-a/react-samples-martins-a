import MaterialModal from '@mui/material/Modal';
import './Modal.css';

export default function Modal({ children, open, closeBtnLabel='Close', ...props}) {

    return (<MaterialModal open={open}>
        <div  className='modal'>
            <div className='content'>
                { children }
            </div>
        </div>

    </MaterialModal>)

}