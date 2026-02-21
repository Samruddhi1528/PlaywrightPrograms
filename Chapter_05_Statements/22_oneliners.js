if ("hello") { console.log("Valid result"); } // "hello" -> true
if (2) { console.log("Valid result"); } // 2 -> true
if ([]) { console.log("Valid result"); } // [] -> true
if ({}) { console.log("Valid result"); } // {}-> true

if (0) { console.log("Valid result"); } // 0 -> false
if ("") { console.log("Invalid result"); } // "" -> false