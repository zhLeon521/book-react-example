import React from 'react';
import ReactDOM from 'react-dom';

// 无状态组件
// always return JSX

// function Geeting() {
//   return <h2>
//     This is my first components
//   </h2>
// }

// const Geeting = () => {
//   return React.createElement('h2', {}, 'hello world')
// }



// function Geeting() {
//   return <div>
//     <h2>
//       This is my first components
//     </h2>
//   </div>
// }

// const Geeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
// }


// function Geeting() {
//   return <div classNAme="">
//     <h2>
//       This is my first components
//     </h2>
//     <ul>
//       <li><a href='#'>hello world</a></li>
//       <li><a href='#'>hello react</a></li>
//       <img src='' alt="" />
//       <input type="text" name='' id=''/>
//     </ul>
//   </div>
// }


function Geeting() {
  return <div classNAme="">
    <Person />
    <Message/>
    

  </div>
}

// 没有括号就不用return
const Person = () => <h2>This is my first components</h2>
// 有括号就要return
const Message = () => {
  return (
  <ul>
    <li><a href='#'>hello world</a></li>
    <li><a href='#'>hello react</a></li>
    <img src='' alt="" />
    <input type="text" name='' id=''/>
  </ul>
  )

}

ReactDOM.render(<Geeting/>, document.getElementById('root'))

