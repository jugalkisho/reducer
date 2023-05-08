import React from "react";
function User(props) {
    console.warn("Props",props)
    return (
        <>
         <div>
            <h1>Home Components</h1>
            <div className="cart-wrapper">
                <div className="icon-img">
                    <img src="https://media.istockphoto.com/id/468726396/vector/shopping-cart-icon.jpg?s=612x612&w=0&k=20&c=IwfWPCYi77vY2gWgpOtrCYRDDgLNz5EpACHLOGl2pxY=" style={{width:'50px',position:'absolute',top:'1%',right:'1%'}}/>
                </div>
                <div className="img-wrapper item">
                    <img src="https://cdn.pixabay.com/photo/2017/05/29/16/42/smartphone-2354157__340.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button type="btn-wrapper item">
                        <button onClick={()=>props.addToCartHandler({price:1000,name:'I Phone'})}>Add To Cart</button>
                    </button>
                </div>
            </div>
         </div>

        </>
    )
}
export default User;