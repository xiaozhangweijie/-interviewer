import fly from '@/utils/request';

//添加面试
export function postAdd(params){
  console.log(data)
  return request.post('/sign',{params})
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
