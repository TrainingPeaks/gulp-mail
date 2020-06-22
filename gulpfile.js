var mail = require('./')
var mailInfo = require('./test/mail-info.example')  // private
var gulp = require('gulp')

gulp.task('test', function(){
  // send mail
  return gulp.src([
      './test/i-love-you.html',
      './test/1.html',
      './test/2.html'
    ])
    .pipe(mail({
      to: mailInfo.to,
      from: mailInfo.from,
      smtp: mailInfo.smtp, 
      headers: mailInfo.headers
    }))
  // blocked after sending
  // because transporter remained working
})
