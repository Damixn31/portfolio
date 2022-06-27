import React from 'react';
import VideoInicio from "../../video/inicio.mp4"
import VideoInicioOne from "../../video/inicio1.mp4"
import Button from './Button'

export default function PagInicio() {

   return (
    
     <div className='videoInicio'>
        
         <video className='video'src={VideoInicioOne} autoPlay loop muted />
          <div>
            <Button>Entre</Button>
          </div>

         
         
     </div>
    
    )


}