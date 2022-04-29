import PropTypes from 'prop-types';
LoadingScreen.propTypes = {
  isShow: PropTypes.bool,
}
export default function LoadingScreen({ isShow }) {
  if (isShow)
    return (
      <span>
        init...
      </span>
    )
}