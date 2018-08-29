import {
  HTTP
}
from "../utils/http-p.js"

class BookDetailModel extends HTTP{
  getBookDetail(id){
    return this.request({
      url: 'book/' + id + '/detail'
    })
  }

  getLikeStatus(id){
    return this.request({
      url: 'book/' + id + '/favor'
    })
  }

  getComments(id){
    return this.request({
      url: 'book/' + id + '/short_comment'
    })
  }
}

export {BookDetailModel}