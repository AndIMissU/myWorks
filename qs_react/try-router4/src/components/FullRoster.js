import React from 'react';
import PlayerAPI from '../api';
import { Link } from 'react-router-dom';
const FullRoster = () => {
  return (
    <div>
      <ul>
        {
          PlayerAPI.all().map( p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
};
export default FullRoster;