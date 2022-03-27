import {isDeBug,host} from '../config/index'
/**
 * @Description requset工具类
 * @Author Cheng
 * @Date 2022-03-27 15:20:23
 * Api文档:https://www.showdoc.com.cn/128719739414963 <br/>
 * url:request('/home/catitems',{},(res)=>{})
 */
let step=0;
export const request = (url,pram) => {
	step++;
	uni.showLoading({title:'加载中', mask:true})
	return new Promise((resolve,reject) => {
		uni.request({
			...pram,
			url:`${host}${url}`,
			header:{
				'content-type':'application/json'
			},
			success:res => {
				resolve(res.data)
				if (isDeBug) {
					console.log(res)
				}
			},
			fail:err => {
				reject(err)
				isDeBug && console.log(err)
			},
			complete:() => {
				step--;
				if (step === 0) {
					uni.hideLoading()
				}
			}
		})
	})

 
}
