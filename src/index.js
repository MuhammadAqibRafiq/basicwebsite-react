import React from 'react';
import Reactdom from 'react-dom';
import Sdata from './Sdata';
import Card from './Card';
import './index.css';

Reactdom.render(
  <>
    <h1 className="heading_style">Top 5 netflix movies </h1>,
    {Sdata.map((val,index) => {
      return (
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
      );
    })}
  </>,
  document.getElementById('root')
)