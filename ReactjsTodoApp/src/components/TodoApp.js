import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Action from './Action';


export default class TodoApp extends React.Component {
    constructor(props){
        super(props);

        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        //Component oluştuğu anda çalışır(önce component constructor => render => componentDidMount())
        console.log("component oluşturuldu.");
        const jsonn = localStorage.getItem('items');
        const items = JSON.parse(jsonn);
        if (items) {
            this.setState({
                items : items
            })
        }
    }

    componentDidUpdate(prevProps,prevState){
        //Component güncellendiği (props,state için güncelleme) anda çalışır)
        console.log("component güncellendi.");
        if (prevState.items.length !== this.state.items.length) {
            const jsonn = JSON.stringify(this.state.items);
            localStorage.setItem('items',jsonn);
        }
    }

    componentWillUnmount(){
        //Component silindiğinde
        console.log("component silindi.");
    }

    deleteItem(item){
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            return {
                items: arr
            }
        })
    }

    clearItems(){
        this.setState({
            items : []
        });

    }

    addItem(item){
        if (!item) {
            return 'Lütfen bir görev giriniz.'
        }else if (this.state.items.indexOf(item) >-1) {
            return 'Gorev zaten mevcut.'
        }
        this.setState((prevState) => {
            return {items : prevState.items.concat(item)}
        });
    }

    render() {
        const app = {
            title : "Todo Application",
            description: "Lorem ipsum dolor sit amet."
        };

        return (
            <div className='container my-5'>
                <div className='card'>
                    <div className="card-header">
                        <Header title={app.title} description={app.description} />
                    </div>
                    <div className="card-body">
                        <TodoList deleteItem={this.deleteItem} items={this.state.items} clearItems={this.clearItems}/>
                    </div>
                    <div className="card-footer">
                        <Action addItem={this.addItem}/>
                    </div>
                </div>
            </div>
        );
    }
}


