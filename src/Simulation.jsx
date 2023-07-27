import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
const Simulation=()=>{

    const [array,setArray]=useState([]);
    const [manual,setManual]=useState('');
    const [boxes,updateBoxes]=useState();
    const [val,changeVal]=useState('');
    const[errors,setErrors]=useState({size:'',element:''});

    const [key,setKey]=useState();
    const [jth,setJth]=useState();
    const [ith,setIth]=useState();
    const [statement,setStatement]=useState('');
    // hook to update text of pause button
    const[pauseText,setPauseText]=useState('Pause')
    // initially pause button is disabled
    const[pauseStyle,setPauseStyle]=useState('opacity-50 pointer-events-none')
    // flag to check pause button is clicked or not 
    const[pauseFlag,setPauseFlag]=useState(false)
   
    // update pause text on change in pauseFlag
    useEffect(()=>{
        pauseFlag?setPauseText('Resume'):setPauseText('Pause')
    },[pauseFlag])
    // Initially disable all buttons ,run this hook only once when page load
    useEffect(()=>{
        if(!val){
            console.log("useEffet disabled buttons")
            const btns=document.getElementsByClassName('btns');
        for(let i =0;i<btns.length;i++){
                btns[i].disabled=true;
                btns[i].style.opacity=0.5;
        }
    }} ,[])
 
    const changeLineColour=(resolve,id,time)=>{
        // remove color from all lines 
        for(let  i=101;i<108;i++){
            if(i!=id){
            document.getElementById(i).style.color='Black';}
            else{
                const line= document.getElementById(id);
        line.style.color='red';
            }
        }
        
        return setTimeout(resolve,time);
    }
    // function to change key box color 
    const changeKeyBoxColor=(id)=>{
        const key=document.getElementById(id);
        key.style.backgroundColor="Yellow";
        const box= document.getElementById('keyBox');
        box.style.backgroundColor='Yellow';
    }
    // Change Jth comparing index color 
    const changeJcolor=(id)=>{
        if(id>=0){
           for(let i=0;i<=id+1;i++){
            if(i!=id){
        const J= document.getElementById(i);
        J.style.backgroundColor='Green';
        J.style.color='white';

            }else {
        const J= document.getElementById(id);
        J.style.backgroundColor='Blue';
            }
           }
        }
    }
    // Change till sorted index
    const changeTillSorted=(i)=>{
        let boxes=[];
        for(let j=0;j<=i;j++){
            boxes[j]=document.getElementById(j);
        }
        for(let j=0;j<boxes.length;j++){
            boxes[j].style.backgroundColor="Green";
             boxes[j].style.color='white';
        }
        
    }
    const enableDisableTryButton=()=>{
        const tryB=document.getElementById('try');
        if(tryB.disabled)
        {
            tryB.disabled=false;
            tryB.style.opacity=1;
        }else{
            tryB.disabled=true;
            tryB.style.opacity=0.5;}
    }
    // Enable disable start button 
    const enableStartButton=async ()=>{
        const btn=document.getElementsByClassName('btns')[2];
        
     
        btn.disabled=false;
        btn.style.opacity=1;
    }
    const disableStartButton= ()=>{
        // console.log('hello  i am here')
        const btn=document.getElementsByClassName('btns')[2];
        btn.disabled=true;
        btn.style.opacity=0.5;
        // console.log("Even here")
    }

    
    
    // Enable disable generate buttons 
    const enableGenerateButtons=()=>{
        const btns=document.getElementsByClassName('btns');
        for(let i =0;i<btns.length-1;i++){
                btns[i].disabled=false;
                btns[i].style.opacity=1;
        }
    }
    const disableGenerateButtons=()=>{
        const btns=document.getElementsByClassName('btns');
        for(let i=0;i<btns.length-1;i++){
            btns[i].disabled=true;
            btns[i].style.opacity=0.5;
        }
       } 
    // Enable disable submit button of input box
    const submitButton=()=>{
        if(flag){
        const btn= document.getElementById('submit');
        if(btn.disabled===true){
            btn.disabled=false;
            btn.style.opacity=1
        }else{
            console.log("Submit button disabled")
            btn.disabled=true;
            btn.style.opacity=0.5;
        }
    }
    }
    // Enable disable array size input box 
    const arraySizeButton=()=>{
        const size=document.getElementById('size');
        if(size.disabled===true){
            size.disabled=false;
            size.style.backgroundColor=null;
        }else{
            size.disabled=true;
            size.style.backgroundColor='grey';
        }
    }

    // function to pause the algorithm 
    const pauseResumeStep=(resolve,flag)=>{
          
    }
    const algorithm=async()=>{
        // dibsable generate button
        disableGenerateButtons();
        disableStartButton();
        enableDisableTryButton();
        submitButton();
        // disable size input box
        arraySizeButton();
        // enable the pause button 
        setPauseStyle('opacity-100 pointer-events-auto')
        console.log("Array before sorting ",array)
        for(let i=1;i<val;i++){  //Line 101
            setIth(i);
            await new Promise(resolve=>changeLineColour(resolve,'101',4000));
            let key=array.at(i);         //Line 102
            setKey(key);
            changeKeyBoxColor(i);
            
            await new Promise(resolve=>changeLineColour(resolve,'102',4000));
            // console.log(key)
            let j=i-1;          //Line 103
            setJth(j);
            changeJcolor(j);
            await new Promise(resolve=>changeLineColour(resolve,'103',4000));
            let flag=false; //track if while loop is executed
            while(j>=0 && array.at(j)>key)     //Line 104
            {
                flag=true; //track if while loop is executed 
                setStatement(`${array[j]} is greater than key (${key}). Now shfiting needs to occur to place key ${key} at its correct position.`)
                await new Promise(resolve=>changeLineColour(resolve,'104',6000));
                setStatement('');

                array[j+1]=array.at(j);    //Line 105

                setStatement(`array[j] ${array[j]} is shifted to one index right to create space for key ${key}`)
                updateBoxes(array.map((item,index)=>{
                    console.log("Array index ",index)
                    return(<div className='inline-block border-2 border-slate-500 p-2 md:p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)
                    
                })
                )
                
                await new Promise(resolve=>changeLineColour(resolve,'105',5000));
                
               
                
                setStatement('');

                j--;        //Line 106 
                setJth(j)
                changeJcolor(j);
                await new Promise(resolve=>changeLineColour(resolve,'106',4000));
               flag=false;
            }if(!flag){
                if(j<0){
                    setStatement(`Since j ${j} is less than 0, while loop condition fails.`)

                }else
                {
                setStatement(`Since array[j] ${array[j]} is less than key ${key}, while loop condition fails.`)
                }
                await new Promise(resolve=>changeLineColour(resolve,'104',5000));
                
            }
            setStatement('')
            array[j+1]=key;     //Line 107 

            updateBoxes(array.map((item,index)=>{
                console.log("Array index ",index)
                return(<div className='inline-block border-2 border-slate-500 p-2 md:p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)
                
            })

            )
            setStatement(`Key ${key} is placed to its correct position j+1 i.e. ${j+1} `)
            
            await new Promise(resolve=>changeLineColour(resolve,'107',5000));
            
            setStatement('');
            changeTillSorted(i);
        }
        setIth(array.length)
        setStatement(`i= ${array.length},which is equal to array size. For loop condition fails.`)
        await new Promise(resolve=>changeLineColour(resolve,'101',4000));

        document.getElementById('107').style.color=null;
        document.getElementById('keyBox').style.backgroundColor=null;
        setJth();
        setKey();
        setIth();
        setStatement('Hurray! Our array is sorted now.');
        setFlag(false);//close input box
         for(let i=101;i<108;i++){
            document.getElementById(i).style.color=null;
        }
        // enable generate buttons
        enableGenerateButtons(); 
        enableDisableTryButton();
        // Enable array size  input box 
       arraySizeButton();
    }
    
  useEffect(()=>{
    if(val<=0){
        disableGenerateButtons();
        disableStartButton();
    }else{
        enableGenerateButtons();
    }
  },[val])
    
    const handleChange=(e)=>{
        
       changeVal(e.target.value);
        // console.log("value",val)
              setErrors({size:''})
    }
// Generae random numbers 
    const generateRandom=(max,min)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    // Reset box styles 
    const resetStyles=()=>{
        setJth();
        setIth();
        setStatement('');
        for(let i=0;i<array.length;i++){
            document.getElementById(i).style.backgroundColor=null;
            document.getElementById(i).style.color=null;

        }
    }
    
    const generateElements =()=>{
        if(val>10){
            return setErrors({size:"Maximum allowed size is 10."})
        }
        setFlag(false);//Close input box 
        // Enable start button
        enableStartButton();        
        let array=[];
        for(let i=0;i<val;i++){
            array.push(generateRandom(10,100))
        }
         setArray(array);
        console.log("Array elements",array.at(0))
        updateBoxes(array.map((item,index)=>{
            console.log("Array index ",index)
            return(<div className='inline-block border-2 border-slate-500 p-2 md:p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)
            
        })
        )
        // reset every style to default 
            resetStyles();
    }
    // function to get array elements manually 
    const  [flag,setFlag]=useState(false); // flag for input box 
    const generateInput=()=>{
        if(val>10){
           return setErrors({size:"Maximum allowed size is 10."})
        }
          setFlag(!flag);
    }

    const generateManualArray=()=>{
    
     if(document.getElementById(0)!=null){
      resetStyles();
     }
       const text=manual.split(' ');
    //    console.log(text.length)
       if(text.length!=val){
        return setErrors({element:'Number of elements don\'t match.'})
       }else {
        
        setErrors({element:''});
        setArray(text);
    
        updateBoxes(array.map((item,index)=>{
            console.log("Array index ",index)
            return(<div className='inline-block border-2 border-slate-500 p-2 md:p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)           
        })
        )
        if(boxes){
            enableStartButton();
        }
    }
    }
    const handleManual=(e)=>{
        setErrors({element:''});
        setManual(e.target.value);
        console.log(manual);
    }
    // set message that display on hover of submit button 
       const[info,setInfo]=useState('');
    return (
        <div className="xl:flex justify-evenly shadow-xl rounded-xl m-5 h-min  mb-4">

            {/* Input box */}
            <div className="border-slate-300 border-4  py-2 xl:w-1/3 md:w-2/3 w-full text-center  float-left  grid grid-rows-auto">
                <h2 className="text-center font-bold text-lg md:text-2xl   text-black rounded shadow-md   m-auto mb-5 w-max">Input</h2>
                {/* Array size input box  */}
                <div className=" m-2">
                <label htmlFor="size" className=" float-left font-semibold tracking-wide text-sm md:text-base lg:text-lg">Array size:-</label>
                <Tippy content={errors.size}
                 visible={errors.size?true:false}
                // followCursor="true"
                placement="top-start">
                <input type="number" name="size" className="md:text-base text-sm hover:shadow-md hover:focus border-2 border-slate-300  rounded   font-semibold" id='size' value={val} onChange={handleChange} placeholder='Enter array size'></input></Tippy>
               
                </div>
                {/* <br></br> */}
                {/* element generation butttons */}
                <div className="md:flex md:justify-between m-2 md:m-3 md:h-max">
                    
                <button className="block  p-1 md:text-base text-sm md:mr-1 bg-[#001E25] text-white sm:my-4 md:my-5 my-2  rounded btns  "  onClick={generateElements} >Random elements.</button>
             
                <button className="block md:p-2 p-1  md:text-base text-sm bg-[#001E25] text-white sm:my-4 md:my-5 my-2  rounded btns md:static   " onClick={generateInput}>Enter elements manually</button>
                </div>

              
               {flag?<div className="mb-3 ">
                <Tippy content={errors.element} visible={errors.element?true:false} placement="top-start">
                <input type='text' placeholder="White space between elements" className="inline-block rounded border-2 border-black w-[65%] shadow-md  md:text-base text-sm" id='manual' value={manual} onChange={handleManual}></input></Tippy>
               <div className="inline-block group">
                <Tippy 
                content='Double Click' 
                placement="bottom" followCursor={true}>
                <button type="submit" className="md:p-2 p-1 md:text-base text-sm bg-[#001E25] text-white mx-2 rounded shadow-md  " id='submit' onClick={generateManualArray}>Submit</button></Tippy></div>
            
               </div>:null}
               <div className="flex justify-between m-2">
               <button className="p-1 md:p-2 md:text-base
               md:h-max text-sm bg-[#001E25] text-white  rounded btns   shadow-md z-10" onClick={algorithm}>Start</button>
               <Link to='/Test'><button id='try' className="p-1 md:p-2  md:text-base text-sm bg-[#001E25] text-white  rounded   shadow-md ">Try Yourself</button></Link>
               </div>
              
            </div>

                {/* Code Box */}
                
            <div className="border-slate-300 border-4  py-2 xl:w-1/3 md:w-2/3 w-full text-center ">
                <h2 className="text-center font-bold text-lg md:text-2xl   text-black rounded shadow-md   m-auto mb-5 w-max">Code</h2>
                <div className="font-bold -tracking-wider text-sm md:text-xl  grid relative left-[15%] text-left">
               <p id='101'>for(i=1;i&lt;{array.length};i++)</p>
               <div className=" w-min float-left ">
               <p className="float-left">&#123;</p>
               <div className="text-left py-3 w-max">
               <p id='102' className="mt-2">key = array[i]</p>
               <p id='103' className="mt-2">j= i-1 </p>
               <p id='104' className=" mt-2 ">while(j&gt;=0 && array[j]&gt;key)</p>
               
               <div className="relative left-[8%] w-min py-2">
               <p className="float-left">&#123;</p>
               <p id='105' className=" mt-2">array[j+1]=array[j]</p>
               <p id='106' className=" mt-2">j--</p>
               <p className="float-left">&#125;</p>
               </div>
               <p id='107' className=" mt-2">array[j+1]=key</p>
               </div>
               <p className="float-left">&#125;</p>
               </div>
            </div>
            </div>

            {/* Output Box  */}
            <div className="border-slate-300 border-4  px-5 py-2 xl:w-2/3 md:w-2/3 w-full text-center relative">
                <h2 className="text-center font-bold text-lg md:text-2xl  text-black rounded shadow-md z-10  m-auto w-max">Output</h2>
                <div className="mt-5">{boxes}</div>
                {boxes ?
                <div className="mt-4">
                <div className="font-bold text-sm md:text-xl border-2 border-black rounded-md mt-4 inline-block p-2" >I={ith}</div>
                 
                <div className="font-bold text-sm md:text-xl border-2 border-black rounded-md mt-4 inline-block p-2" >J={jth}</div>

                <div className="font-bold text-sm md:text-xl border-2 border-black rounded-md mt-4 inline-block p-2" id="keyBox">Key={key}</div>
                <div className=" absolute left-1 bottom-1 ">
                <button id='PauseButton' className={` ${pauseStyle} md:p-2 p-1  md:text-base text-sm text-white bg-[#001E25] cursor:pointer hover:bg-gray-700  rounded-md border-black border-2 my-2 float-left`} onClick={()=>setPauseFlag(!pauseFlag)}>{pauseText}</button>
                </div>
                <div className="mt-10"><p className="text-red-500 text-base md:text-lg text-center font-semibold">{statement}</p></div></div>:<h2 className="font-bold md:text-lg text-sm xl:text-xl tracking-wide">Please enter array size and generate elements</h2>}
            </div>
        </div>
    );
}
export default Simulation;