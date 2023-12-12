
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import blogReducer from '../reducers/blogs'
import authReducer from '../reducers/auth'
//redux 'ın tek başına yeterli gelmediği alanlarda yardımcı (MIDDLEWARE)
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const cs = () => {
    const store = createStore(
        //combineReducers store içerisine 2 reducer birden atanmasını sağlar.
        combineReducers({
          blogs: blogReducer,
          auth: authReducer
        }),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}


export default cs;






