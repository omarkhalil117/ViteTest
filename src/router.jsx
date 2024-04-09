import {createBrowserRouter} from 'react-router-dom'
import UploadImg from './UploadImg';

const router = createBrowserRouter([
    {
        path:'/upload',
        element: <UploadImg/>,
    }
])

export default router; 
