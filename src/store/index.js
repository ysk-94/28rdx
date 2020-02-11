import { 
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../reducers/tasks';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // tasksReducerをtasksというkeyに割り当てる
      tasks: tasksReducer,
      // react-router-reduxのReducer
      router: routerReducer,
    }),
    applyMiddleware(
      // react-router-reduxのmiddleware
      routerMiddleware(history)
    )
  );
}

