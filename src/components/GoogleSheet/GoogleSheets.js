const { GoogleSpreadsheet } = require("google-spreadsheet");

const creds = require("./client_secret.json");
const doc = new GoogleSpreadsheet(
  "10oYFpqtvlSr79jQ4qBqGo1Ng1Z11nb3EmZp5s84ShYA"
);

// async function accessSpreadsheet() {
//   await doc.useServiceAccountAuth(creds);
//   await doc.loadInfo();

//   const sheet = doc.sheetsByIndex[0];
//   // console.log(sheet);
//   return sheet;
//   // const rows = await sheet.getRows(); // can pass in { limit, offset }
//   // console.log(rows);
// }

// export async function getRows() {
//   await doc.useServiceAccountAuth(creds);
//   await doc.loadInfo();

//   const sheet = doc.sheetsByIndex[0];
//   const rows = await sheet.getRows(); // can pass in { limit, offset }
//   return rows;
// }

// export async function addRows(answers) {
//   console.log(answers);
//   await doc.useServiceAccountAuth(creds);
//   await doc.loadInfo();

//   let questionsText = [];
//   questions.forEach((question) => {
//     questionsText.push(question.text);
//   });
//   console.log([...questionsText]);
//   // const sheet = await doc.addSheet({ headerValues: [...questionsText] });
//   const sheet = doc.sheetsByIndex[1];

//   let answersAndQuestion = {};
//   let i = 0;
//   answers.forEach((answer) => {
//     answersAndQuestion[questionsText[i]] = answer;
//     i++;
//   });
//   console.log(answersAndQuestion);
//   const newRow = await sheet.addRow(answersAndQuestion);

//   // // const sheet = await doc.addSheet({ headerValues: ["name", "email"] });
//   // const sheet = doc.sheetsByIndex[1];
//   // // append rows
//   // const larryRow = await sheet.addRow({
//   //   name: "Larry ygjbhbjhb",
//   //   email: "larry@google.com"
//   // });
//   // const moreRows = await sheet.addRows([
//   //   { name: "Sergey Brin", email: "sergey@google.com" },
//   //   { name: "Eric Schmidt", email: "eric@google.com" }
//   // ]);
//   // // read rows
//   // const rows = await sheet.getRows(); // can pass in { limit, offset }
//   // // read/write row values
//   // console.log(rows[0].name); // 'Larry Page'
//   // rows[1].email = "sergey@abc.xyz"; // update a value
//   // await rows[1].save(); // save updates
//   // await rows[1].delete(); // delete a row
// }
 
export async function addArrayToNewSheet(array, headLine) {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  
 headLine=headLine +"-" +array[1].details+ "-"+ array[2].details 
  const sheet = await doc.addSheet({
    headerValues: ["index", "quatsion", "rate", "details", "found"]
  
  ,title: headLine 
})

  let table = [];
  array.forEach((element) => {
    let index;

    let row = {
      rate: element.rate,
      details: element.details,
      found: element.found
    };
    table.push(row);
  });

  const moreRows = await sheet.addRows(table);
}

export async function getSheets(array) {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();

  return doc;
}
