import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListElem.module.css";

const ContactListElem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <p className={styles.contactDescr}>
        {name}: {number}
      </p>
      <button type="button" onClick={onDelete} className={styles.contactBtn}>
        delete
      </button>
    </li>
  );
};

ContactListElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListElem;
