import React from "react";

import './Landing.css';
import iphone from './images/iphone.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShield} from '@fortawesome/free-solid-svg-icons'
export function Landing(){
    return(
     <>
       <div>
          <div className="division_bg">
                
                <div className="col-md-12 text-center">
                <div className="card-body">
                    <h5 className="card-title">iPhone Product Details</h5>
                    <p className="card-text">The iPhone is a smartphone made by Apple that combines a computer, 
                      iPod, digital camera and cellular phone into one device with a touchscreen interface.</p>
                    <p className="card-text"><small class="text-muted"><FontAwesomeIcon icon={faShield} /> Brand shield </small></p>
                </div>
                </div>
            </div>
        </div>
         
       
     </>
    );
} 