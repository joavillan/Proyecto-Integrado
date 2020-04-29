'use strict';

module.exports = function(Receta) {

    Receta.FileUnlink = function(file, cb){
        console.log('fichero')
        fs.unlinkSync('./files/images/'+file);
        cb(null,'ALGO'+name);
    }
    
    Receta.remoteMethod('FileUnlink', {
        accepts:[ {arg: 'file', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
    });

};
