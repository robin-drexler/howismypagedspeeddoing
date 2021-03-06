import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames';


export default function SearchBox(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch();
  };

  const buttonText = props.loading ? 'loading...' : 'analyze';
  const cssClasses = classNames({
    'form': true,
    'focussed': props.isFormFocussed
  });

  return (
    <form className={cssClasses} onSubmit={handleSubmit} noValidate>

      <div className="card">
        <Card>
          <CardText>
            <h2>
              Compare your website's mobile performance with the top 50 most popular in the world.
            </h2>
            <div className="input-content">
              <TextField
                onFocus={props.onSearchInputFocus}
                className="url-input"
                id="search"
                errorText={props.error}
                floatingLabelText="Enter your website URL"
                disabled={props.loading}
                value={props.searchValue}
                onChange={props.onSearchInputChange}
                type="url"
              />
              <div>
                <RaisedButton primary disabled={props.loading} label={buttonText}
                              onClick={handleSubmit}/>
              </div>
            </div>
          </CardText>
        </Card>
      </div>
    </form>
  );
}

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onSearch: PropTypes.func,
  onSearchInputChange: PropTypes.func,
  onSearchInputFocus: PropTypes.func,
  isFormFocussed: PropTypes.bool.isRequired,
};

