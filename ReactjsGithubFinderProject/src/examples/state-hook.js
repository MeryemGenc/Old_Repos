//components => class components = stateless function components + state + lifecycle functions
//React 16.8.0'dan itibaren => function components + hook = stateful function components
//statefull components => this kullanılmaz.
//useEffect Hook => class component deki lifecycle metodlarının stateful function componentdeki alternatifleri:
//componentDidUpdate+componentDidMount => useEffect ||
//LocalStorage içerisinde depolanmak istenen veri => componentDidUpdate'de set edilip + componentDidMount'da LS'dan getirilmesi (yeterli.)

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// export default class App extends Component {
//      constructor(props){
//          super(props);
//          this.state= {
//              count:0
//          }
//      }
//      componentDidMount() {
//          console.log("component didmount");
//      }
//      componentDidUpdate() {
//          console.log("component didupdate");
//      }
//     render() {
//         return (
//             <div>
//                  <p>Butona {this.state.count} kez tıklandı.</p>
//                  <button onClick={() => this.setState({count = this.state.count+1})}> +1 </button>     
//             </div>
//         )
//     }
// }
//////////////////////////////////////////////////////////////////////
// function App(props) {
//     return (
//         <div>
//             function component
//         </div>
//     )
// }
//////////////////////////////////////////////////////////////////////


const App = (props) => {
    //objiçerisine 2 eleman atılır. Biri atanan değer , 2.si bu değeri state'de set eden function => this.state yerine obj[0] kullanılır
    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text);




    useEffect(() =>{
        console.log('only run for count update');

        localStorage.setItem('count', count);
    }, [count]) // sadece count için componentDidUpdate

    useEffect(() =>{
        console.log('only componentDidMount');

        const countData = localStorage.getItem('count');
        if (countData) {
            setCount(Number(countData));
        }

    }, []) // [] => dependency => neye bağlı çalışacak // sadece componentDidMount görevini üstlenir.

    useEffect(() =>{
        console.log('useEffect = componentDidUpdate+componentDidMount');
    })

    return (
        <div>
            <p>Butona {count} kez tıklandı.</p>
            <p>Girilen Text: {text}</p>
            <button onClick={() => setCount(count+1)}> +1 </button>
            <button onClick={() => setCount(count-1)}> -1 </button>
            <button onClick={() => setCount(props.count)}> Reset </button>
            <input type="text" value={text}  onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: 'sssaaa'
}



ReactDOM.render(<App />, document.getElementById('root'));

