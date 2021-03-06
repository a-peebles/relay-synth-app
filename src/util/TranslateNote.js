let notes = new Map([
    [24,'c4'],[25,'c#4'],[26,'d4'],[27,'d#4'],[28,'e4'],[29,'f4'],
    [30,'f#4'],[31,'g4'],[32,'g#4'],[33,'a4'],[34,'a#4'],[35,'b4'],
    [36,'c5'],[37,'c#5'],[38,'d5'],[39,'d#5'],[40,'e5'],[41,'f5'],
    [42,'f#5'],[43,'g5'],[44,'g#5'],[45,'a5'],[46,'a#5'],[47,'b5'],
    [48,'c6'],[49,'c#6'],[50,'d6'],[51,'d#6'],[52,'e6'],[53,'f6'],
    [54,'f#6'],[55,'g6'],[56,'g#6'],[57,'a6'],[58,'a#6'],[59,'b6'],
    [60,'c7']
    ]
);

const translateNote = (noteNumber) => {
   return notes.get(noteNumber);
}

module.exports.translateNote = translateNote;