import React from "react";

const SearchBox = ({ onChange, ...rest }) => {
  return (
    <div className="form-group">
      <input
        {...rest}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBox;
