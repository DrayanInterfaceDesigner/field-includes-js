let Checker = new FieldIncludes(['Fart', 'Old', 'Ass', 'Yolo', 'Frenemy']);

//check field
Checker.check('field', 'check', 'announce');

//check how many words
document.getElementById('check').addEventListener('click', ()=> {
    
    console.log('How many: ', Checker.many(document.getElementById('field').value))
})

//check in console
console.log('Have any? ', Checker.run(`The great fox is an fart old ass. She's my frenemy btw.`))