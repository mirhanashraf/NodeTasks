module.exports=(first,...arg)=>{
        return arg.reduce((accum,el)=>{
            return accum-el;
        },first);
    }