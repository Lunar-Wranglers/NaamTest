import apply from './ApplyIcon.png'
import applyLive from './ApplyLive.png'
import contact from './ContactIcon.png'
import contactLive from './ContactLive.png'
import home from './HomeIcon.jpg'
import homeLive from './HomeLive.png'
import info from './InfoIcon.png'
import infoLive from './InfoLive.png'
import profile from './ProfileIcon.png'
import profileLive from './ProfileLive.png'

const icons = [
  {
    id: 1,
    text: 'home',
    dead: `${home}`,
    live: `${homeLive}`,
    url: '/'
  },
  {
    id: 2,
    text: 'info',
    dead: `${info}`,
    live: `${infoLive}`,
    url: '/info'
  },
  {
    id: 3,
    text: 'apply',
    dead: `${apply}`,
    live: `${applyLive}`,
    url: '/apply'
  },
  {
    id: 4,
    text: 'contact',
    dead: `${contact}`,
    live: `${contactLive}`,
    url: '/contact'
  },
  {
    id: 5,
    text: 'profile',
    dead: `${profile}`,
    live: `${profileLive}`,
    url: '/profile'
  },
]

export default icons 