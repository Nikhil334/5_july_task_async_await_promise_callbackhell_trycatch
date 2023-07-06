const Printgreeting = ()=>{
    setTimeout(()=>{
       console.log("hello, good morning");
       setTimeout(()=>{
            console.log("hello, good afternoon");
            setTimeout(()=>{
                console.log("hello, good evening");
                setTimeout(()=>{
                    console.log("hello, good night")
                },1000);
            },1000);
       },3000)
    },1000);
}

Printgreeting();