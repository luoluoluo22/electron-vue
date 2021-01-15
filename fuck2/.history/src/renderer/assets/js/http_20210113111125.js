const axios = require('axios')
let res

let url = `https://search-v2.hlgdata.com/gd_web/editor/sim_search?page_num=1&page_size=10&q=&sort=&channel_category_id=416&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding&similar_mid=33970063`

function http(url, callback) {
// eslint-disable-next-line camelcase
  function get_res(url) {
    return new Promise(resolve => {
      axios.get(url).then((res) => {
        let data = res.data;
        resolve(data)
      }).catch(function (error) {
        console.log('失败==' + error);
        alert('联网失败，请检查网络');
      });
    })
  }

  async function get(url, callback) {
    res = await get_res(url);// 获取test()函数的返回值
    console.log(res)
    callback()
  }
  get(url)
}
function a() { console.log('b') }

// http(url, a)
// 定义主函数，回调函数作为参数
function a(res, callback) {
  console.log('我是主函数'); callback();
}

// 定义回调函数
function b() {
  console.log('我是回调函数');// 模仿耗时操作
}

// 调用主函数，将函数B传进去
a(b);
