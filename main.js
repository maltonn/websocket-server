var socket = io();
btn.addEventListener('click',()=>{
    socket.emit('msg', document.getElementById('in').value);
})
socket.on('response', function(res){
    p=document.createElement('p')
    p.innerText=res.msg
    document.getElementById('res_msgs').appendChild(p)
});