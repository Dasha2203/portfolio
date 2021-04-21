let sidebarbtn = document.querySelector('#sidebar-btn');
let sidebar = document.querySelector('#sidebar');
console.log(sidebarbtn)

sidebarbtn.addEventListener('click',function(event) {
    

    sidebar.classList.toggle('active');
    console.log(this)
})