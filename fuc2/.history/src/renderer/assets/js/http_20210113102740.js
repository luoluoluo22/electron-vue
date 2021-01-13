const axios = require('axios')

var myurl = `https://search-v2.hlgdata.com/gd_web/editor/sim_search?page_num=1&page_size=10&q=&sort=&channel_category_id=416&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding&similar_mid=33970063`

function(url) {
  return new Promise(resolve => {
    console.log(url)
    axios.get(url).then((res) => {
      data = res.data;
      console.log('结果:', data)
      for (let i = 0; i < data.length; i++) {
        urls.push(data[i].preview.url)
      }
      console.log('urls结果:', urls)
      resolve(urls)
    }).catch(function (error) {
      console.log('失败==' + error);
      alert('联网失败，请检查网络');
    });
  })
},
update_bg_urls: async function(url) {
  this.template_banner_src = await this.get_bg_url(url);// 获取test()函数的返回值
}