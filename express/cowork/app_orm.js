const { request } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models/index");
const { Member } = db;

app.get("/api/members", async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll({ where: { team: team } });
    res.send(teamMembers);
  } else {
    // Model-related commands return promise
    const members = await Member.findAll();
    res.send(members);
  }
  // res.send(members);
});

app.get("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const member = await Member.findOne({ where: { id: id } });
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: "There is no such member" });
  }
});

//
app.post("/api/members", async (req, res) => {
  const newMember = req.body;
  const member = Member.build(newMember);
  await member.save();
  res.send(newMember);
});

// app.put("/api/members/:id", async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   const result = await Member.update(newInfo, { where: { id: id } });
//   if (result[0]) {
//     res.send({ message: `${result[0]} row(s) affected` });
//   } else {
//     res.status(404).send({ message: "There is no member with the id" });
//   }
// });

app.put("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = await Member.findOne({ where: { id } });
  if (member) {
    Object.keys(newInfo).forEach(prop => {
      member[prop] = newInfo[prop];
    });
    await member.save();
    res.send(member);
  } else {
    res.status(404).send({ message: "There is no member with the id!" });
  }
});

// app.delete('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const member = await Member.findOne({ where: { id } });
//   if (member) {
//     const result = await member.destroy();
//     res.send({ message: `1 row(s) deleted` });
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });
app.delete("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCount = await Member.destroy({ where: { id: id } });
  if (deletedCount) {
    res.send({ message: `${deletedCount} row(s) deleted` });
  } else {
    res.status(404).send({ message: "There is no member with the id" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening...");
});
