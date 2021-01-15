const html2canvas = require('html2canvas')// 将html保存为图片
const fs = require('fs')
let vater
let view

function download() {
  html2canvas(view, {
    useCORS: true,
    foreignObjectRendering: true
  }).then(canvas => {
    document.querySelector('#app > div.editor.with-layout-nav > div.editor-operator > div > div.ui-tabs.layout-panel.is-animate > div > div').appendChild(canvas);

    var data = canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '')
    fs.writeFile('test.png', data,
      'base64', function (err) {
        if (err) {
          alert('写入图片文件失败');
        } else {
          // alert('写入图片文件成功');
        }
      });
  })
}

setTimeout(() => {
  // alert('开始下载')
  view = document.querySelector('#app')
  download()
}, 10000);

