module.exports=(paramters)=>{
    return paramters.map(el=>{

        if(isNaN(el))
        {
            //console.log('err');
            throw "don't enter characters";
        }
        return Number(el);
    })
}