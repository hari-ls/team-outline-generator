// // const { members } = require("./members");

// const members = [
//   {
//     name: "Harshit Shah",
//     position: "Manager",
//     details: { id: "1", email: "hari@logicsync.com.au", officeNumber: "1" },
//   },
//   {
//     name: "John Doe",
//     position: "Engineer",
//     details: { id: "2", email: "john@logicsync.com.au", github: "git-john" },
//   },
//   {
//     name: "Jade Black",
//     position: "Intern",
//     details: { id: "3", email: "jade@logicsync.com.au", school: "Uni SA" },
//   },
// ];

const memberCard = (obj) => {
  let { name, position } = obj;
  // check member type and initiliase layout sections
  if (position === "Manager") {
    let { id, email, officeNumber } = obj.details;
    console.log(name, position, id, email, officeNumber);
    return `    
            <div class="basis-3/12 p-4">
                <div class="rounded shadow-xl ring-1 ring-gray-900/5">
                    <div class="bg-cyan-900 p-4 rounded-t text-white">
                        <h2 class="text-3xl font-semibold">${name}</h2>
                        <p class="text-xl mt-2"><i class="fa-solid fa-mug-hot"></i> Manager</p>
                    </div>
                    <div class="p-4">
                        <ul class="divide-y divide-slate-50 rounded bg-slate-200">
                            <li class="p-2">ID: ${id}</li>
                            <li class="p-2">Email: <a class="text-blue-800" href="mailto:${email}">${email}</a></li>
                            <li class="p-2">Office Number: ${officeNumber}</li>
                        </ul>
                    </div> 
                </div>
            </div>`;
  } else if (position === "Engineer") {
    let { id, email, github } = obj.details;
    console.log(name, position, id, email, github);
    return `
            <div class="basis-3/12 p-4">
                <div class="rounded shadow-xl ring-1 ring-gray-900/5">
                    <div class="bg-cyan-900 p-4 rounded-t text-white">
                        <h2 class="text-3xl font-semibold">${name}</h2>
                        <p class="text-xl mt-2"><i class="fa-solid fa-glasses"></i> Engineer</p>
                    </div>
                    <div class="p-4">
                        <ul class="divide-y divide-slate-50 rounded bg-slate-200">
                            <li class="p-2">ID: ${id}</li>
                            <li class="p-2">Email: <a class="text-blue-800" href="mailto:${email}">${email}</a></li>
                            <li class="p-2">GitHub: <a class="text-blue-800" href="https://github.com/${github}" target="_blank">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
  } else if (position === "Intern") {
    let { id, email, school } = obj.details;
    console.log(name, position, id, email, school);
    return `
            <div class="basis-3/12 p-4">
                <div class="rounded shadow-xl ring-1 ring-gray-900/5">
                    <div class="bg-cyan-900 p-4 rounded-t text-white">
                        <h2 class="text-3xl font-semibold">${name}</h2>
                        <p class="text-xl mt-2"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                    </div>
                    <div class="p-4">
                        <ul class="divide-y divide-slate-50 rounded bg-slate-200">
                            <li class="p-2">ID: ${id}</li>
                            <li class="p-2">Email: <a class="text-blue-800" href="mailto:${email}">${email}</a></li>
                            <li class="p-2">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
  }
};

const createLayout = (arr) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <header class="w-screen text-center bg-cyan-600 border-b-4 border-cyan-900 py-8">
        <h1 class="text-5xl text-white font-semibold">My Team</h1>
    </header>
    <main class="container mx-auto max-w-screen-xl py-8 px-4">
        <!-- Members section -->
        <section class="flex flex-row flex-wrap justify-center space-x-1">
            ${arr.map((each) => memberCard(each)).join("\n")}
        </section>
    </main>

</body>

</html>`;

// console.log(createLayout(members));

module.exports = createLayout;
