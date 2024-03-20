const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL connected");
  }
});

const insertSubmission = (post) => {
  return new Promise((resolve, reject) => {
    console.log("Post:", post); // Log the post object

    if (Object.keys(post).length === 0) {
      reject(new Error("Post object is empty"));
    } else {
      db.query("INSERT INTO `submissions` SET ?", post, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }
  });
};
const getSubmissions = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM submissions ORDER BY id DESC", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = { insertSubmission, getSubmissions, db };
