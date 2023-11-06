import PromoHeading from "./PromoHeading";

const data = {
    heading: "99% off all items!",
    callToAction: "Something make some sense."
}
function Promo(){
    return(
       <div>
        <PromoHeading heading={data.heading} callToAction={data.callToAction} />
       </div>
    )
}


export default Promo;