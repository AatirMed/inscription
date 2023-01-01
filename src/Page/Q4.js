import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const Q4 = () => {
    const store = useSelector(res => res.data);
    const [ListDate, setListDate] = useState([]);
    const [dataChange, setdataChange] = useState([{
        "Name": "",
        "Population": 0,
        "Capital": "",
        "IndepYear": 0,
        "img": ""
    }]);

    // filter years and create new lite of object [{IndepYear:2023,selected: false or ture }]
    useEffect(() => {
        var ListDateFilter = [];
        store.map(ele => ele.pays.map(obj => ListDateFilter.push(obj.IndepYear)));
        ListDateFilter = [...new Set(ListDateFilter)];
        // create list object 
        const DateFilter = [];
        ListDateFilter.map(obj => DateFilter.push({ IndepYear: obj, Selected: false }))
        setListDate([...DateFilter]);
    }, [store]);


    // HandChangeCard
    const HandChangeCard = (obj1) => {
        setListDate([...ListDate.map(ele => ele.IndepYear === obj1 ? { ...ele, Selected: !ele.Selected } : { ...ele, Selected: false })])
        let listOfPays = [];
        store.map(ele => ele.pays.map(obj => obj.IndepYear === obj1 ? listOfPays.push({ ...obj }) : null))
        setdataChange([...listOfPays])
    }


    console.log(dataChange)
    return (
        <ul className="Q4">
            {
                ListDate.sort((a, b) => b.IndepYear - a.IndepYear).map((obj, index) => <li key={index}>
                    <span onClick={() => HandChangeCard(obj.IndepYear)}>
                        {obj.IndepYear}
                    </span><br />
                    {obj.Selected ?
                        <div className="cart_Q4">
                            {
                                dataChange.map(
                                    (obj, index) => {
                                        return (
                                            <div key={index} className='card1'>
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

                        : null}
                    <br /> <br /></li>)
            }
        </ul>
    )
}

export default Q4;