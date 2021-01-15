const html2canvas = require('html2canvas')// 将html保存为图片
const fs = require('fs')
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

function draw_canvas() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  let img = new Image()
  // img.setAttribute('crossorigin', 'anonymous');

  img.src = bg_img_src
  // img.crossOrigin = '*'
  img.onload = function () {
    console.log('图片已加载')
    let res_size = {}
    let width_ratio = canvas.width / img.width
    let height_ratio = canvas.height / img.height

    if (width_ratio > height_ratio) {
      res_size.width = img.width
      res_size.height = canvas.height / width_ratio
    } else {
      res_size.width = canvas.width / height_ratio
      res_size.height = img.height
    }

    // 将图片画到canvas上面上去！
    ctx.drawImage(img);// 从图片的（0，0）开始绘制，绘制到（300，300）
  }
}
