module.exports=(first,...arg)=>{
        return arg.reduce((accum,el)=>{
            if(el!==0)
            {
            return accum/el;
            }
            else{
                throw "don't divid by zero";
            }
        },first);
    }