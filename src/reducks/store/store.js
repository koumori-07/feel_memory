
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { UsersReducer } from '../users/reducers';
import { ArticlesReducer } from '../article/reducers';
import { FeelesReducer } from '../feeles/reducers';
import { ProfileReducer } from '../profile/reducers'
// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history) {
  let middleWares = [routerMiddleware(history), thunk];
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      articles: ArticlesReducer,
      feeles: FeelesReducer,
      profile: ProfileReducer
    }),
    applyMiddleware(
      ...middleWares
    )
  );
}
