import { type } from 'os';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {JSDOM} from 'jsdom';

// }
export default function course() {
    const website = 'https://docs.google.com/document/d/e/2PACX-1vT1YqDoJ6oQo5fuZs-maN6MJ2i82zk_DeX6dW1_S7d5DLgVNHt66Y6QRr3o4qRQK-RsgbdcDqsASJAi/pub';
    const cheerio = require('cheerio'); // khai báo module cheerio
    const request = require('request-promise'); // khai báo module request-promise
    
    var data = {}
    var data2 = []
    var data3 = []
    var my_list = ['tiếng','nhảy', 'cờ', 'toeic', 'ielts','organ','địa',
'vẽ','sáo','thanh nhạc','thuế','kế toán', 'tây ban nha' ]
    const [html, setHtml] = useState('')
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(my_list)
    const [cv, setCV] = useState([])

    const handleSubmit = ()=>{
        setJobs(prev => [...prev, job])
    }
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(website)
            const html1 = await response.text()
            setHtml(html1)
            // const jsdom = require("jsdom");

            // const { JSDOM } = jsdom;
            const dom = new JSDOM(html1)
            const document = dom.window.document

            const dn = document.querySelectorAll(".c1")
            console.log(dn.length)
            for (var i = 0; i < dn.length; i++) {
                // console.log(typeof(dn[i].textContent))
                if((dn[i].textContent).toLowerCase().includes('online') ){
                    console.log('yes')
                    if (my_list.some(e => (dn[i-1].textContent).toLowerCase().includes(e)) != true){
                        console.log('ok')
                        data3.push((dn[i-2].textContent), (dn[i-1].textContent),(dn[i].textContent),(dn[i+1].textContent),(dn[i+2].textContent),(dn[i+3].textContent),(dn[i+4].textContent))
                    }
                }
            } 

            // for(var i=0; i<data3.length; i++){
            //     setCV
            // }
            setCV(data3)

            // setHtml(response.text());
            // console.log(response.data)

            

            // $('p.c0').each((index, el) => { // lặp từng phần tử có class là job__list-item
            //     const job = ($(el).find('span.c1').text()).trim().toLowerCase(); // lấy tên job, được nằm trong thẻ a < .job__list-item-title
            //     // data[job] = job; 
            //     // console.log(response)
            // })
            // var keys = Object.keys(data);
            // for(let i = 0; i <keys.length; i++){
                // if(keys[i].includes('online') ){
                //     console.log('yes')
                //     if (my_list.some(e => keys[i-1].includes(e)) != true){
                //         console.log('ok')
                //         data3.push((keys[i-2]), (keys[i-1]),(keys[i]),(keys[i+1]),(keys[i+2]),(keys[i+3]),(keys[i+4]))
                //     }
                // }
            // }
            // // console.log(name)
            // // console.log((data3))
            // setCV(data3)
    
        }
        fetchData(); 
    },[]);

    
    // const doc = parser.parseFromString(html, "text/xml");
    // console.log(doc.firstChild.innerHTML);
    
    const handleButton = ()=>{
        
    }
    const arrayData = (Object.values(cv).map((keyName, i) => (
        <li className="travelcompany-input" key={i} style={{listStyle:"none"}}>
            <span className="input-label"> {keyName}</span>
        </li>
    )));

    console.log(cv)
    
    
  return (
    <div>
        <h1>I can do it</h1>
        <div className="tu-khoa">
            <h3>Danh sach tu khoa: </h3>
            {jobs.map((job, index) =>(
                <span key={index} style={{color: 'black', background:'red',
                    display: 'inline-block',
                    padding: '5px',
                    borderRadius: '40px',
                    fontSize: '18px',
                    margin: '5px'}}>{job}</span>
            ))}
        </div>
        <div className="addKey">
            <h3>Add Keyword</h3>
            <input type='string' value={job} onChange={e => setJob(e.target.value)}/>
            <button type='submit' onClick={handleSubmit}>Add</button>
        </div>
        <div className="scrolbar" style={{border: 'none',padding: '5px',font: '24px/36px sans-serif',width: '650px',height: '500px',overflow: 'scroll'}}>
        {/* <button onClick={handleButton}>click</button> */}
        <ul>{arrayData}</ul>
        </div>

    </div>
  )
}
