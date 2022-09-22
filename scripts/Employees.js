import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//function that finds the number of products an employee has sold 
const employeeOrders = (employee) => {
    let completedOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            completedOrders++
        }
    }
    return completedOrders
}



//event listener function triggered by clicking on employee that displays employee sales
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    let numberOfOrders = employeeOrders(employee)
                    window.alert(` ${employee.name} sold ${numberOfOrders} items. `)
                }
            }
        }
    }
)