import { FaRegUser } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

export const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	console.log(pathname)

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button>
					<IoArrowBackOutline
						onClick={() => {
							navigate(backLink)
						}}
					/>
				</button>
			) : (
				<button onClick={() => navigate('/profile')}>
					<FaRegUser />
				</button>
			)}
			<Hamburger />
		</header>
	)
}
