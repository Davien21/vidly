import React from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
  const { items, selectedItem, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() =>  props.onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item[textProperty] === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
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
