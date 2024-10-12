import { IoClose } from 'react-icons/io5'
import { RiMenu3Fill } from 'react-icons/ri'
import { useClickOutside } from '../../../hooks/useOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { ref, setIsShow, isShow } = useClickOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <RiMenu3Fill />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
export default Hamburger
