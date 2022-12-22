import React from 'react'
import { Link } from 'react-router-dom'
import './common.sass'
import './CharacterNav.sass'
export default function CharacterNav() {
  return (
    <div className='center nav'>
        <Link className='character-nav' to="/characters">back</Link>
    </div>
  )
}
