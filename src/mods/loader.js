
function Load(data, onLoad, onSucc) {
  const pageContext = data.pageContext;
  let imgList = [];
  const reg = /[.jpg]$/g;

  let count, ok = 0;

  pageContext.map((item, index) => {
    let urls = [];
    if (item.imgs && item.imgs.urls && item.imgs.urls.length) {
      urls = item.imgs.urls;
      urls.map((url) => {
        if (reg.test(url.toLowerCase())) {
          imgList.push(url);
        }
      });
    }
  });

  if (!imgList || !imgList.length) {
    return;
  }

  const _onLoad = () => {
    ok++;
    const per = Math.floor(ok / count * 100);
    console.log(`curr:${ok}, total:${count}, per:${per}`);

    onLoad && onLoad(per);

    if (ok == count) {
      onSucc && onSucc();
    }
  }

  count = imgList.length

  // // 处理背景音乐
  // count++;
  // const bg = data.bgMusic;
  // let au = new Audio(bg);
  // au.addEventListener('loadstart', () => {console.log(222)});
  // au.addEventListener('loadeddata', _onLoad);

  // 处理图片
  imgList.map((url) => {
    let img = new Image();
    img.onload = _onLoad;
    img.src = url;
  });
}

export default Load;
