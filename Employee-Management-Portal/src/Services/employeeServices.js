const EMPLOYEE_API_URL = "https://dummyjson.com/users"

export async function getEmployees() {
    const response = await fetch(EMPLOYEE_API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }
    return await response.json();

}

export async function addEmployee(employee) {
    const response = await fetch(`${EMPLOYEE_API_URL}/add`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(employee),
    });
    if (!response.ok) {
        throw new Error("Failed to add employee");
    }
    return await response.json();
}

export async function getEmployeeById(id)
{
    const response = await fetch(`${EMPLOYEE_API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch employee details");
    }
    return await response.json();
} 

export async function updateEmployee(id, employee) {
    const response = await fetch(`${EMPLOYEE_API_URL}/${id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    });
    if (!response.ok) {
        throw new Error("Failed to update employee");
    }
    return await response.json();
}


export async function deleteEmployee(id) {
    const response = await fetch(`${EMPLOYEE_API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete employee");
    }
    return await response.json();
}