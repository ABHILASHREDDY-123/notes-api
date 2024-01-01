const express = require("express");
const appRouter = express.Router();
const Notes = require("../Schemas/noteSchema");
const { authValidator } = require("../Validators/authValidator");
const {
  postValidator,
  putValidator,
} = require("../Validators/customValidators");
appRouter.get("/", async (req, res) => {
  const notes = await Notes.find({});
  res.send({ notes });
});

appRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const note = await Notes.findById(id);
  res.send({ note });
});

appRouter.post("/", postValidator, authValidator, async (req, res) => {
  const note = new Notes(req.body);
  note.author = req.user._id;
  try {
    await note.save();
    res.send({ message: "Successfully posted" });
  } catch (error) {
    res.send({ error });
  }
});

appRouter.put("/:id", putValidator, authValidator, async (req, res) => {
  const id = req.params.id;
  const note = await Notes.findById(id);
  if (note.author !== req.user._id) {
    res.send({ error: "Unauthorized" });
  } else {
    note.content = req.body.content;
    try {
      await note.save();
      res.send({ message: "Successfully updated" });
    } catch (error) {
      res.send({ error });
    }
  }
});

appRouter.delete("/:id", authValidator, async (req, res) => {
  const id = req.params.id;
  const note = await Notes.findById(id);
  if(!note){res.send({error:"No note exists with this id"});return ;}
  if (note.author !== req.user._id) {
    res.send({ error: "Unauthorized" });
  }
  try {
    await Notes.deleteOne({ _id: id });
    res.send({ message: "Successfully deleted" });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = appRouter;
