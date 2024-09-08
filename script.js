document.getElementById('memberForm').addEventListener('submit',function (event) {
    event.preventDefault()
    const name=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const email=document.getElementById('email').value;
    const address=document.getElementById('address').value;
    const memberIndex=document.getElementById('memberIndex').value;
    let members=JSON.parse(localStorage.getItem('members')) || [];
})
