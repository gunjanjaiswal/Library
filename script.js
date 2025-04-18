const arrayBook=[]

//Constructor for a book
function Book(id,name,author,pages,status) {
    this.id=id;
    this.name=name;
    this.author=author;
    this.pages=pages;
    if(status){
        this.status="read";
    }

    else{
        this.status="yet to read";
    }
    
}

//Function to add a new book object into the array
function bookArray() {
    let name;
    let author;
    let pages;
    let status;
    let id=self.crypto.randomUUID();

    let newBook=new Book(id,name,author,pages,status);
    arrayBook.push(newBook);
}

//Function to display all the books in arrayBook
function display() {
    for (let i = 0; i < arrayBook.length; i++) {
        let book = arrayBook[i];
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

        tile.append(name,author,pages,status);
        
    }
}