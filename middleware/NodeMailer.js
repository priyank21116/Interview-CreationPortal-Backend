const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     type: 'OAuth2',
     user: process.env.MAIL_USERNAME,
     pass: process.env.MAIL_PASSWORD,
    
   }
 });

 const newschedule =({participants,stime,etime,discription}) =>{

   let sendto = participants.map(x => x.email)

   let mailOptions = {
      from:'sampleemail@gmail.com',
      to: sendto,
      subject: 'Interview Schedule',
      text: `Greetings!!
             You have new interview schedule
             Details:-
             Date - ${stime.getDate()} -  ${stime.getMonth()} - ${stime.getFullYear()}
             From - ${stime.getHours()} -  ${stime.getMonth()}
             To -${etime.getHours()} -  ${etime.getMonth()}
             discription - ${discription}`
    };

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully",data.response);
      }
    });

 }

 const updateInterview =({participants,stime,etime,discription}) =>{

   let sendto = participants.map(x => x.email)

   let mailOptions = {
      from:'sampleemail@gmail.com',
      to: sendto,
      subject: 'Interview Schedule',
      text: `Greetings!!
             Your interview schedule has been updated
             Details:-
             Date - ${stime.getDate()} -  ${stime.getMonth()} - ${stime.getFullYear()}
             From - ${stime.getHours()} -  ${stime.getMonth()}
             To -${etime.getHours()} -  ${etime.getMonth()}
             discription - ${discription}
             `
    };

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully",data.response);
      }
    });

 }


 const interviewCancelled =({participants,stime,etime,discription}) =>{

   let sendto = participants.map(x => x.email)

   let mailOptions = {
      from:'sampleemail@gmail.com',
      to: sendto,
      subject: 'Interview Cancelled',
      text: `Greetings!!
             Your scheduled interview stands cancel.
             Details:-
             Date - ${stime.getDate()} -  ${stime.getMonth()} - ${stime.getFullYear()}
             From - ${stime.getHours()} -  ${stime.getMonth()}
             To -${etime.getHours()} -  ${etime.getMonth()}
             discription - ${discription}
             We will let you know about further proceeding soon`
    };

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully",data.response);
      }
    });

 }

 module.exports ={newschedule,updateInterview,interviewCancelled}



