import PropTypes from "prop-types";

function GridRow({ record, toggleActive, onClick }) {
  return (
    <tr key={record.id} onClick={(e) => onClick?.(record.id)}>
      <td>{record.firstName}</td>
      <td>{record.lastName}</td>
      <td>
        <input
          type="checkbox"
          checked={record.active}
          onChange={(e) => toggleActive(e.target.checked)}
          onClick={(e) => e.stopPropagation()}
        />
      </td>
    </tr>
  );
}

GridRow.propTypes = {
  record: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export { GridRow };
