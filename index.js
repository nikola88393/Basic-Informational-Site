const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.send(`Params: ${req.params}; Query: ${req.query}`);
});

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact-me", text: "Contact me" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users, title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links, users: users, title: "About" });
});
app.get("/contact-me", (req, res) => {
  res.render("contact-me", { links: links, users: users, title: "Cotact" });
});
app.use((req, res) => {
  res.status(404).render("404", { links: links, users: users, title: "404" });
});

app.listen(8080, () => {
  console.log("listening to port 8080");
});
