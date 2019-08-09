import fly from '@/utils/request';

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
export let updateSignDetail = (id,params)=>{
  console.log("res",id.params);
  return fly.put('/sign/'+id.id,id.params);
}
