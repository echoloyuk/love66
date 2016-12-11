import DEFAULT_STATE from '../default-state.js';

const resetCodeStat = (arr) => {
  arr.map((item, index) => {
    item.code.start = false;
  });
}
const resetImgStat = (arr) => {
  arr.map((item, index) => {
    item.imgs.start = false;
  });
}

export default (state = DEFAULT_STATE, action) => {
  let {page, timeSeed} = state;
  let pageContext = state.pageContext.slice();
  const length = pageContext.length;

  switch (action.type) {
    case 'OPENBOOK':
      state.bookOpen = true;
      break;
    case 'NEXTPAGE':
      if (state.bookOpen && page < length - 1) {
        state.page++;
      }
      break;
    case 'CODESTART':
      resetCodeStat(pageContext);
      pageContext[page].code.start = true;
      state.pageContext = pageContext;
      break;
    case 'IMGSTART':
      resetImgStat(pageContext);
      pageContext[page].imgs.start = true;
      state.pageContext = pageContext;
      break;
    case 'SETTIMMER':
      if (state.bookOpen && page < length - 1) {
        state.timmerOn = true;
        state.timeSeed = ++timeSeed;
        state.wait = pageContext[page].wait;
      } else {
        state.timmerOn = false;
      }
      break;
    default:
      break;
  }
  return Object.assign({}, state);
}