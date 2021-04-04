import React, { useEffect, useState } from 'react';
import './AppMap.css';
import message from '../../assets/message.json';
import useSound from 'use-sound';
import beepSfx from '../../assets/beep.mp3';

function AppMap() {

  const data = message.data;
  const [index, setIndex] = useState(0);
  const [beep] = useSound(beepSfx, { volume: 0.25 });

  useEffect(() => {
    let timer = setTimeout(() => {
        if (index + 1 >= data.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        if (data[index].distance < 30) {
            beep();
        }
    }, 2000);

    return () => {
        clearTimeout(timer);
    }
  })

  return (
    <div className="my-5 text-center">
        <div className="mx-auto col-6 d-flex justify-content-between">
          <div className="p-5 border object-border rounded-circle text-center">
              User
          </div>
          <div className="p-5 border object-border text-center">
              Object
          </div>
        </div>
        <hr className="w-50 line" />
        <p>
            You are traveling at {data[index].speed} cm/s.
            There is an object {data[index].distance} cm ahead of you.
            {data[index].label} seconds.
        </p>
    </div>
  );
}

export default AppMap;