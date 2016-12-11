
const action = {
  openBook: () => ({type: 'OPENBOOK'}),
  nextPage: () => ({type: 'NEXTPAGE'}),
  codeStart: () => ({type: 'CODESTART'}),
  imgStart: () => ({type: 'IMGSTART'}),
  setTimmer: () => ({type: 'SETTIMMER'})
}

export default (dispatch, o) => {
  return {
    doOpenBook: (...args) => {
      dispatch(action.openBook(...args));
      setTimeout(() => {
        dispatch(action.codeStart(...args));
        dispatch(action.imgStart(...args));
        dispatch(action.setTimmer(...args));
      }, 1200);
    },
    doNextPage: (...args) => {
      dispatch(action.nextPage(...args));
      setTimeout(() => {
        dispatch(action.codeStart(...args));
        dispatch(action.imgStart(...args));
        dispatch(action.setTimmer(...args));
      }, 1200);
    }
  }
};