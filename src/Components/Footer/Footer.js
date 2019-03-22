import React from 'react';
import './Footer.css'
function Footer() {
  
        return(
            <div className='footer'>
                <div className='widget-container'>
                    <hr></hr>
                    <div className='widget-1'>
                        <h3 className='widget-newsletter'>NEWSLETTER</h3>
                        <input className='email-input' placeholder='enter email'/>
                    </div> 
                    <hr></hr>
                    <div className='widget-2'>
                        <h3 className="widget-help">NEED HELP WITH YOUR ORDER?</h3>
                        <p>We are happy to announce the launch of our new ordering help line. If you need to make changes to your order or are having issues checking out, please call us at 1.800.588.2300 and one of our team member will be happy to assist. Please note this line is for ordering help only. If you need tech support, please email support@utor.com.
                        </p>
                    </div> 
                    <hr></hr>
                    <div className='widget-3'>
                        <h3 className='widget-disclaimer'>DISCLAIMER</h3>
                        <div>UTOR Outfitters is an independent TOYOTA enthusiast website. This site is not sponsored by or in any way affiliated with Toyota Motor North America, Inc. The Toyota name and logo are trademarks owned by Toyota Motor Corporation.
                        </div>
                    </div> 
                    <hr className='hr'></hr>
                </div>
                <hr></hr>
            </div>
        )
    // }
}

export default Footer