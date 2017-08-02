import axios from 'axios'

export default (url,params,callBack) => {
	axios.post(url, params)
	.then( response => callBack(response.data))
	.catch(response => callBack(response));
	
    // this.$http.get(url,param).then(res => {
    // 	callBack(res)
    //     // for(var i=0;i<res.body.alreadyuse.length;i++){
    //     //   res.body.alreadyuse[i].ish = false;
    //     // }  
    //     // this.datalist = res.body.alreadyuse 
    // },err => {
        
    // })
	// var req = new Request(url, {method: 'GET', cache: 'reload'}, body: JSON.stringify(params)); 
	// fetch(req).then(function(response) {  
	//     return response.json();  
	// }).then(function(json) {  
	//     callBack(json)
	// });

	// fetch(url, { 
	// 	method: 'POST', 
	// 	headers: { 
	// 		'Accept': 'application/json', 
	// 		'Content-Type': 'application/json', 
	// 	}, body: JSON.stringify(params) 
	// }).then(
	// 	response => response.json()
	// ).then(
	// 	res => callBack(res)
	// )


}
