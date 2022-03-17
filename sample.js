const loading = document.getElementById('loading');

imagesLoaded( '.l-main', { background: ".demo-kv" }, function() {
  const msM = 1000;
  loading.style.transition = 'opacity ' + msM + 'ms';
  
  const loadingOpacity = function(){ //透過させる関数を定義
     loading.style.opacity = 0;
  }
  const loadingDisplay = function(){ //非表示にする関数を定義
    loading.style.display = "none";
  }
 
  setTimeout(loadingOpacity, 1000); //画像読み込み後、１秒後に透過を開始
  setTimeout(loadingDisplay, 1000 + msM); //画像読み込み後、２秒後に非表示
});
