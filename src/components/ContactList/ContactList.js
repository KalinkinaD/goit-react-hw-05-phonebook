import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListElem from "./ContactListElem/ContactListElem";
import styles from "./ContactList.module.css";

const itemMove = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup component="ul">
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={itemMove}>
            <ContactListElem
              name={name}
              number={number}
              onDelete={() => onDelete(id)}
            />
          </CSSTransition>
        ))
      ) : (
        <p>no contact with such name in your phone </p>
      )}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
