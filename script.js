window.onload = function() {
    // 0.1秒（100ミリ秒）ごとにshowPopupを実行
    setInterval(showPopup, 100);
};

function showPopup() {
    // オーバーレイの表示
    document.getElementById("overlay").style.display = "block";
    
    // ポップアップを取得し、コピーして追加
    let popup = document.getElementById("popup");
    let newPopup = popup.cloneNode(true);
    
    // コピーしたポップアップのスタイルを設定して表示
    newPopup.style.display = "block";
    
    // 画面上のランダムな位置に配置
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (viewportWidth - popup.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - popup.offsetHeight));
    newPopup.style.position = "absolute";
    newPopup.style.left = `${randomX}px`;
    newPopup.style.top = `${randomY}px`;
    
    // ボディに追加
    document.body.appendChild(newPopup);
}
