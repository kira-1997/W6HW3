    function api(){
    let key='cUDCNO0NdhgAusGr2ukYXGQgpbzyksTz'
      fetch(`https://api.nytimes.com/svc/books/v3/lists/picture-books.json?api-key=${key}`,{
      method: "get"
       })
      
       .then(response=>response.json())
       .then(data =>{
        data.results.books.map((book)=>{
        let image=book.book_image
        let title=book.title
        let author=book.author
        let description=book.description
        fetch("https://65524db75c69a7790329dc3e.mockapi.io/Books", {
        method: 'POST',
        body: JSON.stringify({
        image,
        title,
        author,
        description
       }),
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       },
       })
       .then((response) => response.json())
       .then((json) => console.log(json));       

        })})
      }
////////////////////////////////////////////////////////////////////////////////////

  
  function myAPI(){
         
    fetch("https://65524db75c69a7790329dc3e.mockapi.io/Books")
              .then((response) => response.json())
              .then((data) =>{
          data.map((book)=>{
             let getData=document.getElementById('container')
              let res=document.createElement('div')
              res.className="box"
              let text=document.createElement('div')
              text.className='text'
              let pic=document.createElement('img')
              pic.src=book.image
              let title=document.createElement('h4')
              title.innerHTML=book.title
              let author=document.createElement('h6')
              author.innerHTML='By: '+book.author
              let des=document.createElement('p')
              des.innerHTML=book.description
              let btn=document.createElement('button')
              btn.innerHTML='Delete';
              btn.className='delete';
              let userName=document.getElementById("user-name")
              userName.innerHTML='Welcome '+localStorage.getItem("UserName")
              if(localStorage.getItem("UserName")=="admins" ){
                 btn.style.display="flex"
              }
              

              res.appendChild(pic)
              text.appendChild(title)
              text.appendChild(author)
              text.appendChild(des)
              text.appendChild(btn)
              res.appendChild(text)
              getData.appendChild(res)
              btn.addEventListener('click', ()=>{
                deleteItem(book.id)
            })
            
            })
        })
          
        }

  function deleteItem(id){
    fetch(`https://65524db75c69a7790329dc3e.mockapi.io/Books/${id}`,{
      method: "DELETE"
    })
       .then(response=>response.json())
       .then(data =>console.log(data)) 
        
        myAPI()
     }




 myAPI()


