import { selectLoading } from '@/store/features/movies/movieSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';

const Loading = () => {
    const loading = useSelector(selectLoading);

    return ''
}

export default Loading;
