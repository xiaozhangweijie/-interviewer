import fly from '@/utils/request';

//添加面试
export function postAdd(params){
  return fly.post('/sign',params)
}
// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}
//获取面试列表
export let sign=(params)=>{
  return fly.get("/sign",params);
}
//获取面试详情
export let signDetail=(id)=>{
  return fly.get("/sign/"+id);
}
//更新面试状态
export let updateSignDetail = (id)=>{
  return fly.put('/sign/'+id.id,id.params);
}
//解密
export let decrypt=(params)=>{
  return fly.post("/user/decrypt",params);
}
//指纹
export let finger=(params)=>{
  console.log(params);
  return fly.post("/user/fingerPrint",params);
}
