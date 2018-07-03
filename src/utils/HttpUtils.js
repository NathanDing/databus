export default class HttpUtils {
   //基于 fetch 封装的 GET请求
   static getFetch(url){
       return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
       })
   }
    //基于 fetch 封装的 POST请求
    static postFatch(url, params) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status: response.status})
                    }
                })
                .then((response) => {
                    //成功返回
                    resolve(response)
                })
                .catch((error) => {
                    //失败返回
                    reject(error)
                })
        })
    }
}
