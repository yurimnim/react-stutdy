import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        {hireable ? (
          <h4 className='text-success' style={{ display: 'inline' }}>
            I AM OPEN TO WORK🙆‍♀️
          </h4>
        ) : (
          <h4 className='text-danger' style={{ display: 'inline' }}>
            WORKING🥵
          </h4>
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div className=''>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href='{html_url}' className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <b>Username: </b> <i>{login}</i>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <b>Working@: </b> <i>{company}</i>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
