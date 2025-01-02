import React from 'react';
import { GiDeliveryDrone } from "react-icons/gi";
import { PiDroneFill } from "react-icons/pi";
import { MdBiotech } from "react-icons/md";
import { GiWingedEmblem } from "react-icons/gi";

const features = [
  { 
    icon: <GiDeliveryDrone />,
    title: 'Test 1',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <PiDroneFill />,
    title: 'Test 2',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <MdBiotech />,
    title: 'Test 3',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <GiDeliveryDrone />,
    title: 'Test 4',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <GiWingedEmblem />,
    title: 'Test 5',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
];

function Section1() {
  return (
    <div className='zig-zag'>
      {features.map((feature, index) => (
        <div key={index} className='zig-zag-card'>
            <div className=' zig-zag-wrapper'>
          <div className='zig-zag-content'>
            <h2 className='zig-zag-title'>{feature.title}</h2>
            <p className='agr10-sec-10-desc'>{feature.desc}</p>
          </div>
          <div className='zig-zag-icon'>
            {feature.icon}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section1;

// css for this component

// .agr-sec-10{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     padding: 1em 13rem;
//   }
  
//   .agr-sec-10 ::before{
//   content: '';
//     position: absolute;
//     border-radius: 5em;
//     width: 20rem;
//     height: 20rem;
//     background-color: #9cf00bb6;
//     z-index: -1;
//     filter: blur(3em);
//   }
//   .agr-sec-10 h2{
//     font-size: var(--fs-xxl);
//     text-align: center;
//     text-transform: uppercase;
//     width: 70%;
//     color: #d4d4d4;
//   }

//   .zig-zag {
//     padding: 1em 13rem;
//     color: #d4d4d4;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .zig-zag-card {
//     width: 60%;
//     display: flex;
//     flex-direction: row; 
//   }
//   .zig-zag-title{
//     color: yellow;
//     font-weight:500;
//     font-style: italic;
//   }
//   .zig-zag-card:nth-child(odd) {
//     flex-direction: row; 
//     background-color: #000000;
//   }
  
//   .zig-zag-card:nth-child(even) {
//     flex-direction: row-reverse; 
//   }
//   .zig-zag-card:first-child>.zig-zag-wrapper{
//     border-radius: 5em 5em 0% 5em !important;
//   }
//   .zig-zag-card:last-child>.zig-zag-wrapper{
//     border-radius: 5em 0% 5em 5em !important;
//   }
//   .zig-zag-card:nth-child(even)>.zig-zag-wrapper{
//     flex-direction: row-reverse; 
//     border: 2px solid yellow;
//     border-radius: 0% 5em 5em 0%;
//   }  
//   .zig-zag-card:nth-child(odd)>.zig-zag-wrapper{
//     flex-direction: row; 
//     border: 2px solid yellow;
//     border-radius: 5em 0% 0% 5em;
//   }
//   .zig-zag-wrapper{
//     display: flex;
//     width: 60%;
//     justify-content: space-evenly;
//     padding:  .6em;
//   }
//   .zig-zag-icon {
//     width: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .zig-zag-icon svg {
//     width: 70%;
//     height: 70%;
//     object-fit: contain;
//   }
  
//   .zig-zag-content {
//     width: 100%;
//     padding: 1em;
//   }
  
//   .zig-zag-title {
//     font-size: var(--fs-xl);
//   }
  
//   .agr10-sec-10-desc {
//     font-size: var(--fs-s);
//     line-height: 1.5;
//   }
  
