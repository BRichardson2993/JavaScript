//SNOBNUS
// string
// number
// object
// boolean
// null
// undefined
// symbol



/* Objects */

    const person = {
        first: 'brian',
        last: 'richardson',
        age: 51
    };

    // order doesn't matter in an object. If you need it to, use an array

/* Symbols */

    // For now, just know that it's a way to do unique properties...prolly won't use these very much...

/* Null and Undefined */

    // expressions of 'nothing'

    // UNDEFINED

        // let dog;
        // console.log(dog);

            // here the console will return 'undefined' because it was never given a value ( "set", or "instantiated")

        // now, define it:
        let dog;
        dog = 'snickers';
      //  console.log(dog);
   
    // NULL

        // null is a value of nothing, where undefined is when a varible with no value has been set.
                
        let somethingUndefined;
        const somethingNull = null;

        // Wes's example of a "Mononymous Person"

        const cher = {
            first: 'cher'
        };

        // console will yield "undefined" at any attempt to access a last name here

        const teller = {
            first: "Raymond", // Teller USED to have a first name,
            last: "Teller"
        }

        //THEN teller decides he want's a mononymous pseudonym:
        teller.first = 'Teller';
        teller.last = null;

        // The difference here being that Teller's last got set to null, where as Cher's last never existed...


    // BOOLEANs and Equality

       let isDrawing = false; // a 'flag' variable that can only be true or false
       const age = 18;
       const ofAge = age > 19;
      // console.log(ofAge);

       


    


    








