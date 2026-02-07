// function autoMailer(to, sub, body){
//     console.log(`mail has been sent to ${to} with subject ${sub} and body ${body}`);
// }
// autoMailer("anilt0234@gmail.com", "Order details", "Please find the attached order details.");






function autoMailer(to){
    return function(sub) {
        return function(body) {
            console.log(`mail has sent to ${to} with subject ${sub} and body ${body}`);
        }
    }
}

autoMailer("anilt0234@gmail.com")("Order details")("order placed.");
