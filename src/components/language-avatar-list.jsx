import { Height } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

export default function LanguageAvatarList() {
    const languageAvatarItemStyle = {
        display: 'flex',
        alignItems: 'center',
        margin: 10,
        fontSize: '22px',
    }

    const languageAvatarStyle = {
        height: 50,
        width: 50
    }

    return (
        <div className='language-avatar-list'>
            <div className="language-avatar-item" style={languageAvatarItemStyle}>
                <Avatar sx={languageAvatarStyle}>文</Avatar>
                &emsp;<b>Mandarin</b>&thinsp;-&thinsp;
                <>Expert</>
            </div>
            <div className="language-avatar-item" style={languageAvatarItemStyle}>
                <Avatar sx={languageAvatarStyle}>Eng</Avatar>
                &emsp;<b>English</b>&thinsp;-&thinsp;
                <>Expert</>
            </div>
            <div className="language-avatar-item" style={languageAvatarItemStyle}>
                <Avatar sx={languageAvatarStyle}>Рус</Avatar>
                &emsp;<b>Bahasa Melayu</b>&thinsp;-&thinsp;
                <>Expert</>
            </div>
        </div>
    )
}
