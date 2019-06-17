import { createSelector } from "reselect";
import { contactSelectorFactory } from "state/contacts/selectors";

const addressSelector = (state, props) =>
  props.navigation.getParam("recipient", "");

export default createSelector(
  addressSelector,
  contactSelectorFactory,
  (address, contactSelector) => {
    const contact = contactSelector(address) || {};
    const { name = "", image = "" } = contact;
    return {
      initialValues: {
        address,
        name,
        image,
        user: {
          imageURL: image,
          displayName: name
        }
      }
    };
  }
);
