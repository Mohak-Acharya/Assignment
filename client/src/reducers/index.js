import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import profileReducer from './profile_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  form: formReducer,  
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;