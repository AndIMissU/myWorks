import mongoose from 'mongoose' 
import path from 'path'
import os from 'os'
import fs from 'fs'

const Article = mongoose.model('Article')

export const postArticle = async(ctx, next) => {
  // ctx.body = {
  //   success: false,
  //   err: 'Field incomplete'
  // }
  // 1 body
  let body = ctx.request.body 
  let { title, content, publish } = body
  if (!title ||  ! content) {
    // api/article  post
    return (ctx.body = {
      success: false,
      err: 'Field incomplete'
    })
  }
  // 2 await
  // 异步保存
  try {
    body = await new Article(body)
    await body.save()
    ctx.body = {
      success: true,
      data: body
    }
  } catch(e) {
    ctx.body = {
      success: false,
      err: e
    }
  }
}