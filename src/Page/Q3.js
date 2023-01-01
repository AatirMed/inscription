import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Q3 = () => {
    const store = useSelector(res => res.data)
    const navigate = useNavigate()


    return (
        <div className="Q3">
            {
                store.map(
                    ele => {
                        return (
                            <div key={ele.code}>
                                <h2> -----------------------------------------------  {ele.Name}  ----------------------------------------------- </h2>
                                <div className="world">
                                    <img src={ele.img} alt={ele.Name} />
                                    <div>
                                        <p><span>SurfaceArea : </span>{ele.SurfaceArea}</p>
                                        <p> <span>Population : </span>{ele.Population}</p>
                                        <button className="btn" onClick={() => navigate(`/Q5/add/${ele.code}`)}>Add</button>
                                    </div>

                                </div>

                                <div className="PaysCard">
                                    {
                                        ele.pays.map(
                                            (obj, index) => {
                                                return (
                                                    <div key={index} className='card'>
                                                        <img src={obj.img} alt={obj.Name} />
                                                        <p><span>Name : </span>{obj.Name}</p>
                                                        <p><span> Population :</span>{obj.Population} </p>
                                                        <p><span> Capital :</span>{obj.Capital} </p>
                                                        <p><span>IndepYear :</span>{obj.IndepYear}</p>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>

                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Q3;