const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     
     user: process.env.MAIL_USERNAME,
     pass: process.env.MAIL_PASSWORD,
    
   }
 });

 const newschedule =({participants,stime,etime,discription}) =>{

   let sendto = participants.map(x => x.email)

   let mailOptions = {
      from:'priyankgupta2120@gmail.com',
      to: sendto,
      subject: 'Interview Schedule',
      text: `
      Greetings!!


      You have new interview schedule.
      Details are as follows:-

      -Date - ${stime.getDate()} /  ${stime.getMonth()} / ${stime.getFullYear()}
      -From - ${stime.getHours()} :  ${stime.getMinutes()}
      -To -${etime.getHours()} : ${etime.getMinutes()}
      -discription - ${discription}
             
      Thanku and Regards`
    };

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully",data.response);
      }
    });

 }

 const updateInterviewmail =({participants,stime,etime,discription}) =>{

   let sendto = participants.map(x => x.email)

   let mailOptions = {
      from:'priyankgupta2120@gmail.com',
      to: sendto,
      subject: 'Interview Schedule',
      text: `
    Greetings!!

    Your interview schedule has been updated
    New schedule is as follows:-
  
    -Date - ${stime.getDate()} /  ${stime.getMonth()} / ${stime.getFullYear()}
    -From - ${stime.getHours()} : ${stime.getMinutes()}
    -To -${etime.getHours()} : ${etime.getMinutes()}
    -discription - ${discription}
                    
    Thanku and Regards`
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
      from:'priyankgupta2120@gmail.com',
      to: sendto,
      subject: 'Interview Cancelled',
      text: `
      Greetings!!

      Your scheduled interview stands cancel.
      Details:-
            
      Date - ${stime.getDate()} /  ${stime.getMonth()} / ${stime.getFullYear()}
      From - ${stime.getHours()} :  ${stime.getMinutes()}
      To -${etime.getHours()} :  ${etime.getMinutes()}
      discription - ${discription}

      We will let you know about further proceeding soon
                   
      Regards`
    };

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully",data.response);
      }
    });

 }

 module.exports ={newschedule,updateInterviewmail,interviewCancelled}



