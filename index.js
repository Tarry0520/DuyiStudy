async function method(){
    try{
        const n=await Promise.reject(123) //这句代码将抛出异常
        console.log('成功',n)
    }
    catch(err){
        console.log('失败',err)
    }
}
method() //输出：失败 123