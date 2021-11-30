import React from 'react'
import './icon_text_button.scss';

interface IcontTextButtonInterface {
  icon: React.ReactNode;
  buttonLabel: string;
}

const IconTextButton = (props: IcontTextButtonInterface) => {
  return (
    <>
      <button className='button-container'>
          {props.icon}
          <h5 className='button-label'>{props.buttonLabel}</h5>
        </button>
    </>
  )
}

export default IconTextButton
