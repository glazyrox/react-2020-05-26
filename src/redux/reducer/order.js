import { INCREMENT, DECREMENT } from '../constants';

export default (amount = 3, action) => {
  switch (action.type) {
    case INCREMENT:
      return amount + 1;
    case DECREMENT:
      return amount - 1;
    default:
      return amount;
  }
};