const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.API_KEY)

const sendMail = (to,from,subject,text)=>{
    const msg ={
        to,
        from, 
        subject,
        html:text
    }

    sgMail.send(msg,(err,result)=>{
        
    })
}

module.exports = sendMail