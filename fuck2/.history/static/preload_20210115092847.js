// import domtoimage from 'dom-to-image';
var domtoimage = require('dom-to-image');

// const html2canvas = require('html2canvas')// 将html保存为图片
// const fs = require('fs')

// let view

// function download() {
//   view = document.querySelector('#app')
//   html2canvas(view, {
//     useCORS: true,
//     foreignObjectRendering: true
//   }).then(canvas => {
//     document.querySelector('#app > div.editor.with-layout-nav > div.editor-operator > div > div.ui-tabs.layout-panel.is-animate > div > div').appendChild(canvas);

//   })
// }

function dom_to_image() {
  var node = document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.design-editor')
  // alert(domtoimage.toPng)
  domtoimage.toPng(node)
    .then(function (dataUrl) {
      alert(dataUrl)
      var img = new Image();
      img.src = dataUrl;
      // document.querySelector('#app > div.editor.with-layout-nav > div.editor-operator > div > div.ui-tabs.layout-panel.is-animate > div > div').appendChild(img);
      // alert(img.src)

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
    .catch(function (error) {
      alert('oops, something went wrong!', error);
    });
}

window.onload = function () {
  setTimeout(() => {
    dom_to_image()
  // download()
  }, 8000);
}
