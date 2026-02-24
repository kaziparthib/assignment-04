let interViewCounter=[];
let rejectedCounter=[];
let currentStatus ='all'

interViewCounter.push()

// 

let totalCount=document.getElementById('t-num')
let jobsCount=document.getElementById('jobs-count')
let interviewCount=document.getElementById('i-num')
let rejectedCount=document.getElementById('r-num')

let allCards=document.getElementById('allcards')

let sectionContainer=document.getElementById('section')


let filterSection=document.getElementById('filtered-section')

let allButton=document.getElementById('all-btn')
let interViewButton=document.getElementById('interview-btn')
let rejectedButton=document.getElementById('rejected-btn')


// console.log(sectionContainer)
  // functions
function totalcounter(){
  totalCount.innerText=allCards.children.length
  interviewCount.innerText=interViewCounter.length
  rejectedCount.innerText=rejectedCounter.length
  jobsCount.innerText=allCards.children.length
}
totalcounter()

function toggle(id){
  allButton.classList.remove('bg-blue-600', 'text-white')
  interViewButton.classList.remove('bg-blue-600', 'text-white')
  rejectedButton.classList.remove('bg-blue-600', 'text-white')

  allButton.classList.add('bg-amber-50/100', 'text-black')
  interViewButton.classList.add('bg-amber-50/100', 'text-black')
  rejectedButton.classList.add('bg-amber-50/100', 'text-black')

const selected=document.getElementById(id)
// 
currentStatus=id
// 
  selected.classList.remove('bg-amber-50/100', 'text-black')
  selected.classList.add('bg-blue-600', 'text-white')

  

    if (id =='interview-btn') {
         allCards.classList.add('hidden');
        filterSection.classList.remove('hidden')
         interviewRender()
   }else if (id == 'all-btn') {
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }else if (id == 'rejected-btn'){
      allCards.classList.add('hidden');
        filterSection.classList.remove('hidden')
        
        rejectedRender()
    }
  
}


sectionContainer.addEventListener('click',function(event){
  
    if (event.target.classList.contains('inter-btn')){

     const parnNode=event.target.parentNode.parentNode

  const company=parnNode.querySelector('.company').innerText
  const role=parnNode.querySelector('.role').innerText
  const type=parnNode.querySelector('.type').innerText
  const status=parnNode.querySelector('.status').innerText
  const intro=parnNode.querySelector('.intro').innerText

   parnNode.querySelector('.status').innerText='Interview'
   
   const cardInfo={
  company,
  role,
  type,
  status : 'Interview',
  intro
}
const interViewCounterExist = interViewCounter.find(item => item.company == cardInfo.company)
        // parnNode.querySelector('.status').innerText='Interview'
        if (!interViewCounterExist) {
            interViewCounter.push(cardInfo)
        }
        // 
        rejectedCounter=rejectedCounter.filter(item=> item.company != cardInfo.company)
            // 
if(currentStatus == 'rejected-btn'){
          rejectedRender()
        }

        // interviewRender()
        totalcounter()


   } else if (event.target.classList.contains('reject-btn')){

     const parnNode=event.target.parentNode.parentNode

  const company=parnNode.querySelector('.company').innerText
  const role=parnNode.querySelector('.role').innerText
  const type=parnNode.querySelector('.type').innerText
  const status=parnNode.querySelector('.status').innerText
  const intro=parnNode.querySelector('.intro').innerText

   parnNode.querySelector('.status').innerText='Rejected'
   
   const cardInfo={
  company,
  role,
  type,
  status : 'Rejected',
  intro
}
const interViewCounterExist = rejectedCounter.find(item => item.company == cardInfo.company)
        // parnNode.querySelector('.status').innerText='Interview'
        if (!interViewCounterExist) {
            rejectedCounter.push(cardInfo)
        }
        // 
    interViewCounter=interViewCounter.filter(item=> item.company != cardInfo.company)
    //  
        if(currentStatus == 'interview-btn'){
          interviewRender()
        }
        totalcounter()


   }

  
   
} )

function interviewRender(){
   filterSection.innerHTML=`
    
   
   `
   
  
   
   

   for(count of interViewCounter){
  //  console.log(count)
    
    let div=document.createElement('div')
    div.className='shadow-2xl flex justify-between px-4 py-4 mt-2.5 mb-2.5'
    div.innerHTML=`
      
   <!-- card-1 left -->
                <div class="card space-y-3.5">
                     <h2 class="company">${count.company}</h2>
                     <p class="role">${count.role}</p>
                     <p class="type">${count.type}</p>
                     <p class="status bg-blue-300 w-[120px] px-3 py-3 rounded-lg">${count.status}</p>
                     <p class="intro">${count.intro}</p>
                     <div class="card-buttons flex gap-3.5">
                       <button class=" inter-btn  bg-white border-2 text-green-500 w-[150px] px-5 py-3 rounded-2xl ">Interview</button>
                        <button class=" reject-btn   bg-white border-2 text-red-500 w-[150px] px-5 py-3 rounded-2xl">Rejected</button>
                      </div>
                 </div>
                 <!-- card-1 right -->
                  <div class=" card-1 button">
                      <button class=" dlt-btn bg-blue-600 text-white w-[100px] px-5 py-3 rounded-2xl">delete</button>
                  </div>






    `
    filterSection.appendChild(div)
   }
}






function rejectedRender(){
  
  
   
    filterSection.innerHTML=` `

   for(reCount of rejectedCounter){
  //  console.log(reCount)
  
    
    
    let div=document.createElement('div')
     div.className='shadow-2xl flex justify-between px-4 py-4 mt-2.5 mb-2.5'
    div.innerHTML=`
      
   <!-- card-1 left -->
                <div class="card space-y-3.5">
                      <h2 class="company">${reCount.company}</h2>
                   <p class="role">${reCount.role}</p>
                   <p class="type">${reCount.type}</p>
                   <p class="status bg-blue-300 w-[120px] px-3 py-3 rounded-lg">${reCount.status}</p>
                   <p class="intro">${reCount.intro}</p>
                   <div class="card-buttons flex gap-3.5">
                     <button class=" inter-btn  bg-white border-2 text-green-500 w-[150px] px-5 py-3 rounded-2xl ">Interview</button>                     
                     <button class=" reject-btn   bg-white border-2 text-red-500 w-[150px] px-5 py-3 rounded-2xl">Rejected</button>
                      </div>
                     </div>
                  <!-- card-1 right -->
                   <div class=" card-1 button">
                     <button class=" dlt-btn bg-blue-600 text-white w-[100px] px-5 py-3 rounded-2xl">delete</button>
                   </div>






     `
    
     filterSection.appendChild(div)
   }
}



// breakaaaaaa



  allCards.addEventListener('click', function(event) {
     if(event.target.classList.contains('dlt-btn')){
     const cardDlt=event.target.parentNode.parentNode
      cardDlt.remove()
     
     } 
    totalcounter()  })
 

