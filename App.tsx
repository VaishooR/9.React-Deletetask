import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  // display input text
  const [text, showtext] = React.useState('');
  let handletext = (event) => {
    return showtext(event.target.value);
  };

  // on clicking button, push inputs to array
  const [list, setlist] = useState([]);
  let addtask = () => {
    return setlist([...list, text]);
  };

  // delete function:
  let handledelete = (taskname) => {
    setlist(list.filter((task) => task !== taskname));
  };

  return (
    <div>
      {/* input text */}
      <input type="text" onChange={handletext} />

      {/* button */}
      <button onClick={addtask}>Add Task</button>

      {/* display array items as list */}
      <ul>
        {list.map((lis) => {
          return (
            <li>
              {lis}&nbsp;
              <button onClick={() => handledelete(lis)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}





// delete function:
// let handledelete=(taskname)=>{
//   let newlist=list.filter(task=>{
//    return task!=taskname;
//   })
//   setlist(newlist)
// }



// delete function:
// let handledelete=(taskname)=>{
//   let newlist=list.filter(task=> task!== taskname);
//   setlist(newlist);
// }



// delete function:
// let handledelete=(taskname)=>{
//   setlist(list.filter(task=>task!==taskname))
// }



// delete function
//  let handledelete=(taskname)=>{
//   let newlist=list.filter(task=>{
//     if(task==taskname){
//       return false;
//     }else{
//       return true;
//     }
//   })
//   setlist(newlist)
// }
