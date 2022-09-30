import '../Assets/Styles/Home.css';
import { Box } from '@mui/material';
import Map from '../Components/Map';

function Home() {
	return (
		<div className='body'>
			<Box sx={{ flexGrow: 1 }}>
				<div className='mid-body'>
					<Map />
				</div>
			</Box>
		</div>
	);
}

export default Home;
