import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {};

export default Repos;
