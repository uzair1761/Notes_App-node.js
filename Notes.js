const { default: chalk } = require('chalk');
const fs =require ('fs')




const addNotes = (title ,body)=>{
   const notes=  LoadNotes();

   const duplicateNotes = notes.filter((note)=>{
   return  note.title   === title
   })
if (duplicateNotes.length === 0){
    notes.push({
        title:title,
        body :body
       })
       
       saveNotes(notes)
    }
    else{
        console.log('all ready assigned')
    }
}
   

const saveNotes = (notes)=>{
    const dataJson =JSON.stringify(notes);
    fs.writeFileSync('Notes.json',dataJson)
   
 }

const LoadNotes = function (){
    try{
      
    const dataBuffer =  fs.readFileSync('Notes.json');
    const  dataJson =  dataBuffer.toString();
    return JSON.parse(dataJson)
    }
    catch(e){
       return []
    }


   
}

const removeNotes = (title)=>{
    const  notes  = LoadNotes();
    
  const notesToKeep =notes.filter(function(note){
    return note.title  !== title
  })
   if (notes.length >  notesToKeep.length){
    console.log(chalk.green.inverse('sucess'))
    saveNotes(notesToKeep);
   }
   else{
    console.log(chalk.red.inverse('note note found'))
   }
 

}

const ListNotes =(title)=>{
    const notes=  LoadNotes();

    console.log(chalk.blueBright.inverse('your notes'));
    notes.forEach((note)=>{
    console.log(note.title)
    })

}
const ReadNotes =(title,body)=>{
    const notes =LoadNotes();
   const note= notes.find((note)=>{
     return note.title === title
    })
    if(note){
       console.log(chalk.bgBlueBright.inverse(note.title)) 
        console.log(note.body)
    }
    else{
       console.log(chalk.red.inverse('no node found')) 
    }
}





module.exports= {
    addNotes : addNotes ,
    removeNotes :removeNotes,
    ListNotes:ListNotes,
    ReadNotes:ReadNotes
}