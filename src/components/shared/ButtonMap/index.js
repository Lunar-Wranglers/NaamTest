import './buttonmap.css'
import { NavLink } from 'react-router-dom'

export default function ButtonMap({ id, title, blurb, url, name }) {
  return (
    <article>
      <div key={id}>
        <h2 className='title'>{title}</h2>
        <div className='blurb'>
          <p>{blurb}</p>
        </div>
        <div className='buttons'>
          <NavLink to={url} />
            <button>
              {name}
            </button>
        </div>
      </div>
    </article>
  )
}