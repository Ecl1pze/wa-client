import { FaRegUser } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header>
			<div className={styles.wrapper}>
				<button>
					<FaRegUser size={31} />
				</button>

				<button>
					<RiMenu3Fill size={31} />
				</button>
			</div>
		</header>
	)
}
