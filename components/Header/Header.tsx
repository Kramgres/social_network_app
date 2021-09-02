import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../store/authorization/authorization.actions'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthorized)
  return (
    <div className={styles.header}>
      {isAuth && <button onClick={() => dispatch(logout())}>Выйти</button>}
    </div>
  )
}

export default Header
