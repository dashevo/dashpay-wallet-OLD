import { connect } from 'react-redux';
import PayTabs from './navigations';
import selector from './selectors';

export default connect(selector)(PayTabs);
