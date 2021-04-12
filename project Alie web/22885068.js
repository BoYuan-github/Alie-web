// page1 and page2 css, html and js visulazation

function css(){
    document.getElementById("css").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("js").style.display = "none";
}




function html(){
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
}




function js(){
    document.getElementById("js").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
} 

// Page1,2,3 navigate bar move
window.onload = function() {
    var myNavBar = document.getElementById('myNavBar')
    window.addEventListener('scroll', function() {
    var targetTop = window.pageYOffset
    if (targetTop > 240){
        myNavBar.classList.add('fixed-top')
    }else{
        myNavBar.classList.remove('fixed-top')
    }
    })
  }

// page 2 javascript grab data example 
var request = new XMLHttpRequest()
request.open('GET','https://coronavirus-tracker-api.herokuapp.com/v2/locations')
request.onload=function(){
    var data_str=this.response
    var data = JSON.parse(data_str)
    var coronavirus_latest = data.latest
    var coronavirus_locations = data.locations

   

    var table_convid_world = document.getElementById('world')
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
        td1.innerHTML = coronavirus_latest['confirmed']
        tr.append(td1)
    var td2 = document.createElement('td')
        td2.innerHTML = coronavirus_latest['deaths']
        tr.append(td2)
    var td3 = document.createElement('td')
        td3.innerHTML = coronavirus_latest['recovered']
        tr.append(td3)
        
    table_convid_world.append(tr)
    
    var table_convid = document.getElementById('convid')

    for (var i=0;i<coronavirus_locations.length;i++){
        var tr = document.createElement('tr')

        var td1 = document.createElement('td')
        td1.innerHTML = coronavirus_locations[i]['country']
        tr.append(td1)

        var td2 = document.createElement('td')
        td2.innerHTML = coronavirus_locations[i]['country_population']
        tr.append(td2)

        var td3 = document.createElement('td')
        td3.innerHTML = coronavirus_locations[i]['province']
        tr.append(td3)

        var td4 = document.createElement('td')
        td4.innerHTML = coronavirus_locations[i]['last_updated']
        tr.append(td4)

        var td5 = document.createElement('td')
        td5.innerHTML = coronavirus_locations[i].latest['confirmed']
        tr.append(td5)

        var td6 = document.createElement('td')
        td6.innerHTML = coronavirus_locations[i].latest['deaths']
        tr.append(td6)

        var td7 = document.createElement('td')
        td7.innerHTML = coronavirus_locations[i].latest['recovered']
        tr.append(td7)

        table_convid.append(tr)
    }

}
request.send()

// page3 emoji js
document.querySelectorAll('.dock li').forEach(li => {
    li.addEventListener('click', e => {
      e.currentTarget.classList.add('loading')
    })
    
    li.addEventListener('mousemove', e => {
      let item = e.target
      let itemRect = item.getBoundingClientRect()
      let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
      
      let prev = item.previousElementSibling || null
      let next = item.nextElementSibling || null
      
      let scale = 0.6
      
      resetScale()
      
      if (prev) {
        prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
      }
      
      item.style.setProperty('--scale', 1 + scale)
      
      if (next) {
        next.style.setProperty('--scale', 1 + scale * offset)
      }
    })
  })
  

  document.querySelector('.dock').addEventListener('mouseleave', e => {
    resetScale()
  })
  
  function resetScale() {
    document.querySelectorAll('.dock li').forEach(li => {
      li.style.setProperty('--scale', 1)
    })
  }
// page3  contents after clicking emoji
  function mybtn1(){
    document.getElementById("my1").style.display = "block";
    document.getElementById("my2").style.display = "none";
    document.getElementById("my3").style.display = "none";
    document.getElementById("my4").style.display = "none";
  }

  function mybtn2(){
    document.getElementById("my1").style.display = "none";
    document.getElementById("my2").style.display = "block";
    document.getElementById("my3").style.display = "none";
    document.getElementById("my4").style.display = "none";
  }

  function mybtn3(){
    document.getElementById("my1").style.display = "none";
    document.getElementById("my2").style.display = "none";
    document.getElementById("my3").style.display = "block";
    document.getElementById("my4").style.display = "none";

  }

  function mybtn4(){
    document.getElementById("my1").style.display = "none";
    document.getElementById("my2").style.display = "none";
    document.getElementById("my3").style.display = "none";
    document.getElementById("my4").style.display = "block";

  }
