const EMPLOYEE_API_URL = "https://dummyjson.com/users"

export async function getEmployees() {
    const response = await fetch(EMPLOYEE_API_URL);
    if (!response.ok) {
        throw new error("Failed to fetch employees");
    }
    return await response.json();

}
 