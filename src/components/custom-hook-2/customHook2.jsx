import { useState } from 'react';
import useCopyToClipboard from '../../hooks/useCopytoClipboard';
import './styles.css';
import copyIcon from '../../images/copyIcon.png';
import tickIcon from '../../images/tickIcon.png';

const CustomHook2 = () => {
const [randomId, setRandomId] = useState('');
const [isCopied, handleCopy] = useCopyToClipboard(3000);

const generateId = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   setRandomId(result);
}

    return (
        <div className='container'>
            <h1>Random ID generator </h1>
            <input style={{width:'auto'}}></input>
            {!!randomId && <div style={{ margin: 20 }}>
                {isCopied ? <img alt='copied' src={tickIcon} height='30px' width='30px' />
                : <img alt='copy' src={copyIcon} onClick={() => handleCopy(randomId)} style={{cursor:'pointer'}} height='30px' width='30px' />}
                {randomId}
                </div>}
            <button style={{ marginTop: 10}} onClick={() => generateId(8)}>Generate ID</button>
        </div>
    )
}

export default CustomHook2;