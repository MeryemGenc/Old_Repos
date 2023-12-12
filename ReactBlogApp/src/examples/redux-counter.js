import {createStore} from 'redux';






const initialState = {
    count: 0
  }
  
  //blogs, auth(username,isLoggedIn...) reducers
  //REDUCER
  const counterReducer = (state = initialState, action) => {
    switch(action.type){
      case "INCREMENT":
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
          count: state.count+incrementBy
        }
  
      case "DECREMENT":
        return {
          count: state.count-1
        }
  
      case "RESET":
        return {
          count: 0
        }
  
      
      default: 
        return state
    }
  }
  
  
  //STORE => redux yapısı içerisinde reducer kullanılarak (counterReducer) store oluşturuldu 
  //store'a gelen (counterReducer üzerinden) action'ın type parametresine bakarak state üzerinde işlem yapılır.
  const store = createStore(counterReducer);
  
  
  //subscribe metodu state değeri (burada: count) değiştiğinde çalıştırılır.
  store.subscribe(() => {
    //GET STATE
    console.log(store.getState());
  })
  
  //INCREMENT, DECREMENT, RESET => ACTIONS
  // store.dispatch({
  //   type: 'INCREMENT',
  //   incrementBy: 10
  // })
  
  
  //DISPATCH
  






