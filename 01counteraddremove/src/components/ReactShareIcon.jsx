import React from 'react'
import {EmailShareButton,EmailIcon,FacebookShareButton,FacebookIcon} from 'react-share'
function ReactShareIcon() {
  return (
    <>
      <EmailShareButton url={'https://mail.google.com/mail/u/0/#inbox'}>
        <EmailIcon size={52} round />
      </EmailShareButton>
      <FacebookShareButton >
        <FacebookIcon size={52} round/>
      </FacebookShareButton>
    </>
  )
}

export default ReactShareIcon
