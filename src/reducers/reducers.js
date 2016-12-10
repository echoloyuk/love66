import DEFAULT_STATE from '../default-state.js';

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'OPENBOOK':
      state.bookOpen = true;
      break;
    case 'NEXTPAGE':
      if (state.bookOpen) {
        state.page++;
      }
      break;
    default:
  }
  return Object.assign({}, state);
}