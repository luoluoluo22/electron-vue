const html2canvas = require('html2canvas')// 将html保存为图片
const fs = require('fs')

let canvas = document.querySelector('#app > div.editor.with-layout-nav > section > div.editor-container.editor-container-flow.editor-loaded.editor-rendered.editor-global-layout.editor-global-layout-loaded > div.editor-shell-wrap > div > div.editor-canvas.editor-flow')

function download(canvas) {
  console.log('开始合成')
  html2canvas(canvas).then(canvas => {
    console.log('开始创建节点')
    document.getElementById('container').appendChild(canvas);
    var data = canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '')
    fs.writeFile('test.png', data,
      'base64', function (err) {
        if (err) {
          console.log('写入图片文件失败');
        } else {
          console.log('写入图片文件成功');
        }
      });
  })
}

setTimeout(() => {
  console.log('开始下载')
  download(canvas)
  console.log('下载完成')
}, 5000);
