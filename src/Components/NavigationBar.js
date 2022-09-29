import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search'

function NavigationBar() {
	return (
		<AppBar
			position='static'
			sx={{ bgcolor: 'orange' }}
		>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1 }}
				>
					Nib-Nav
				</Typography>
                <Search/>
				<Button color='inherit'>Login</Button>
			</Toolbar>
		</AppBar>
	);
}

export default NavigationBar;
