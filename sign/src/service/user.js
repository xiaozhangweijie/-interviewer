import fly from '@/utils/request';

// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}
//获取面试列表
export let sign=(params)=>{
  return fly.get("/sign",params);
}
