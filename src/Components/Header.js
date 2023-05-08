import React from "react";
function Header(props) {
    console.warn("Props",props)
    return (
        <>
         <div>
            <h1>Home Components</h1>
            <div className="cart-wrapper">
                <div className="icon-img">
                    <img src="https://media.istockphoto.com/id/468726396/vector/shopping-cart-icon.jpg?s=612x612&w=0&k=20&c=IwfWPCYi77vY2gWgpOtrCYRDDgLNz5EpACHLOGl2pxY=" style={{width:'50px',position:'absolute',top:'1%',right:'1%'}}/>
                </div>
            </div>
         </div>

        </>
    )
}
export default Header;