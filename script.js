let username = localStorage.getItem("talkvera_user")

if(username){
startApp()
}

function startChat(){

username = document.getElementById("username").value

if(username=="") return alert("Enter username")

localStorage.setItem("talkvera_user",username)

startApp()

}

function startApp(){

document.getElementById("login").style.display="none"
document.getElementById("chatApp").style.display="flex"

loadMessages()

}

let messages = JSON.parse(localStorage.getItem("talkvera_msgs")) || []

function save(){
localStorage.setItem("talkvera_msgs",JSON.stringify(messages))
render()
}

function render(){

let chat = document.getElementById("chat")
chat.innerHTML=""

messages.forEach(m=>{

let div=document.createElement("div")
div.className="message "+m.type

if(m.image){
div.innerHTML=`<b>${m.user}</b><br><img src="${m.image}">`
}
else if(m.voice){
div.innerHTML=`<b>${m.user}</b><br><audio controls src="${m.voice}"></audio>`
}
else{
div.innerHTML=`<b>${m.user}</b><br>${m.text}`
}

chat.appendChild(div)

})

chat.scrollTop=chat.scrollHeight

}

function loadMessages(){
render()
}

function sendMsg(){

let text=document.getElementById("msg").value
let imgInput=document.getElementById("imgInput")

if(text=="") return

messages.push({
user:username,
text:text,
type:"user"
})

botReply(text)

document.getElementById("msg").value=""

if(imgInput.files[0]){

let reader=new FileReader()

reader.onload=function(e){

messages.push({
user:username,
image:e.target.result,
type:"user"
})

save()

}

reader.readAsDataURL(imgInput.files[0])

imgInput.value=""

}

save()

}

function botReply(text){

setTimeout(()=>{

messages.push({
user:"Bot",
text:"You said: "+text,
type:"bot"
})

save()

},500)

}

function clearChat(){

messages=[]

save()

}

let recorder
let audioChunks=[]

function recordVoice(){

navigator.mediaDevices.getUserMedia({audio:true})

.then(stream=>{

recorder=new MediaRecorder(stream)

recorder.start()

recorder.ondataavailable=e=>{
audioChunks.push(e.data)
}

recorder.onstop=e=>{

let blob=new Blob(audioChunks)

let url=URL.createObjectURL(blob)

messages.push({
user:username,
voice:url,
type:"user"
})

audioChunks=[]

save()

}

setTimeout(()=>{
recorder.stop()
},3000)

})

}
