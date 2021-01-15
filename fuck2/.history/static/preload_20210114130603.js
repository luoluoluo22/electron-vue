const html2canvas = require('html2canvas')// 将html保存为图片
const fs = require('fs')

let view = document.querySelector('#app > div.editor.with-layout-nav > section > div.editor-container.editor-container-flow.editor-loaded.editor-rendered.editor-global-layout.editor-global-layout-loaded > div.editor-shell-wrap > div > div.editor-canvas.editor-flow')

function download() {
  alert(view)
  html2canvas(view).then(canvas => {
    alert(canvas)
    document.querySelector('#app > div.editor.with-layout-nav > div.editor-operator > div > div.ui-tabs.layout-panel.is-animate > div > div').appendChild(canvas);

    var data = canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '')
    alert('data')
    fs.writeFile('test.png', data,
      'base64', function (err) {
        if (err) {
          alert('写入图片文件失败');
        } else {
          alert('写入图片文件成功');
        }
      });
  })
}

setTimeout(() => {
  // alert('开始下载')
  download()
}, 10000);
