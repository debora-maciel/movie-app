import { selectLoading } from '@/store/features/movies/movieSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';

const Loading = () => {
    const loading = useSelector(selectLoading);

    return <Backdrop
        sx={{ color: '#fff', zIndex: 99 }}
        open={loading}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
}

export default Loading;
