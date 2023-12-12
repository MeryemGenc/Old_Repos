import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import '../style/main.scss';








ReactDOM.render(<TodoApp/>, document.getElementById('root'));


//////Header componentinin ES5 functional component hali//
// function Header (props){
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <div>{props.description}</div>
//         </div>
//     );
// }
//////Header componentinin Class component hali//
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <div>{this.props.description}</div>
//             </div>
//         );
//     }
// }



// class TodoList extends React.Component {
//     render(){
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.items.map(
//                             (item,index) => 
//                             <TodoItem deleteItem={this.props.deleteItem} key={index} item={item}/>
//                         )
//                     }
//                 </ul>
//                 <p>
//                     <button onClick={this.props.clearItems}>Clear Items</button>
//                 </p>
//             </div>
//         );
//     }
// }

// class TodoItem extends React.Component {
//     constructor(props){
//         super(props);
//         this.deleteItem = this.deleteItem.bind(this);
//     }
//     deleteItem(){
//         this.props.deleteItem(this.props.item)
//     }
//     render(){
//         return(
//             <li>
//                 {this.props.item}
//                 <button onClick={this.deleteItem}>X</button>
//             </li>
//         );
//     }
// }