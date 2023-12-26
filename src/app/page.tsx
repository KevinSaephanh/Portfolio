import { Scene } from '@/components/Scene/Scene';
import { Terrain } from '@/components/Scene/Terrain';
import * as React from 'react';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <Scene autoRotate={true}>
        <Terrain />
      </Scene>
    </div>
  );
}
