const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmse0i8/",
            name: "ssmse0i8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmse0i8/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序图书馆座位再利用系统"
        } 
    }
}
export default base
