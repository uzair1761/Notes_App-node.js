const Note = require('./Notes.js')
const validator =require('validator')
const chalk =require('chalk')
const yargs =require ('yargs')





yargs.command({
    command:'add',
    describe:'this will add things to list',
    builder :{
        title :{
              describe:'Notes title',
              demandOption:true,
              type:'string'
        },
        body :{
                describe :'Note Body',
                demandOption:true,
                type:'string'
        }

    },
   

    handler(argv){
        Note.addNotes(argv.title ,argv.body)
    }
})


yargs.command({
    command:'remove',
    describe:'this will remove things to list',
    bulider:{
        title:{
            describe :' Notes remove',
            demandOption:true,
            type:'string'
        }
    },
   handler(argv){
        Note.removeNotes(argv.title)
    }
})


yargs.command({
    command:'read',
    describe:'this will read things to list',
    builder:{
        title:{
        describe:'reading',
        demandOption:true,
        type:'string'}
      
    },
    handler(argv){
       Note.ReadNotes(argv.title)
    }
})


yargs.command({
    command:'List',
    describe:'this will list item',
    handler(argv){
        Note.ListNotes(argv.title);
    }
})




yargs.parse()
