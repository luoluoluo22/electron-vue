// import domtoimage from 'dom-to-image';
var domtoimage = require('dom-to-image');

// const html2canvas = require('html2canvas')// 将html保存为图片
const fs = require('fs')

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
  // document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.remove-watermark').remove()
  document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.design-editor > div > div.editor-shell-wrap > div > div.editor-canvas > div > div.editor-watermark').remove()
  console.log('水印提示移除')
  var node = document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.design-editor')
  // alert(domtoimage.toPng)
  domtoimage.toPng(node)
    .then(function (dataUrl) {
      // alert(dataUrl)
      var img = new Image();
      img.src = dataUrl;
      // document.querySelector('#app > div.editor.with-layout-nav > div.editor-operator > div > div.ui-tabs.layout-panel.is-animate > div > div').appendChild(img);
      // alert(img.src)

      var data = dataUrl.replace(/^data:image\/\w+;base64,/, '')
      fs.writeFile('test.png', data,
        'base64', function (err) {
          if (err) {
            alert('写入图片文件失败');
          } else {
            alert('写入图片文件成功');
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
  }, 10000);
}

// 放大按钮
var add = document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.editor-bottom > div.eui-editor-tool-bar > div > button:nth-child(3)')
// 缩小按钮
var reduce = document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.editor-bottom > div.eui-editor-tool-bar > div > button:nth-child(1)')
// 视图的比例
reduce.click()

var view_scale = parseInt(document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.editor-bottom > div.eui-editor-tool-bar > div > button.eui-button.eui-editor-tool-bar-btn.eui-editor-tool-bar__zoom-button.eui-button--with-tooltip.eui-button--normal--clear.eui-button__icon--only.eui-button--middle > div.eui-button__container').textContent.trim())
let i = 0
while (i < 100) {
  if (view_scale > 50) {
    reduce.click()

    view_scale = parseInt(document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.editor-bottom > div.eui-editor-tool-bar > div > button.eui-button.eui-editor-tool-bar-btn.eui-editor-tool-bar__zoom-button.eui-button--with-tooltip.eui-button--normal--clear.eui-button__icon--only.eui-button--middle > div.eui-button__container').textContent.trim())
    i++
  } else {
    add.click()
    view_scale = parseInt(document.querySelector('#app > div > div > div.eui-base-container > div.eui-main-container > div.editor-bottom > div.eui-editor-tool-bar > div > button.eui-button.eui-editor-tool-bar-btn.eui-editor-tool-bar__zoom-button.eui-button--with-tooltip.eui-button--normal--clear.eui-button__icon--only.eui-button--middle > div.eui-button__container').textContent.trim())
    console.log(view_scale)
    i++
  }
}

screenshot()
// capture node +回车
