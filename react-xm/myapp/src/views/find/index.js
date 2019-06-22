import {connect} from 'react-redux' 
import UI from './UI';
const mapStateToProps =(state) =>{
  // console.log(state)
  return {
  }
}
const Com = connect (mapStateToProps)(UI)

export default Com