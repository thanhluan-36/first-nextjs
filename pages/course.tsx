import React, { useEffect, useState } from 'react'
import {JSDOM} from 'jsdom';

// }
export default function course() {
    const website = 'https://docs.google.com/document/d/e/2PACX-1vT1YqDoJ6oQo5fuZs-maN6MJ2i82zk_DeX6dW1_S7d5DLgVNHt66Y6QRr3o4qRQK-RsgbdcDqsASJAi/pub';
    
    var data = []
    var my_list = ['nhảy', 'cờ', 'toeic', 'ielts','organ','nhật','trung',
    'piano','đức','hàn','guitar','đài','pháp','dance','đàn',
'vẽ','sáo','thanh nhạc','thuế','kế toán', 'tây ban nha' ]
    const [cv, setCV] = useState([])

    const [key, setKey] = useState('')
    const [keys, setKeys] = useState(my_list)
    const [jobApi, setJobApi] = useState({
        html: null,
    })

    const handleSubmit = ()=>{
        setKeys(prev => [...prev, key])
    }
    useEffect(() => {
        const getData = async() => {
            const response = await fetch(website)
            const html = await response.text()
            if(html){
                setJobApi({html})
            }else{
                console.log("can not get data")
            }
        }
        getData(); 
    },[]);

    useEffect(()=>{
        const fetchData = ()=>{
            const {html} = jobApi
            const dom = new JSDOM(html)
            const document = dom.window.document
            const dn = document.querySelectorAll(".c1")
            for (var i = 0; i < dn.length; i++) {
                if((dn[i].textContent).toLowerCase().includes('online') ){
                    console.log('yes')
                    if (keys.some(e => (dn[i-1].textContent).toLowerCase().includes(e)) != true){
                        console.log('ok')
                        data.push((dn[i-2].textContent), (dn[i-1].textContent),(dn[i].textContent),(dn[i+1].textContent),(dn[i+2].textContent),(dn[i+3].textContent),(dn[i+4].textContent))
                    }
                }
            } 
            setCV(data)
        }
        fetchData()
    },[jobApi.html,keys])

    const handleButton = (deleteKey)=>{
        const newkeys = keys.filter((key)=> key !== deleteKey)
        setKeys(newkeys)
    }
    const arrayData = (Object.values(cv).map((keyName, i) => (
        <li className="travelcompany-input" key={i} style={{listStyle:"none"}}>
            <span className="input-label"> {keyName}</span>
        </li>
    )));

  return (
    <div>
        <h1>I can do it</h1>
        <div className="tu-khoa">
            <h3>Danh sach tu khoa: </h3>
            {keys.map((key, index) =>(
                <span key={index} style={{color: 'black', background:'red',
                    display: 'inline-block',
                    padding: '5px',
                    borderRadius: '40px',
                    fontSize: '18px',
                    margin: '5px'}}>{key}
                    <button onClick={()=>handleButton(key)} 
                    style={{background:'orange',
                    border: 'none',
                    borderRadius:'20px 20px',
                    fontSize:'15px',
                    marginLeft:'5px'}}>Delete</button>
                </span>
            ))}
        </div>
        <div className="addKey">
            <h3>Add Keyword</h3>
            <input type='string' value={key} onChange={e => setKey(e.target.value)}
            style={{height:'20px',
            textAlign:'center'
            }}  
            />
            <button type='submit' onClick={handleSubmit}
            style={{background:'orange',
            height:'25px',
            border:'none',
            fontSize:'15px'
            }}
            >Add</button>
        </div>
        <div className="scrolbar" style={{border: 'none',padding: '5px',font: '24px/36px sans-serif',width: '650px',height: '500px',overflow: 'scroll'}}>
        <ul>{arrayData}</ul>
        </div>

    </div>
  )
}
