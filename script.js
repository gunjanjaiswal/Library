const arrayBook=[]

//Constructor for a book
function Book(id,name,author,pages,status) {
    this.id=id;
    this.name=name;
    this.author=author;
    this.pages=pages;
    if(status=='yes'){
        this.status="read";
    }

    else{
        this.status="yet to read";
    }
    
}

//Function to add a new book object into the array
function bookArray(name,author,pages,status) {
    let id=self.crypto.randomUUID();
    let newBook=new Book(id,name,author,pages,status);
    arrayBook.push(newBook);
    display();
}

//Function to display all the books in arrayBook
function display() {
    //for (let i = 0; i < arrayBook.length; i++) {
        let book = arrayBook[arrayBook.length-1];
        let tile=document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('id',book.id);

        let name=document.createElement('div');
        name.classList.add('name');
        name.textContent=`Name: "\n" ${book.name}`;

        let author=document.createElement('div');
        author.classList.add('author');
        author.textContent=`Author: ${book.author}`;

        let pages=document.createElement('div');
        pages.classList.add('pages');
        pages.textContent=`Number of pages: ${book.pages}`;

        let status=document.createElement('div');
        status.classList.add('status');
        status.textContent=`Status: ${book.status}`;

        let deleteButton=document.createElement('button');
        deleteButton.classList.add('delete')
        deleteButton.textContent="Delete"
        deleteButton.addEventListener('click',(e)=>{
            const parentElement=e.target.parentElement;
            let bookId = parentElement.getAttribute('id');
            let index = arrayBook.findIndex((book) => {
                return book.id === bookId;
            });

            //console.log(index)
            arrayBook.splice(index,1)
            parentElement.remove();
        })

        let toggle=document.createElement('button')
        toggle.classList.add('toggle')
        toggle.textContent="Read"

        tile.append(name,author,pages,status,deleteButton,toggle);
        let container=document.querySelector('.container');
        container.appendChild(tile);
        
    //}
}

const newBook=document.querySelector(".addnew")
const dialog=document.querySelector("dialog")
newBook.addEventListener("click",()=>{
    dialog.showModal();
})

const addbtn= document.querySelector("#addbutton")
addbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const form=document.querySelector("form");
    let name=form.querySelector('#name').value;
    //console.log(name)
    let author=form.querySelector('#author').value;
    let pages=form.querySelector('#pages').value;
    let status=form.querySelector('input[name=read]:checked').value;
    console.log(status)
    bookArray(name,author,pages,status);
    form.reset()
    dialog.close();


})

bookArray('No Longer Human','Osamu Dazai','176')
