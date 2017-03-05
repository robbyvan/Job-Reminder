import { Link } from 'react-router'

require('./../stylesheets/whoops404.scss');

export const Whoops404 = () => (
  <div className="whoops404">
    <h1>Whoops, nothing is here.</h1>
    <Link to="/" >
      Back to homepage
    </Link>
  </div>
);