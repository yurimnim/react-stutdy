import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//state 없으면 function화 시켜도 된다.

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
