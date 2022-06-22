// Creating A New Section Function.
function createSection(){
    //taking all sections
    let sections = document.querySelectorAll('section');
    //to create a new section i need its number so its always ahead from the sections' length with 1
    let numberOfSections =  sections.length +1;
    //making a section element , making and setting id and data-nav
     const section= document.createElement('section');
     section.setAttribute('id','section'+numberOfSections);
     section.setAttribute('data-nav','Section '+numberOfSections);
    
    //selecting <main> and storing it in variable main and appending the section into it
     const main = document.querySelector('main');
     main.appendChild(section);
    
     //creating a div for items inside the section and appending it to div and setting class (landing__conatainer) identical to other sections
     const div= document.createElement('div');
     section.appendChild(div);
     div.setAttribute("class","landing__container");
    
     //creating and adding heading and a paragraph to the div recently created
     const headingTwo = document.createElement('h2');
     headingTwo.textContent="Section "+numberOfSections;
     div.appendChild(headingTwo);
     const paragraph= document.createElement('p');
     paragraph.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
     div.appendChild(paragraph);
}

//Using scrollIntoView to scroll to the appropriate section by clicking on it in the nav bar!
function scroll(){
    //taking <a> Elements in NavBar
    const links=document.querySelectorAll('.link');
    //if a link is clicked it goes smoothly to the appropriate section
    links.forEach(item => {
        item.addEventListener("click",()=>{
            let element = document.getElementById(item.getAttribute("data-link"));
            element.scrollIntoView({behavior:"smooth", block:"start"});
        })
    });
}

//A Function To Create More Sections
function createNav(number,idName){
    //checking wehether its for mobile or desktop .
    if(idName==="mobileMenu"){
        //crating a div element in the header to make a nav bar for a mobile in
        let header=document.querySelector('header');
        let div=document.createElement('div');
        header.appendChild(div);
        let ul = document.createElement('ul');
        div.appendChild(ul);
        //creating a <ul> element and seeting the class and id
        ul.classList.add("mobileMenu");
        ul.setAttribute("id","mobileMenu")
    }
    else{
        //id for desktop navbars
        idName= "navbar__list";
    }
 for (let i = 1 ; i<=number ; i++){
    let ul =document.getElementById(idName);
    //created four Li elements for the sections and appended them to the ul element selected
    let li= document.createElement('li');
    //list items class for desktop
    li.classList.add("list-items");
    ul.appendChild(li);
    //setting list items in mobile is different from the one on desktop for selection purposes
    if(idName==="mobileMenu"){
        li.classList.add("mobile-list");
    }
    //creating a hyperlink on those li elements to scroll over later and appended them to the li elements created
    let a = document.createElement('a');
    li.appendChild(a);
    //making a class for the hyper link which will be used later on  , and a data-link attribute with the name of the section
    a.setAttribute("class","link");
    a.setAttribute("data-link","section"+ i);
    //setting the text written on items in the navbar inside the <a> element which is in the <li> element
    a.textContent= "Section "+ i;
    //Styling
    li.style.margin ="10px";
    li.style.padding= "14px 16px";
    a.style.textDecoration="none";
    
 }
}

function activeClass(){
    window.addEventListener('scroll', () => {
        // loop through each section with foreach()
        //used the sections global variable declared after creating sections
        sections.forEach( section => {
          // get px distance from top from getBoundingClientRect
          const top = section.getBoundingClientRect().top;
    
          //add active class to class list if you are in the class
          if (top > -400 && top < 150) {
              //adding the class
            section.classList.add('your-active-class');
            //selecting the heading to select the text
            div = section.firstElementChild;
            h2=div.firstElementChild;
            //style the text to be yellow if in range
            h2.style.color ="#ffff00";
            //making the navigating item for the section highlight while being in the section
            let listItems = document.querySelectorAll(".list-items");
            listItems.forEach((item)=>{
                //selecting the <a> element of the item (<li>)
                let linkItems= item.firstElementChild;
                //making a condition if the data attribute of the section is equal to the text content of the navbar item 
                if(section.getAttribute("data-nav") === linkItems.textContent){
                    //change the color and background of the nav item by adding a class in css file i made myself
                    item.classList.add("active-list-link");
                    linkItems.classList.add("active-list-link");  
                    
                }
                
            })
            
          // if its not the section , remove the class from the classlist
          } else {
              //removing the active class
            section.classList.remove('your-active-class');
            div = section.firstElementChild;
            h2=div.firstElementChild;
            //the text of section should return to normalif out of range
            h2.style.color ="#fff";
            let listItems = document.querySelectorAll(".list-items");
            listItems.forEach((item)=>{
                let linkItems= item.firstElementChild;
                if(section.getAttribute("data-nav") === linkItems.textContent){
                    item.classList.remove("active-list-link");
                    linkItems.classList.remove("active-list-link");
                }
            })
          }
        });
      });
    }

    function mobileMenu(){
        //making div conatining the icon and the actual menu
        let header=document.querySelector("header");
        let mobileDiv=document.createElement('div');
        header.appendChild(mobileDiv);
        mobileDiv.classList.add("menu-icon");
        createNav(sections.length,"mobileMenu");
        let menuIcon=document.createElement('div');
        menuIcon.classList.add("icon");
        mobileDiv.appendChild(menuIcon);
        //bars of icon
        for(let i = 1 ; i<=3;i++){
            let bars = document.createElement("div");
            bars.classList.add("bar"+i);
            menuIcon.appendChild(bars);
        }
        // this function slides the menu out to appear
        function navSlide() {
            const menuIcon = document.querySelector(".menu-icon");
            const nav = document.querySelector("#mobileMenu");
            menuIcon.addEventListener('click',()=>{
                nav.classList.toggle('nav-active');
            })
        } 
        navSlide();
        }
//calling this function creates a new section
for (let i = 0 ; i<4;i++){
    createSection();
}
//taking all the sections and declaring here so it contains all the  created sections.
const sections = document.querySelectorAll('section');
mobileMenu();
// makes sure the nav always updates its contents
createNav(sections.length);
activeClass();
scroll();