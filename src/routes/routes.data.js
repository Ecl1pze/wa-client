import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		exact: false,
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		exact: false,
		component: NewWorkout,
		isAuth: false
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
		isAuth: false
	}
]
