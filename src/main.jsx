import React,{useEffect,useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';

import HomeLight from './FigmaHome.jsx';
import PlayersLight from './players.jsx';
import GamesLight from './games.jsx';
import CommunitiesLight from './communities.jsx';
import ProfileLight from './profile.jsx';
import AuthLight from './auth.jsx';

import HomeDark from './home-dark.jsx';
import PlayersDark from './players-dark.jsx';
import GamesDark from './games-dark.jsx';
import CommunitiesDark from './communities-dark.jsx';
import ProfileDark from './profile-dark.jsx';
import AuthDark from './auth-dark.jsx';

import './styles.css';
import './players.css';
import './games.css';
import './communities.css';
import './profile.css';
import './auth.css';
import './home-dark.css';
import './players-dark.css';
import './games-dark.css';
import './communities-dark.css';
import './profile-dark.css';
import './auth-dark.css';

const ROUTES={
  home:{height:4874,light:HomeLight,dark:HomeDark},
  players:{height:1839,light:PlayersLight,dark:PlayersDark},
  games:{height:3698,light:GamesLight,dark:GamesDark},
  communities:{height:3112,light:CommunitiesLight,dark:CommunitiesDark},
  profile:{height:2997,light:ProfileLight,dark:ProfileDark},
  auth:{height:1080,light:AuthLight,dark:AuthDark},
};

function routeFromHash(){
  const r=location.hash.replace('#','').split('?')[0];
  return ROUTES[r]?r:'home';
}

function App(){
  const [route,setRoute]=useState(routeFromHash);
  const [theme,setTheme]=useState(()=>localStorage.getItem('gameram-theme')==='dark'?'dark':'light');
  const [scale,setScale]=useState(()=>Math.min(1,window.innerWidth/1920));
  const [toast,setToast]=useState('');
  const Screen=useMemo(()=>ROUTES[route][theme],[route,theme]);
  const height=ROUTES[route].height;

  useEffect(()=>{
    const onResize=()=>setScale(Math.min(1,window.innerWidth/1920));
    const onHash=()=>setRoute(routeFromHash());
    window.addEventListener('resize',onResize);
    window.addEventListener('hashchange',onHash);
    return()=>{window.removeEventListener('resize',onResize);window.removeEventListener('hashchange',onHash)};
  },[]);

  useEffect(()=>{
    document.body.dataset.theme=theme;
    document.documentElement.style.background=theme==='dark'?'#080720':'#f8faff';
    document.body.style.background=theme==='dark'?'#080720':'#f8faff';
    localStorage.setItem('gameram-theme',theme);
  },[theme]);

  useEffect(()=>{
    window.scrollTo({top:0,behavior:'instant'});
    if(location.hash!==`#${route}`) history.replaceState(null,'',`#${route}`);
  },[route]);

  useEffect(()=>{
    const clickables=[
      'Header / Logo','Brand / Official Gameram Logo','Header Nav / Поиск игроков','Header Nav / Игры',
      'Header Nav / Сообщества','Header / Theme Toggle','Header / Profile','Sidebar Item / Профиль',
      'Sidebar Item / Лента','Sidebar Item / Мои игры','Button / Найти тиммейта','Button / Найти игроков',
      'Button / Заполнить профиль','Button / Смотреть, кто играет'
    ];
    clickables.forEach(name=>document.querySelectorAll(`[data-name="${name}"]`).forEach(el=>el.classList.add('is-clickable')));
    document.querySelectorAll('[data-name^="Sidebar Item /"]').forEach(el=>el.classList.add('is-clickable'));
    document.querySelectorAll('[data-name^="Button /"]').forEach(el=>el.classList.add('is-clickable'));

    const go=(r)=>{if(ROUTES[r]){setRoute(r);location.hash=r}};
    let timer;
    const say=(msg)=>{clearTimeout(timer);setToast(msg);timer=setTimeout(()=>setToast(''),1500)};

    const handler=(e)=>{
      const el=e.target.closest('[data-name]');
      if(!el)return;
      const name=el.getAttribute('data-name')||'';

      if(name==='Header / Theme Toggle'){setTheme(v=>v==='light'?'dark':'light');return}
      if(name==='Header / Logo'||name==='Brand / Official Gameram Logo'){go('home');return}
      if(name==='Header Nav / Поиск игроков'||name.includes('Найти тиммейта')||name==='Button / Найти игроков'){go('players');return}
      if(name==='Header Nav / Игры'||name==='Sidebar Item / Мои игры'){go('games');return}
      if(name==='Header Nav / Сообщества'){go('communities');return}
      if(name==='Header / Profile'||name==='Sidebar Item / Профиль'||name==='Button / Заполнить профиль'){go('profile');return}
      if(name==='Sidebar Item / Лента'){go('home');return}

      if(route==='auth' && (name.includes('Продолжить')||name.includes('Войти')||name.includes('Создать'))){go('home');return}
      if(name==='Button / Смотреть, кто играет'){
        document.querySelector('[data-name="Section / Сейчас играют"]')?.scrollIntoView({behavior:'smooth'});
        return;
      }

      if(name.startsWith('Button /')) say('Действие выполнено');
      else if(name.startsWith('Sidebar Item /')) say('Раздел подключается в следующей итерации');
    };
    document.addEventListener('click',handler);
    return()=>{document.removeEventListener('click',handler);clearTimeout(timer)};
  },[route]);

  return <>
    <div id="viewport" style={{height:height*scale}}>
      <div className="canvas" style={{height,transform:`scale(${scale})`}}>
        <Screen/>
      </div>
    </div>
    <div className={'toast '+(toast?'show':'')}>{toast}</div>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
