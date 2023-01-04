import React, { useState,  Fragment } from "react";
import Congratulations from "./Congratulations";
import './App.css';
import { useEffect } from "react";

const App = () => {
  const styleSpace = { marginRight: '25px' };
  //countries
  const countries = [
    'Maroc',
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan"
  ];

  //data
  const [data, setData] = useState(
    {
      Nom: '',
      prenom: '',
      Age: 0,
      Sexe: '',
      Nationnalite: '',
      Pays: '0',
      Interets: [],
    }
  );

  const [reverse, setR] = useState(true);

  const handChangeInput = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value })
  }

  const handChangeInterets = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setData({ ...data, Interets: [...data.Interets, value] })
    } else {
      setData({ ...data, Interets: [...data.Interets.filter(ele => ele !== value)] })
    }
  }

  const Validation = () => {
    var i = 0;
    if (!/^[A-Za-z]{3,}$/.test(data.Nom)) {
      i = i + 1;
    } else if (!/^[A-Za-z]{3,}$/.test(data.prenom)) {
      i = i + 1;
    } else if (parseInt(data.Age) < 18) {
      i = i + 1;
    } else if (data.Interets.length === 0) {
      i = i + 1;
    } else if (data.Pays === '') {
      i = i + 1;
    } else if (data.Sexe === '' && data.Nationnalite === '') {
      i = i + 1;
    }

    if (i === 0) {
      setR(false);
    }
  }

  const createNew = ()=>{
    setData({
      Nom: '',
      prenom: '',
      Age: 0,
      Sexe: '',
      Nationnalite: '',
      Pays: '0',
      Interets: [],
    })
    setR(true)
    
  }
  return (
    <Fragment>
      {reverse ?
        <div className="main">
          <span>Nom : </span> <input style={styleSpace} type='text' name='Nom' onChange={handChangeInput} />
          <span>prenom : </span> <input type='text' name='prenom' onChange={handChangeInput} />
          <br /><br />

          <span>Age : </span> <input type='number' name='Age' onChange={handChangeInput} />
          <br /><br />

          <span style={styleSpace}>Sexe : </span>
          <span>Homme</span><input style={styleSpace} type='radio' value='Homme' name='Sexe' onChange={handChangeInput} />
          <span>Femme</span><input type='radio' value='Femme' name='Sexe' onChange={handChangeInput} />
          <br /><br />

          <span style={styleSpace}>Nationnalite : </span>
          <span>Marocaine</span><input style={styleSpace} type='radio' value='Marocaine' name='Nationnalite' onChange={handChangeInput} />
          <span>Etrangere</span><input type='radio' value='Etrangere' name='Nationnalite' onChange={handChangeInput} />
          <br /><br />
          <span style={styleSpace}>Pays : </span>
          <select name="Pays" onClick={handChangeInput}>
            <option value='0'>Pays</option>
            {countries.map(country => <option key={country} value={country}>{country}</option>)}
          </select>
          <br /><br />
          <span>Interets : </span>
          <ul>
            <li>
              <span>Lecture</span><input type='checkbox'  value='Lecture' style={styleSpace} onChange={handChangeInterets} />
              <span>Cinema</span><input type='checkbox'  value='Cinema' style={styleSpace} onChange={handChangeInterets} />
              <span>Sports</span><input type='checkbox'  value='Sports' style={styleSpace} onChange={handChangeInterets} />
            </li>
            <li>
              <span>Theatre</span><input type='checkbox'  value='Theatre' style={styleSpace} onChange={handChangeInterets} />
              <span>Voyage</span><input type='checkbox'  value='Voyage' style={styleSpace} onChange={handChangeInterets} />
              <span>Sciences</span><input type='checkbox'  value='Sciences' style={styleSpace} onChange={handChangeInterets} />
            </li>
          </ul>
          <button onClick={Validation}>Affiche</button>
        </div> : <Congratulations changeValue={createNew} />}
    </Fragment>
  );
};

export default App;
