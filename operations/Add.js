module.exports=(...arg)=>{
        return arg.reduce((accum,el)=>{
             return accum+el;
         },0);
     }