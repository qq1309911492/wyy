import http from './axios'


export function recMusic(params){
    return http.get('/personalized',{
        params
    })
}

export function oneMusic(){
    return http.get('/personalized/newsong')
}
export function banner(){
    return http.get('/banner')
}
export function hotlist(){
    return http.get('/top/list?id=3778678')
}
export function hot(){
    return http.get('/search/hot')
}

//搜索
export function sousuo(params){
    return http.get('/search',{
        params
    })
}

//歌单详情
export function xiangqing(params){
    return http.get('/playlist/detail',{
        params
    })
}

//播放
export function playy(params){
    return http.get('/song/url',{
        params
    })
}


