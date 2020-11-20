const express = require('express')

const fs=require('fs')
const app = express()

app.all('*',function (req,res,next) {
  res.header('Access-Control-Allow-Origin','*')

  res.header('Access-Control-Allow-Headers','content-type')

  res.header('Access-Control-Allow-Methods','DELETE,PUT,GET,POST,OPTIONS')

  if(req.method.toLowerCase()=='options')
    res.send(200)
  else
    next()
})

app.get('/home/multidata',function (req,res) {
  fs.readFile('./data/multidata.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})

app.get('/home/meilishuo',function (req,res) {
  fs.readFile('./data/meilishuo.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})

app.get('/home/pops',function (req,res) {
  fs.readFile('./data/homedata/pop1.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})

app.get('/home/news',function (req,res) {
  fs.readFile('./data/homedata/new1.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})

app.get('/home/sells',function (req,res) {
  fs.readFile('./data/homedata/sell1.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})
app.get('/category/category',function (req,res) {
  fs.readFile('./data/category.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})
app.get('/category/pops',function (req,res) {
  fs.readFile('./data/categorydata/subcategoryZhengZaiLiuXing.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})
app.get('/category/kuzis',function (req,res) {
  fs.readFile('./data/categorydata/subcategoryKuZi.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})
app.get('/category/neiyis',function (req,res) {
  fs.readFile('./data/categorydata/subcategoryNeiYi.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})
app.get('/category/qunzis',function (req,res) {
  fs.readFile('./data/categorydata/subcategoryQunZi.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})
app.get('/category/shangyis',function (req,res) {
  fs.readFile('./data/categorydata/subcategoryShangYi.json',function (err,data) {
    if (err){
      return res.send('cuowu')
    }
    res.send(JSON.parse(data))
  })

})

app.listen(8000,function () {
  console.log("Running……")
})

