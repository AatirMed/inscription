import React, { useEffect, useState } from "react";

const Exercice001 = ()=>{
    //data
  const [produits, setProduits] = useState([
    { id: 11, nom: "cle USB", prix: 81, famille: "INFO" },
    { id: 22, nom: "Table", prix: 250, famille: "Mobilier" },
    { id: 33, nom: "Souris", prix: 40, famille: "INFO" },
    { id: 44, nom: "Chaise", prix: 170, famille: "Mobilier" },
    { id: 55, nom: "Pince", prix: 100, famille: "INFO" },
    { id: 66, nom: "Routeur", prix: 20, famille: "INFO" }
  ]);

  //produits de la famille INFO
  const [produitONE, setProduitONE] = useState([])
  useEffect(() => {
    setProduitONE([...produits.filter(ele => ele.famille === 'INFO' && ele.prix > 80)])
  }, [produits])

  //Moyenne produits 
  const [produitAVG, setProduitAVG] = useState(0);
  useEffect(() => {
    setProduitAVG(produits.reduce((total, obj) => total + obj.prix, 0))
  }, [produits])

  //le nom du produit le plus cher
  const [produitCher, setProduitCher] = useState({id: 0, nom: '', prix: 0, famille: ''});
  useEffect(() => {
    setProduitCher(produits.sort((a,b)=>b.prix-a.prix)[0])
  }, [produits])

  //filter id 33
  const [produitfilter, setProduitfilter] = useState([]);
  useEffect(() => {
    setProduitfilter([ ...produits.filter(ele=>ele.id!==33)])
  }, [produits])
  console.log(produitfilter)
  // console.log(produits)
  return (
    <div className="main01">

      <div className="ex1">
        <h4>1) Ecrire le code JS qui return  produits de la famille INFO qui ont le prix superieure a 80 </h4>
        <ul>
          {produitONE.map((obj, index) => <li key={index}> Name : {obj.nom} ( {obj.prix} DH)</li>)}
        </ul>
      </div>

      <div className="ex2">
        <h4>2) Ecrire le code JS qui calcule la moyenne des prix des produits</h4>
        <span style={{marginLeft:'30px', fontWeight:'bold'}}>Moyenne Produits : </span>{produitAVG} DH
      </div>
      
      <div className="ex3">
        <h4>3) Ecrire le code JS qui determine le nom du produit le plus cher </h4>
        <span style={{marginLeft:'30px', fontWeight:'bold'}}>{produitCher.nom} </span>({produitCher.prix} DH) --- '  {produitCher.famille} '
      </div>
      
      <div className="ex4">
      <h4>3) Ecrire le code JS qui supprimant le produit qui a le ID egal a 33  </h4>
      <ul>{produitfilter.map((obj, index) => <li key={index}> <span style={{marginLeft:'15px', fontWeight:'bold'}}>{obj.nom}</span> ( {obj.prix} DH) --- '  {obj.famille} '</li>)}</ul>
    </div>
    </div>
  );
}

export default Exercice001;