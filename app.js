const express = require('express');
const morgan = require('morgan') //hhtp  request 
const bodyParser = require('body-parser'); //body-parser 준비

const app = express();

app.set('view engine', 'pug');
app.set('port',3000); 

//정적파일 :img ,css,js처리
//사용할 미들웨어 모듈 : 미들웨어는 순서대로 호출됨(순서가 중요)

app.use(express.static('public'));
app.use(bodyParser.json()); //json 데이터 처리
app.use(bodyParser.urlencoded({extended:true})); //인코딩된 문자열처리
app.use(morgan("dev")); //개발 중일 때, 서비스 배포할 때 combined 사용 

//routing 처리 : 요청에 따른 응답 방법을 결정하는 것
//routing method : 
app.get('/', function (req, res) {
 /* res.send('Hello World'); */
//res.sendFile(__dirname+"/public/main.html")
res.render('index', {title : 'hanul tour', message: '지금 예약하세요'});
})


app.get('/reserve', function (req, res) {
//    res.sendFile(__dirname+"/public/reserve.html")
    res.render('reserve');
    
})  
 app.post('/send_reserve', function (req, res) {
      // res.send('post 요청 처리페이지'); 
       res.send(req.body.guest_name+ "님, 환영합니다.");
 })          



/*app.listen(3000,functin(){
    console.log("서버가 3000포트에서 실행중입니다")
})
*/
const CURRENT_PORT = app.get('port');
app.listen(CURRENT_PORT,function(){
    console.log(`서버가  ${CURRENT_PORT}번 포트에서 실행중입니다`)
})