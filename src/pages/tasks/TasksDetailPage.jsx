import React from 'react';
import { useParams} from 'react-router-dom';
 
export const TasksDetailPage = ({tasks}) => {

    const {id} = useParams();

    return (
        <div>
            <h1>Tasks Detail - {id}</h1>
            <h2>{tasks[id-1].name}</h2>
            <h3>{tasks[id-1].description}</h3>
        </div>
    );
}

