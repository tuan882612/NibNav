import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box, Button, IconButton, Toolbar, Typography
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckSession from '../../utils/UserUtilities';

function NavigationBar() {
	const [openPopup, setOpenPopup] = useState(false);
	const navigate = useNavigate();

	const logButton = () => {
		return (
			(sessionStorage.getItem('login') === 'true')?
				<Button
					sx={{"&:hover":{bgcolor: '#5b6b5e'}}}
					color='inherit'
					onClick={() => {
						sessionStorage.setItem("login", 'false')
						sessionStorage.setItem("id", "")
						navigate('/login')
					}}
				>
					Sign Out
				</Button>:
				<Button
					sx={{"&:hover":{bgcolor: '#5b6b5e'}}}
					color='inherit'
					onClick={() => navigate('/login')}
				>
					Login
				</Button>
		)
	}
	

	return (
		<AppBar
			position='static'
			sx={{ bgcolor: '#788c7c' }}
		>
			<Toolbar 
				sx={{
					justifyContent: 'space-between', 
					display: 'flex' 
				}}
			>
				{/* <IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton> */}
				<Box
					sx={{
						flexGrow: 0.1,
						display: 'inline-flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography
						variant='h6'
						component='div'
						sx={{ cursor: 'pointer' }}
						onClick={() => navigate('/')}
					>
						Home
					</Typography>
					<Typography
						variant='h6'
						component='div'
						sx={{ cursor: 'pointer' }}
						onClick={() => navigate('/search')}
					>
						Search
					</Typography>
					<Typography
						variant='h6'
						component='div'
						sx={{ cursor: 'pointer' }}
						onClick={() => navigate('/feedback')}
					>
						Feedback
					</Typography>
					<Typography
						variant='h6'
						component='div'
						sx={{ cursor: 'pointer' }}
						onClick={() => navigate('/profile')}
					>
						Profile
					</Typography>
				</Box>
				<Box>
					{logButton()}
				</Box>
				
				{/* <Popup
					title={'Login'}
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
					color='inherit' 
					
				>
					<Login/>
				</Popup> */}
			</Toolbar>
		</AppBar>
	);
}

export default NavigationBar;
