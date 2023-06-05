import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="container">
      <h1 className="title-notfound">404</h1>
      <p className="txt-notfound">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link-notfound">Retourner sur la page d'accueil</Link>
    </div>
  )
}