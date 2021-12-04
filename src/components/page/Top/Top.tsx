import { VFC } from 'react';

import { useDnDSort } from '@/hooks/useDnDSort';

type Style<T extends HTMLElement> = React.HTMLAttributes<T>['style'];

const bodyStyle: Style<HTMLDivElement> = {
  height: '100vh',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle: Style<HTMLDivElement> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '350px',
  maxHeight: '500px',
};

const imageCardStyle: Style<HTMLDivElement> = {
  cursor: 'grab',
  userSelect: 'none',
  width: '100px',
  height: '130px',
  overflow: 'hidden',
  borderRadius: '5px',
  margin: 3,
};

const imageStyle: Style<HTMLImageElement> = {
  pointerEvents: 'none',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
};

const imageList: string[] = [
  'https://images.pexels.com/photos/10346632/pexels-photo-10346632.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/10161004/pexels-photo-10161004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/10058971/pexels-photo-10058971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/10391671/pexels-photo-10391671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/9042872/pexels-photo-9042872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/9665628/pexels-photo-9665628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

export const Top: VFC = () => {
  const results = useDnDSort(imageList);

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        {results.map((item) => (
          <div key={item.key} style={imageCardStyle} {...item.events}>
            <img src={item.value} alt='ソート可能な画像' style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};
