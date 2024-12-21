// // import React, { Component } from 'react'

// // export default class App extends Component {

// //   state ={
// //     inputValue: ''
// //   }
// //   // handleClick = (event) => {
// //   //   this.setState(()=>{
// //   //     return {inputValue: event.target.value}
// //   //   })
// //   // }
// //   handChange = (event) =>{
// //     console.log(event.target.checked);
// //   }
// //   handeSelect = (event) =>{
// //     this.setState(() => {
// //       return {select: event.target.value}
// //     })
// //   }

// //   render () {
// //     return (
// //       <>
// //        <input type='text' value={this.state.inputValue} onChange={this.handChange}/>
// //        <br/>
// //        <select name='lang' defaultValue={"en"} onChange={this.handeSelect}>
// //         <option value="uz">uzbek</option>
// //         <option value="ru">russian</option>
// //         <option value="en">english</option>
// //        </select>
// //       </>
// //     )
// //   }
// // }

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     todos: []
//   }

//   inputRef = React.createRef()

//   componentDidUpdate () {
//     this.inputRef.current.value = ''
//   }
//   handleSubmit = () => {
//     const date = new Date()
//     const hours = String(date.getHours()).padStart(2, '0')
//     const minutes = String(date.getMinutes()).padStart(2, '0')
//     const seconds = String(date.getSeconds()).padStart(2, '0')

//     this.setState(prev => {
//       return {
//         todos: [
//           ...prev.todos,
//           {
//             text: this.inputRef.current.value,
//             date:`${hours}:${minutes}:${seconds}`,
//             isCompleted: false
//           }
//         ]
//       }
//     })
//   }

//   handleCheckbox = (event, index) => {
//     const { todos } = this.state;
//     todos[index].isCompleted = event.target.checked; 
//     this.setState({ todos });
//   };

//   UpdateTodo = (index) =>{
//     alert("Update")
//   }
  
//   render() {
//     const { inputRef, handleSubmit, state } = this;
  
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="offset-2 col-md-8 p-2 border border-4">
//             <div className="d-flex justify-content-between">
//               <input
//                 type="text"
//                 ref={inputRef}
//                 className="w-100 m-1 border btn-outline"
//               />
//               <button className="btn btn-success m-1" onClick={handleSubmit}>
//                 click
//               </button>
//             </div>
//             <div className="border border-2">
//               {state.todos.map((todo, index) => {
//                 return (
//                   <div className='border d-flex justify-content-between align-items-center p-1' key={index}>
//                     <div>
//                     {todo.text} <em>{todo.date.toLocaleString()}</em>{" "}
//                     <input
//                       type="checkbox"
//                       checked={todo.isCompleted}
//                       onChange={(event) => this.handleCheckbox(event, index)} // OnChange ishlatilgan
//                     />
//                     </div>
//                     <div className='d-flex gap-1'>
//                       <button className='btn btn-success' onClick={() => this.UpdateTodo(index)}>Update</button>
//                       <button className='btn btn-danger'>Delete</button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <div>
//           {/* <input type=''/> */}
//           {state.todos.map((todo, index) => {
//             return (
//               <div key={index}>
//                 <input
//                   type="text"
//                   placeholder='Update todo'
//                 />
//                 {todo.text} <em>{todo.date.toLocaleString()}</em>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     );
//   }
// }  







import React, { Component } from 'react';


export default class App extends Component {
  state = {
    todos: []
  };

  inputRef = React.createRef();

  componentDidUpdate(_, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      this.inputRef.current.value = '';
    }
  }

  handleSubmit = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const todoText = this.inputRef.current.value.trim();
    if (!todoText) return; // Bo'sh `todo`larni qo'shmaslik

    this.setState((prev) => ({
      todos: [
        ...prev.todos,
        {
          count: prev.todos.length + 1,
          text: todoText,
          date: `${hours}:${minutes}:${seconds}`,
          isCompleted: false,
        }
      ]
    }));
  };

  handleCheckbox = (event, index) => {
    const { todos } = this.state; 
    todos[index].isCompleted = event.target.checked;
    this.setState({ todos });
  };

  handleDelete = (index) => {
    const todos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos });
  };

  handleUpdate = (index) => {
    const updatedText = prompt("Yangi matnni kiriting:", this.state.todos[index].text);
    if (updatedText) {
      const todos = [...this.state.todos];
      todos[index].text = updatedText.trim();
      this.setState({ todos });
    }
  };

  render() {
    const { inputRef, handleSubmit, state } = this;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="offset-2 col-md-8 p-2 border border-4">
            <div className="d-flex justify-content-between">
              <input
                type="text"
                ref={inputRef}
                className="w-100 m-1 border btn-outline"
              />
              <button className="btn btn-success m-1" onClick={handleSubmit}>
                Add 
              </button>
            </div>
            <div className="border border-2">
              {state.todos.map((todo, index) => (
                <div
                  className="border d-flex justify-content-between align-items-center p-1"
                  key={index}
                >
                  <div>
                    <span className='fw-bold'>
                      {index + 1}. {todo.text}
                    </span>{" "}
                    <em>{todo.date}</em>{" "}
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={(event) => this.handleCheckbox(event, index)}
                    />
                  </div>
                  <div className="d-flex gap-1">
                    <button
                      className="btn btn-success"
                      onClick={() => this.handleUpdate(index)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


