import { useEffect } from 'react'
import './notification.scss'

const Notification = ({ message, success, access }) => {

    useEffect(() => {
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.classList.add('show-notification');
            setTimeout(() => {
                notification.classList.remove('show-notification');
            }, 3000);
        }
    }, [access])

    return (
        <>
            {success ? 
                <div className='notification success'>
                    <span class="icon-park-outline--success"></span>
                    <p>{message}</p>
                </div> : 
                <div className='notification error'>
                    <span class="ix--namur-failure"></span>
                    <p>{message}</p>
                </div>
            }
        </>
    )
}

export default Notification