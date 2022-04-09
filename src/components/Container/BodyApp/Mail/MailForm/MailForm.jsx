import React from "react";
import s from './MailForm.module.css'

const MailForm = () => {
    return (
        <div className={s.mailForm}>
            <form>
              <label className='label'>Message text...</label><br />
              <div className='textDiv' >
                <textarea className='textArea'>
                </textarea>
              </div>
            </form>
          </div>
    )
}

export default MailForm