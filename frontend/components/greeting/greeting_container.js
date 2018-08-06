import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mSTP = ({session, entities}) => {
  return{
  currentUser: entities.user[session.id]
 }
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP,mDTP)(Greeting);