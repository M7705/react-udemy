import React from "react"

let date = new Date();
let currentYear = date.getFullYear();
console.log(date);
console.log(currentYear);

function Footer() {
    return (
        <p className = "footer footer-font">
            Copyright &copy; {currentYear}
        </p>

    )
}

export default Footer;