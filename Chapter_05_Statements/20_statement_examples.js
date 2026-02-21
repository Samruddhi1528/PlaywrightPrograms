let isLoggedIn = true;
let userRole = "editor";
/* app.vwo.com -> viewer, editor, admin
viewer -> limited access
editor -> can edit and view
admin -> can do all*/


if (isLoggedIn) {
    if (userRole === "viewer") {
        console.log("Viewer access");
    } else if (userRole === "editor") {
        console.log("Editor access");
    } else if (userRole === "admin") {
        console.log("Admin access");
    }
} else {
    console.log("User is not logged in");
}