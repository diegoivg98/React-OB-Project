import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import {useNavigate} from 'react-router-dom';

const Dashboardpage = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }

    return (
        <div>
              <Button variant="contained" onClick={ logout }>Hello World</Button>
              <Copyright></Copyright>
        </div>
    );
}

export default Dashboardpage;
