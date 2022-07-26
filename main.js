let data = [
    {
        "type": "Free",
        "price": 0,
        "email": `<span><i class="fa-solid fa-check"></i></span> Up to 100 emails per day`,
        "contact": `<span><i class="fa-solid fa-check"></i></span> Unlimited contacts`,
        "support": "",
        "advantage": ""
    },
    {
        "type": "Standard",
        "price": 99,
        "email": `  <span><i class="fa-solid fa-check"></i></span> Up to 100,000 emails per day`,
        "contact": ` <span><i class="fa-solid fa-check"></i></span> No daily limits`,
        "support": ` <span><i class="fa-solid fa-check"></i></span> Email support `,
        "advantage": ""
    },
    {
        "type": "Enterprise",
        "price": 399,
        "email": `<span><i class="fa-solid fa-check"></i></span> Up to 1,000,000 emails per day `,
        "contact": `<span><i class="fa-solid fa-check"></i></span> Marketing automation`,
        "support": ` <span><i class="fa-solid fa-check"></i></span> Telephone support`,
        "advantage": `<span><i class="fa-solid fa-check"></i></span> Landing page `
    }
]

const mapping = (value) => {
    $(".row").html("")
    value.map((v, i) => {
        let col = `
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card py-4 px-4">
                            <h5>${v.type}</h5>
                            <h3 id="zero">
                                <span class="dollar">$</span>
                                ${v.price}
                                <span id="mo">/mo</span>
                            </h3>
                            
                                <div class="plar text-start mt-3">
                                    <p class="m-1">
                                        ${v.email}
                                    </p>
                                    <p class="m-1">
                                        ${v.contact}
                                    </p>
                                    <p class="m-1">
                                        ${v.support}
                                    </p>
                                    <p class="m-1">
                                        ${v.advantage}
                                    </p>
                                </div>
                                <button class="btn btn-outline-dark mx-5" onclick="Del(${i})" id="Delete">Delete</button>
                        </div>
                    </div>
        `
        $(".row").append(col)
    })
}
mapping(data);

const Del=(index)=>{
    data.splice(index,1);
    mapping(data);
}