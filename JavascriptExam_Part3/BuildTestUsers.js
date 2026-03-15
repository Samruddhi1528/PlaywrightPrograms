/*Write a JavaScript function that receives two arrays: 
one with names and one with roles. 
Return a new array of user objects in the format `{ username, email, role }`. 
The username should be lowercase with spaces replaced by underscores,
and the email should use the domain `@playwrightbatch.com`.

Input:
names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
Output:
[{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]

 */
function buildTestUsers(names, roles) {
    let users = [];
    for (let i = 0; i < names.length; i++) {
        let username = names[i].toLowerCase().replace(" ", "_");
        let email = username + "@playwrightbatch.com";

        // Push an object (dictionary) into the array
        users.push({ username: username, email: email, role: roles[i] });
    }
    return users;
}

console.log(buildTestUsers(["Amit Kumar", "Neha Singh"], ["admin", "viewer"]));
