import React from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
  const { items, selectedItem, textProperty, valueProperty } = props;
  return (  
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item[textProperty] !== selectedItem
              ? "list-group-item"
              : "list-group-item active"
          }
          onClick={() => props.onItemSelect(item[textProperty])}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default ListGroup;
