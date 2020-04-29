'use strict';

module.exports = function(Image) {

   const fs = require('fs');
    Image.FileUpload = function(file,name, cb){
            console.log('fichero',file)
            console.log('nombreee',name)
        fs.writeFile('./files/images/'+name,file,'base64',function (err) {});
        cb(null,'ALGO'+name);
    }

    Image.remoteMethod('FileUpload', {
        accepts:[ {arg: 'file', type:'any'},
        {arg: 'name', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
  });

  Image.FileUnlink = function(file, cb){
    console.log('fichero')
    fs.unlinkSync('./files/images/'+file);
    cb(null,'ALGO');
}

    Image.remoteMethod('FileUnlink', {
        accepts:[ {arg: 'file', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
    });
};