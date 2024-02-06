import PropTypes from "prop-types";

function Movie({ coverImg, title, summary }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;