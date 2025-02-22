export function ErrorSetter(previousErrors,setter,nameOfProperty,valueOfProperty){
    setter({
        ...previousErrors,
        [nameOfProperty]:valueOfProperty
       });
       return;
}


