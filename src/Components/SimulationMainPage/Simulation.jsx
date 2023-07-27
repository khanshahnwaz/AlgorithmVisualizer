import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
const Simulation = () => {
  const [array, setArray] = useState([]);
  const [manual, setManual] = useState("");
  const [boxes, updateBoxes] = useState();
  const [val, changeVal] = useState("");
  const [errors, setErrors] = useState({ size: "", element: "" });

  const [key, setKey] = useState();
  const [jth, setJth] = useState();
  const [ith, setIth] = useState();
  const [statement, setStatement] = useState("");
  // hook to update text of pause button
  const [pauseText, setPauseText] = useState("Pause");
  // initially pause button is disabled
  const [pauseStyle, setPauseStyle] = useState(
    "opacity-50 pointer-events-none"
  );
  // flag to check pause button is clicked or not
  const [pauseFlag, setPauseFlag] = useState(false);

  // get the i,j and key box to change their value using javascript while executing the algorithm in generator function because using hooks in generator function cause the function to restart the execution
  let ithBox, jthBox, keyBox, statementBox, iterBox, arrayContainer, gen;
  useEffect(() => {
    ithBox = document.getElementById("i");
    jthBox = document.getElementById("j");
    keyBox = document.getElementById("key");
    statementBox = document.getElementById("statement");
    iterBox = document.getElementById("iter");
    arrayContainer = document.getElementById("arrayBox");
    gen = runStepByStep();
  });
  // Initially disable all buttons ,run this hook only once when page load
  useEffect(() => {
    if (!val) {
      console.log("useEffet disabled buttons");
      const btns = document.getElementsByClassName("btns");
      for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
        btns[i].style.opacity = 0.5;
      }
    }
  }, []);

  function changeLineColour(resolve, id, time) {
    // remove color from all lines
    for (let i = 101; i < 108; i++) {
      if (i != id) {
        document.getElementById(i).style.color = "Black";
      } else {
        const line = document.getElementById(id);
        line.style.color = "red";
      }
    }

    // return setTimeout(console.log("hii"),time);
  }
  // function to change key box color
  const changeKeyBoxColor = (id) => {
    const key = document.getElementById(id);
    key.style.backgroundColor = "Yellow";
    key.style.color='black'
    const box = document.getElementById("keyBox");
    box.style.backgroundColor = "Yellow";
  };

//   change color of J+1 index
const changeJPlusColor=(i)=>{
    const el=document.getElementById(i);
    if(el){
        el.style.backgroundColor = "Blue";
        el.style.color='white'
    }
}
  // Change Jth comparing index color
  const changeJcolor = (id) => {
    if (id >= 0) {
      for (let i = 0; i <= id + 1; i++) {
        if (i != id) {
          const J = document.getElementById(i);
          J.style.backgroundColor = "Green";
          J.style.color = "white";
        } else {
          const J = document.getElementById(id);
          J.style.backgroundColor = "Blue";
          J.style.color='white'
        }
      }
    }
  };
  // Change till sorted index
  const changeTillSorted = (i) => {
    let boxes = [];
    for (let j = 0; j <= i; j++) {
      boxes[j] = document.getElementById(j);
    }
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].style.backgroundColor = "Green";
      boxes[j].style.color = "white";
    }
  };
  const enableDisableTryButton = () => {
    const tryB = document.getElementById("try");
    if (tryB.disabled) {
      tryB.disabled = false;
      tryB.style.opacity = 1;
    } else {
      tryB.disabled = true;
      tryB.style.opacity = 0.5;
    }
  };
  // Enable disable start button
  const enableStartButton = async () => {
    const btn = document.getElementsByClassName("btns")[2];

    btn.disabled = false;
    btn.style.opacity = 1;
  };
  const disableStartButton = () => {
    // console.log('hello  i am here')
    const btn = document.getElementsByClassName("btns")[2];
    btn.disabled = true;
    btn.style.opacity = 0.5;
    // console.log("Even here")
  };

  // Enable disable generate buttons
  const enableGenerateButtons = () => {
    const btns = document.getElementsByClassName("btns");
    for (let i = 0; i < btns.length - 1; i++) {
      btns[i].disabled = false;
      btns[i].style.opacity = 1;
    }
  };
  const disableGenerateButtons = () => {
    const btns = document.getElementsByClassName("btns");
    for (let i = 0; i < btns.length - 1; i++) {
      btns[i].disabled = true;
      btns[i].style.opacity = 0.5;
    }
  };
  // Enable disable submit button of input box
  const submitButton = () => {
    if (flag) {
      const btn = document.getElementById("submit");
      if (btn.disabled === true) {
        btn.disabled = false;
        btn.style.opacity = 1;
      } else {
        console.log("Submit button disabled");
        btn.disabled = true;
        btn.style.opacity = 0.5;
      }
    }
  };
  // Enable disable array size input box
  const arraySizeButton = () => {
    const size = document.getElementById("size");
    if (size.disabled === true) {
      size.disabled = false;
      size.style.backgroundColor = null;
    } else {
      size.disabled = true;
      size.style.backgroundColor = "grey";
    }
  };

  // copy function of algorithm

  function* runStepByStep() {
    for (let i = 1; i < val; i++) {
      //Line 101
   
      ithBox.textContent = i;
      iterBox.textContent = i;
    //   for repeat iteration jth and keybox should come in default position
    jthBox.textContent='';
    keyBox.textContent='';
    document.getElementById("keyBox").style.backgroundColor = "white";
    // 
      changeLineColour("resolve", "101", 4000);

      yield 0;
      let key = array.at(i); //Line 102
      keyBox.textContent = key;
      changeKeyBoxColor(i);
      changeLineColour("resolve", "102", 4000);
      yield 1;
      let j = i - 1; //Line 103
      // setJth(j);
      jthBox.textContent = j;
      changeJcolor(j);
      changeKeyBoxColor(i);
      changeLineColour("resolve", "103", 4000);
      yield 2;
      let flag = false; //track if while loop is executed
      while (j >= 0 && array.at(j) > key) {
        //Line 104
        flag = true; //track if while loop is executed
        statementBox.textContent = `${array[j]} is greater than key (${key}). Now shfiting needs to occur to place key ${key} at its correct position.`;
        changeLineColour("resolve", "104", 6000);
        yield;

        statementBox.textContent = "";

        array[j + 1] = array.at(j); //Line 105

        statementBox.textContent = `array[j] ${array[j]} is shifted to one index right to create space for key ${key}`;

        arrayContainer.innerHTML = "";
        array.map((item, index) => {
          let el = document.createElement("div");
          el.innerText = item;
          el.className =
            "inline-block border-2 border-slate-500 p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700";
          el.setAttribute("key", index);
          el.setAttribute("id", index);
          arrayContainer.appendChild(el);
        });
        if(j==i-1)
          changeKeyBoxColor(i);
        changeJcolor(j);
        changeJPlusColor(j+1);

        changeLineColour("resolve", "105", 5000);
        yield;

        statementBox.textContent = "";

        j--; //Line 106
        // setJth(j)
        jthBox.textContent = j;
        changeJcolor(j);
        changeLineColour("resolve", "106", 4000);
        yield 6;
        flag = false;
      }

      if (!flag) {
        if (j < 0) {
          statementBox.textContent = `Since j ${j} is less than 0, while loop condition fails.`;
        } else {
          statementBox.textContent = `Since array[j] ${array[j]} is less than key ${key}, while loop condition fails.`;
        }
        changeLineColour("resolve", "104", 5000);
        yield 7;
      }

      statementBox.textContent = "";
      array[j + 1] = key; //Line 107

      arrayContainer.innerHTML = "";
      array.map((item, index) => {
        let el = document.createElement("div");
        el.innerText = item;
        el.className =
          "inline-block border-2 border-slate-500 p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700";
        el.setAttribute("key", index);
        el.setAttribute("id", index);
        arrayContainer.appendChild(el);
      });

      statementBox.textContent = `Key ${key} is placed to its correct position j+1 i.e. ${
        j + 1
      } `;
      changeLineColour("resolve", "107", 5000);
    //   changeTillSorted(i);
    changeTillSorted(i);
      changeKeyBoxColor(j+1);
      yield 8;

      statementBox.textContent = "";
      changeTillSorted(i);
    }
    ithBox.textContent = array.length;
    iterBox.textContent = array.length;
    statementBox.textContent = `i= ${array.length},which is equal to array size. For loop condition fails.`;
    changeLineColour("resolve", "101", 4000);
    yield;

    document.getElementById("107").style.color = null;
    document.getElementById("keyBox").style.backgroundColor = null;

    ithBox.textContent = "";
    jthBox.textContent = "";
    keyBox.textContent = "";

    statementBox.textContent = "Hurray! Our array is sorted now.";
    setInterval(() => {
      statementBox.textContent = "";
      resetStyles();
      changeLineColour("000");
    }, 2000);
  }

  useEffect(() => {
    if (val <= 0) {
      disableGenerateButtons();
      disableStartButton();
    } else {
      enableGenerateButtons();
    }
  }, [val]);

  const handleChange = (e) => {
    changeVal(e.target.value);
    // console.log("value",val)
    setErrors({ size: "" });
  };
  // Generae random numbers
  const generateRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  // Reset box styles
  const resetStyles = () => {
    setJth();
    setIth();
    setStatement("");
    if (jthBox) {
      jthBox.textContent = "";
      ithBox.textContent = "";
      keyBox.textContent = "";
      const el=document.getElementById("keyBox")
      if(el)
         el.style.backgroundColor = "white";
    }

    for (let i = 0; i < array.length; i++) {
        const el= document.getElementById(i);
        if(el){
            el.style.backgroundColor = null;
           el.style.color = null;
        }
     
    }
  };

  const generateElements = () => {
    if (statementBox) {
      statementBox.textContent = "";
      arrayContainer.innerHTML = "";
    }
    if (val > 10) {
      return setErrors({ size: "Maximum allowed size is 10." });
    }
    changeLineColour("000");
    setFlag(false); //Close input box
    // Enable start button
    enableStartButton();
    let array = [];
    for (let i = 0; i < val; i++) {
      array.push(generateRandom(10, 100));
    }
    setArray(array);
    console.log("Array elements", array.at(0));

    array.map((item, index) => {
      let el = document.createElement("div");
      el.innerText = item;
      el.className =
        "inline-block border-2 border-slate-500 p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700";
      el.setAttribute("key", index);
      el.setAttribute("id", index);
      arrayContainer.appendChild(el);
    });

    iterBox.textContent = 1;
    // reset every style to default
    resetStyles();
  };
  // function to get array elements manually
  const [flag, setFlag] = useState(false); // flag for input box
  const generateInput = () => {
    if (val > 10) {
      return setErrors({ size: "Maximum allowed size is 10." });
    }
    setFlag(!flag);
  };

  const generateManualArray = () => {
    if (document.getElementById(0) != null) {
      resetStyles();
    }
    const text = manual.split(" ");
    //    console.log(text.length)
    if (text.length != val) {
      return setErrors({ element: "Number of elements don't match." });
    } else {
      setErrors({ element: "" });
      setArray(text);
      changeLineColour("000");
      arrayContainer.innerHTML = "";
      array.map((item, index) => {
        let el = document.createElement("div");
        el.innerText = item;
        el.className =
          "inline-block border-2 border-slate-500 p-4 my-1 md:text-base text-sm text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700";
        el.setAttribute("key", index);
        el.setAttribute("id", index);
        arrayContainer.appendChild(el);
      });
      if (array.length > 0) {
        enableStartButton();
      }
      iterBox.textContent = 1;
    }
  };
  const handleManual = (e) => {
    setErrors({ element: "" });
    setManual(e.target.value);
    console.log(manual);
  };

  return (
    <div className="xl:flex justify-evenly  m-5 h-min  mb-4 ">
      {/* Input box */}
      <div className=" border-4 border-slate-300 py-2 xl:w-1/3 md:w-2/3 w-full text-center  float-left  grid grid-rows-auto ">
        <h2 className="text-center font-bold text-lg md:text-2xl   text-black rounded   mx-auto  w-max">
          Input
        </h2>
        {/* Array size input box  */}
        <div className="m-2">
          {/* <label htmlFor="size" className=" float-left font-semibold tracking-wide text-sm md:text-base lg:text-lg">Array size:-</label> */}
          <Tippy
            content={errors.size}
            visible={errors.size ? true : false}
            // followCursor="true"
            placement="top-start"
          >
            <input
              type="number"
              name="size"
              className="md:text-base text-sm hover:shadow-md hover:focus border-2 border-slate-300  rounded   font-semibold w-full p-2"
              id="size"
              value={val}
              onChange={handleChange}
              placeholder="Enter array size"
            ></input>
          </Tippy>
        </div>
        {/* <br></br> */}
        {/* element generation butttons */}
        <div className="md:flex md:justify-between m-2 md:m-3 md:h-max">
          <Tippy
            content="Click me to generate array of random numbers"
            interactive
            placement="top-start"
          >
            <button
              className="block  p-2 md:text-base text-sm md:mr-1 bg-[#001E25] text-white sm:my-4 md:my-5 my-2  rounded btns  w-full hover:opacity-50"
              onClick={generateElements}
            >
              Random elements.
            </button>
          </Tippy>
          <Tippy
            content="Click me to enter elements manually"
            interactive
            placement="top-start"
          >
            <button
              className="block p-2   md:text-base text-sm bg-[#001E25] text-white sm:my-4 md:my-5 my-2  rounded btns md:static  w-full  hover:opacity-50"
              onClick={generateInput}
            >
              Enter elements manually
            </button>
          </Tippy>
        </div>

        {flag ? (
          <div className=" w-full flex gap-x-2 p-2">
            <Tippy
              content={errors.element}
              visible={errors.element ? true : false}
              placement="top-start"
            >
              <input
                type="text"
                placeholder="White space between elements"
                className="inline-block rounded border-2 border-black shadow-md  md:text-base text-sm w-full h-max p-2"
                id="manual"
                value={manual}
                onChange={handleManual}
              ></input>
            </Tippy>
            <div className="inline-block group float-right h-max">
              <Tippy
                content="Double Click"
                placement="bottom"
                followCursor={true}
              >
                <button
                  type="submit"
                  className="p-2 md:text-base text-sm bg-[#001E25] text-white rounded shadow-md  hover:opacity-50"
                  id="submit"
                  onClick={generateManualArray}
                >
                  Submit
                </button>
              </Tippy>
            </div>
          </div>
        ) : null}
        <div className=" mx-2 h-max mt-auto">
          <Link to="/Test">
            <Tippy
              content="Click me to test your knowledge"
              interactive
              placement="top"
            >
              <button
                id="try"
                className="w-full p-2  md:text-base text-sm bg-[#001E25] text-white  rounded   shadow-md hover:opacity-50"
              >
                Try Yourself
              </button>
            </Tippy>
          </Link>
        </div>
      </div>

      {/* Code Box */}

      <div className="border-slate-300 border-4  py-2 xl:w-1/3 md:w-2/3 w-full text-center ">
        <h2 className="text-center font-bold text-lg md:text-2xl   text-black rounded   m-auto  w-max">
          Code
        </h2>
        <div className="font-bold -tracking-wider text-sm md:text-xl  grid relative left-[15%] text-left">
          <p id="101">
            for(i=<span id="iter"></span>;i&lt;{array.length};i++)
          </p>
          <div className=" w-min float-left ">
            <p className="float-left">&#123;</p>
            <div className="text-left py-3 w-max">
              <div className="relative left-4">
                <p id="102" className="mt-2">
                  key = array[i]
                </p>
                <p id="103" className="mt-2">
                  j = i-1{" "}
                </p>

                <p id="104" className=" mt-2 ">
                  while( j&gt;=0 && array[j]&gt;key )
                </p>
              </div>

              <div className="relative left-[3%] w-min ">
                <p className="">&#123;</p>
                <p id="105" className=" mt-2 ml-3">
                  array[j+1]=array[j]
                </p>
                <p id="106" className=" mt-2 ml-3">
                  j--
                </p>
                <p className="">&#125;</p>
              </div>
              <p id="107" className=" mt-2">
                array[j+1]=key
              </p>
            </div>
            <p className="">&#125;</p>
          </div>
        </div>
      </div>

      {/* Output Box  */}
      <div className="border-slate-300 border-4  px-5 py-2 xl:w-2/3 md:w-2/3 w-full text-center relative">
        <h2 className="text-center font-bold text-lg md:text-2xl  text-black rounded  mx-auto w-max">
          Output
        </h2>
        {/* <div className="mt-5">{boxes}</div> */}
        <div className="" id="arrayBox"></div>

        {array.length > 0 ? (
          <div className="mt-4">
            <div className="font-bold text-sm md:text-xl border-2 border-black rounded-md mt-4 inline-block p-2">
              I={ith}
              <span id="i"></span>
            </div>

            <div className="font-bold text-sm md:text-xl border-2 border-black rounded-md mt-4 inline-block p-2">
              J=<span id="j"></span>
            </div>

            <div
              className="font-bold text-sm md:text-xl border-2 border-black rounded-md mt-4 inline-block p-2"
              id="keyBox"
            >
              Key={key}
              <span id="key"></span>
            </div>

            <div className="mx-auto">
              <p className="text-[#001E25] text-base md:text-lg text-center font-semibold">
                <span id="statement"></span>
              </p>
            </div>
          </div>
        ) : (
          <h2 className="font-bold md:text-lg text-sm xl:text-xl tracking-wide">
            Please enter array size and generate elements
          </h2>
        )}
        <Tippy content="Click me to see execution step by step" interactive>
          <button
            className="my-2 p-2 md:text-base                 
               md:h-max text-sm bg-[#001E25] text-white  rounded btns   shadow-md z-10 mx-auto"
            onClick={() => {
              console.log(gen.next());
            }}
          >
            Next
          </button>
        </Tippy>
      </div>
    </div>
  );
};
export default Simulation;
