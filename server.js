const sgMail = require('@sendgrid/mail')
const path = require('path')
require('dotenv').config()
sgMail.setApiKey('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')
const express = require('express')
const app = express()
const sendMail = require('./utils/sendEmail')
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('Index.html')
})

app.post('/',(req,res)=>{
    const {email} = req.body    
    const to = email
    const from = "gokulmodi369@gmail.com"
    const subject = "Updated CV"
    const text = `        
    <div >
        <h3>Hey ${email}</h3>
        <h4>Sorry for the inconvenience, some server side error occurs .The Requested CV will delivered to you within an hour</h4>
        <p>Thank You & Regards</p>
        <p>Gokul Modi</p>
        <p>+91-9131224242</p>
    </div>
`
    sendMail(to, from, subject, text)
    res.redirect('/')
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log('server is running')
})
