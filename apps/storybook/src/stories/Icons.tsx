import React from 'react';
import * as IconsAll from './Icons/src/index';

export const Icons = () => {
  const icons = Object.values(IconsAll);
  const names = Object.keys(IconsAll);
  return (
    <div style={{ padding: '50px' }}>
      <h1 style={{ textAlign: 'center' }}>Icons</h1>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {icons?.map((IconComponent, i) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconComponent width={32} height={32} />
            <p style={{ marginLeft: '14px' }}>{names[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
