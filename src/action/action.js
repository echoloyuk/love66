
const action = {
  openBook: () => ({type: 'OPENBOOK'}),
  nextPage: () => ({type: 'NEXTPAGE'}),
  codeStart: () => ({type: 'CODESTART'}),
  imgStart: () => ({type: 'IMGSTART'}),
  imgStop: () => ({type: 'IMGSTOP'}),
  setTimmer: () => ({type: 'SETTIMMER'}),
  playMusic: () => ({type: 'PLAYMUSIC'}),
  rotateStage: () => ({type: 'ROTATESTAGE'})
}

export default (dispatch, o) => {
  return {
    playStage: (...args) => {
      console.time();
      dispatch(action.rotateStage(...args));
      dispatch(action.playMusic(...args));
      setTimeout(() => {
        dispatch(action.openBook(...args));
        setTimeout(() => {
          dispatch(action.codeStart(...args));
          dispatch(action.imgStart(...args));
          dispatch(action.setTimmer(...args));
        }, 1200);
      }, 1000);
    },
    doOpenBook: (...args) => {
      dispatch(action.openBook(...args));
      setTimeout(() => {
        dispatch(action.codeStart(...args));
        dispatch(action.imgStart(...args));
        dispatch(action.setTimmer(...args));
      }, 1200);
    },
    doNextPage: (...args) => {
      dispatch(action.imgStop(...args)); //为了提高效率
      dispatch(action.nextPage(...args));
      setTimeout(() => {
        dispatch(action.codeStart(...args));
        dispatch(action.imgStart(...args));
        dispatch(action.setTimmer(...args));
      }, 1200);
    }
  }
};