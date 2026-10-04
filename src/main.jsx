import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import Home1920Light from './FigmaHome.jsx';
import './styles.css';

function App(){
  const [scale,setScale]=useState(Math.min(1,window.innerWidth/1920));
  const [toast,setToast]=useState('');
  useEffect(()=>{const onResize=()=>setScale(Math.min(1,window.innerWidth/1920));window.addEventListener('resize',onResize);return()=>window.removeEventListener('resize',onResize)},[]);
  useEffect(()=>{
    const clickables={
      'Button / Найти тиммейта':'Поиск игроков подключу следующим экраном',
      'Button / Продолжить':'Задание дня: действие сработало',
      'Button / Найти игроков':'Поиск игроков подключу следующим экраном',
      'Button / Заполнить профиль':'Профиль подключу после Home',
      'Header Nav / Поиск игроков':'Поиск игроков подключу следующим экраном',
      'Header Nav / Игры':'Игры подключу после Home',
      'Header Nav / Сообщества':'Сообщества подключу после Home',
      'Header / Theme Toggle':'Dark подключу после утверждения Home Light',
      'Header / Profile':'Профиль подключу после Home'
    };
    for(const name of Object.keys(clickables)){document.querySelectorAll('[data-name="'+name+'"]').forEach(el=>el.classList.add('is-clickable'))}
    document.querySelectorAll('[data-name^="Sidebar Item /"]').forEach(el=>el.classList.add('is-clickable'));
    const handler=(e)=>{
      const now=e.target.closest('[data-name="Button / Смотреть, кто играет"]');
      if(now){document.querySelector('[data-name="Section / Сейчас играют"]')?.scrollIntoView({behavior:'smooth'});return}
      const named=e.target.closest('[data-name]'); if(!named)return;
      const name=named.getAttribute('data-name');
      const msg=clickables[name]||(name?.startsWith('Sidebar Item /')?'Раздел будет подключён на следующем этапе':'');
      if(msg){setToast(msg);setTimeout(()=>setToast(''),1600)}
    };
    document.addEventListener('click',handler);return()=>document.removeEventListener('click',handler)
  },[]);
  return <><div id="viewport" style={{height:4874*scale}}><div className="canvas" style={{transform:`scale(${scale})`}}><Home1920Light/></div></div><div className={'toast '+(toast?'show':'')}>{toast}</div></>;
}
createRoot(document.getElementById('root')).render(<App/>);

// trigger Pages build
