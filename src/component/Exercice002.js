import React, {  useState } from "react";
import { useEffect } from "react";

const Exercice002 = () => {
  //part 01
  const [passInput, setPassInput] = useState({
    pass: '',
    confirmer: ''
  })

  //message de validation
  const [message, setmessage] = useState("");
  const [messageColor, setmessageColor] = useState(true);

  // HandChangeInput
  const HandChangeInput = (event) => {
    const { name, value } = event.target;
    setPassInput({ ...passInput, [name]: value })
  }

  //valid
  const valid = () => {
    if(passInput.pass !== '' && passInput.confirmer!==''){
      if (passInput.pass === passInput.confirmer) {
        setmessageColor(true);
        setmessage('Bienvenu');
      } else {
        setmessageColor(false);
        setmessage('Mot de pass saisi ne coincide pas avec le mot de passe confirme ');
      }
    }else {
      setmessageColor(false);
      setmessage('Mot de pass saisi ne coincide pas avec le mot de passe confirme ');
    }
    
  }
  //part 02
  const [passInput02, setPassInput02] = useState({
    pass: '',
    confirmer: ''
  })

  //message de validation
  const [message02, setmessage02] = useState("");
  const [messageColor02, setmessageColor02] = useState(true);

  // HandChangeInput
  const HandChangeInput02 = (event) => {
    const { name, value } = event.target;
    setPassInput02({ ...passInput02, [name]: value })
  }

  //valid
  const valid02 = () => {
    if(passInput02.pass===passInput02.confirmer){
      setmessageColor02(true);
      if(passInput02.pass.length<8){
        setmessage02('Bienveno, mot de passe faible');
      }else if(/[a-z]/.test(passInput02.pass)===true && /[A-Z]/.test(passInput02.pass)===true && passInput02.pass.length>=8){
        setmessage02('Bienvenu, mot de passe fort');
      }
      else if(passInput02.pass.length>=8){
        setmessage02('Bienvenu, mot de passe moyen');
      }
        
    }else{
      setmessageColor02(false);
      setmessage02('Mot de pass saisi ne coincide pas avec le mot de passe confirme ');
    }
  }



  return (
    <div className="main02">

      <div className="ex5">
        <h4>5) validation</h4>
        <div>
          <span>Mot de passe : </span>
          <input type='password' placeholder="...pass" name='pass' onChange={HandChangeInput} /> <br /><br />

          <span> confirmer : </span>
          <input type='password' placeholder="...confirmer" name='confirmer' onChange={HandChangeInput} /> <br /><br />

          <button onClick={valid}>valid</button><br /><br />
          <span className={messageColor?'vert':'Red'}>{message}</span>
        </div>
      </div>

      <div className="ex5"><br />
      <span>-------------------------------------------------------------------------------------------------</span>
      <h4>6) validation advanced </h4>
      <div>
        <span>Mot de passe : </span>
        <input type='password' placeholder="...pass" name='pass' onChange={HandChangeInput02} /> <br /><br />

        <span> confirmer : </span>
        <input type='password' placeholder="...confirmer" name='confirmer' onChange={HandChangeInput02} /> <br /><br />

        <button onClick={valid02}>valid</button><br /><br />
        <span className={messageColor02?'vert':'Red'}>{message02}</span>
      </div>
    </div>

    </div>
  );
};

export default Exercice002;
