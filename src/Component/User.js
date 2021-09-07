import React from 'react';
import './User.css';

const User = ({use}) => {
    return (
        <div className="list">
            <div className="wrapper">
                <div className="card front">
                <div className="inner-wrap">
                    <div className="orbit">
                        <div className="sun"></div>
                    <div className="p1-orbit">
                        <div className="p1"></div>
                    </div>
                    <div className="p2-orbit">
                        <div className="p2"></div>
                    </div>    
                    <div className="p3-orbit">
                        <div className="p3"></div>
                    </div>   
                    <div className="p4-orbit">
                        <div className="p4"></div>
                    </div>   
                </div>
                    <div className="name-wrap">
                    <div className="name">{use.name}</div>
                    <div className="title">{use.username}</div>
                    </div>
                </div>
                </div>

                <div className="card back">
                <div className="inner-wrap">
                    <div className="orbit">
                            <div className="sun">
                            </div>
                <div className="p1-orbit">
                    <div className="p1"></div>
                </div>
                <div className="p2-orbit">
                    <div className="p2"></div>
                </div>  
                <div className="p3-orbit">
                    <div className="p3"></div>
                </div>         
                <div className="p4-orbit">
                    <div className="p4"></div>
                </div>      
                        </div>
                    <div className="name-wrap">
                    <div className="name">{use.email}</div>
                    <div className="title">{use.address.street}</div>
                    </div>
                    <div className="contact">
                    <p>
                    {use.address.suite}<br/>
                    {use.address.city}<br/>
                    {use.address.zipcode}
                    </p>
                    </div>
                </div>
                </div>  
                </div>
        </div>
    )
}

export default User
