import React, { FC, useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';


const CanvasRings: React.FC<{}> = () => {
  //https://hashnode.blainegarrett.com/html-5-canvas-react-refs-and-typescript-ckf4jju8r00eypos1gyisenyf
  // Typed useRef usage
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // const ctx = canvasRef.current.getContext('2d');
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  
  
  const numberOfRings = 3;
  const ringRadiusOffset = 10;
  let ringRadius = 325;
  const waveOffset = 15;
  // const colors = document.querySelectorAll('.theme-color');
  let startAngle = 0;

  const maxWavesAmplitude = 17;
  const numberOfWaves = 7;

  let centerX;
  let centerY;

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current; // Assigning to a temp variable
      
      ctx!.beginPath(); // Note the Non Null Assertion
      ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx!.stroke();
    }
  }, []);


  return <canvas ref={canvasRef}></canvas>;
};


export const Banner: FC = () => {


  return (
    <section className="banner">
      <div className="canvas">
        <CanvasRings />
      </div>
      <div className="banner__logo">
        <div className="page__subtitle">Ilia
          <span className="page_bold">Gromov</span>
        </div>
        <div className="page__img">
          <StaticImage src="../../../assets/img/img-fullstack-developer.png" alt='logo' />
        </div>
      </div>
    </section>
  )
}
