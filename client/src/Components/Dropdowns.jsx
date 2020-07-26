import React, {useEffect, useRef} from 'react'
import SignIn from './SignIn';
import './Search/Search.scss';
import {buttons} from '../Constants/IDs';
import Search from './Search/Search';

export const SearchDropdown = props=>{
    const innerRef = useRef(null);
    useEffect(()=>{
        const sign = document.getElementById(buttons.SEARCH);
        document.addEventListener('click',e=>{
            const isClickedInside = sign.contains(e.target);
            if(!isClickedInside){
                sign.classList.remove('is-active');
            }
        })
    })
    const toggle = ()=>{
        document.getElementById('search').classList.toggle('is-active')
      
        if(document.getElementById('sign')) 
            document.getElementById('sign').classList.remove('is-active');
        
    }
    return (
        <div ref={innerRef} id={buttons.SEARCH} className="dropdown">
            <div className="dropdown-trigger" >
                <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggle}>
                    <i className="fas fa-search-location"></i>
                </button>
            </div>
            <div className="dropdown-menu is-left is-full-width" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                      <Search click={toggle} zip={props.zip}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

            
export const SignInDrowdown = props=>{
    
    
    const innerRef = useRef(null);
    useEffect(()=>{
        const sign = document.getElementById(buttons.SIGN);
        document.addEventListener('click',e=>{
            const isClickedInside = sign.contains(e.target);
            if(!isClickedInside){
                sign.classList.remove('is-active');
            }
        })
    })
    const toggle = ()=>{
        document.getElementById('sign').classList.toggle("is-active")
        
        if(document.getElementById('search')) 
            document.getElementById('search').classList.remove('is-active');
           
        
    }
    
    
    return (
        <div id={buttons.SIGN} className="dropdown is-right" ref={innerRef}>
            <div className="dropdown-trigger" >
                <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggle}>
                    <i className="fas fa-door-closed"></i>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
               
                    <nav className={`panel is-primary is-full-width has-background-white ${props.width}`}>
                        <p className="panel-heading">
                            Sign In
                        </p>
                        <div className='panel-block dropdown-item is-active'>
                            <SignIn/> 
                        </div>
                    </nav>
                
            </div>
        </div>
    )
}