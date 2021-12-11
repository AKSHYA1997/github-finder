import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div>
      <div className="card">
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </div>
    </div>
  );
};

RepoItem.prototypes = {
  repos: PropTypes.object.isRequired,
};

export default RepoItem;
