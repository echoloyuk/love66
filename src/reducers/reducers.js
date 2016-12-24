import DEFAULT_STATE from '../default-state.js';

const resetCodeStat = (arr) => {
  arr.map((item, index) => {
    item.code && (item.code.start = false);
  });
}
const resetImgStat = (arr) => {
  arr.map((item, index) => {
    item.imgs && (item.imgs.start = false);
  });
}

export default (state = DEFAULT_STATE, action) => {
  let {page, timeSeed} = state;
  let pageContext = state.pageContext.slice();
  const length = pageContext.length;

  switch (action.type) {
    case 'ROTATESTAGE':
      state.rotateStage = true; 
      break;
    case 'OPENBOOK':
      state.bookOpen = true;
      break;
    case 'NEXTPAGE':
      if (state.bookOpen && page < length - 1) {
        state.page++;
      }
      if (state.page == length - 1) {
        console.timeEnd();
      }
      break;
    case 'CODESTART':
      if (pageContext[page].code) {
        resetCodeStat(pageContext);
        pageContext[page].code.start = true;
        state.pageContext = pageContext;
      }
      break;
    case 'IMGSTART':
      if (pageContext[page].imgs) {
        resetImgStat(pageContext);
        pageContext[page].imgs.start = true;
        state.pageContext = pageContext;
      }
      break;
    case 'IMGSTOP':
      resetImgStat(pageContext);
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
    case 'PLAYMUSIC':
      state.bgPlay = true;
      break;
    default:
      break;
  }
  return Object.assign({}, state);
}