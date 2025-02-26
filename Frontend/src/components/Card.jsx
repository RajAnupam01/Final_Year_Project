import React from 'react';

function Card({ title, description, image }) {
    return (
        <div>
            <div className="card bg-base-100 w-80 h-[600px] shadow-xl flex flex-col ">
                <figure className="h-[600px] w-full ">
                    <img className="min-h-full min-w-full " src={image} alt={title} />
                </figure>
                <div className="card-body flex-grow flex flex-col justify-between">
                    <div>
                        <h2 className="card-title text-lg font-bold">{title}</h2>
                        <p className="text-sm line-clamp-3">{description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
