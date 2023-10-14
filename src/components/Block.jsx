import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiCodeforces } from "react-icons/si";

const Block = ({ name, imageSrc, linkedin, codeforces }) => {
  const aspectRatio = 1; // 1:1 aspect ratio for a circular shape

  return (
    <div className="block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'auto', margin: 'auto', position: 'relative'}}>
       <div style={{ width: '300px', height: `${300 * aspectRatio}px`, borderRadius: '50%', overflow: 'hidden' }}>
        <img src={imageSrc} alt={`${name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p>{name}</p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '10px', margin: '10px' }}>
        <div style={{ margin: '10px' }}>
          <a href={linkedin}><FaLinkedin size={32} color="blue" /></a>
        </div>
        <div>
          <a href={codeforces}><SiCodeforces size={32} color="yellow" /></a>
        </div>
      </div>
    </div>
  );
};

export default Block;
