import React from 'react'

export default function useModelProperty(model, propertyName){  
    const [value, setValue]=React.useState(model[propertyName]);
    React.useEffect( function(){  
              function obs(){
                setValue(model[propertyName]);
              }
              model.addObserver(obs);                               
              return function(){ model.removeObserver(obs); }        
           }, [model]) ;  
    return value;
}