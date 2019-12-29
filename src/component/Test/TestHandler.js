import Test from "./Test";
import { connect } from 'react-redux';
import { selectAuthor } from "../../store/actions";

function mapStateToProps(state) {
  return {
    data: state.selectedIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectAuthor: (test) => dispatch(selectAuthor(test))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);