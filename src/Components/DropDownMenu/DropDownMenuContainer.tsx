import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import { setIsAuthUser } from '../../Redux/AuthReducer/actions';

const mapDispatchToProps = {
  setIsAuthUser,
};

export default connect(null, mapDispatchToProps)(DropDownMenu);
