import dotenv from "dotenv";
dotenv.config();

import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel, connectDB } from "./database/db.js";
import { UserMiddleware } from "./middleware/middleware.js";
import { random } from "./utils/utils.js";

const app = express();
app.use(express.json());

// Initialize database connection before starting server
connectDB().catch((err) => {
  console.error("Failed to connect to database:", err);
  process.exit(1);
});

app.post("/api/v1/signup", async (req, res) => {
  // add zod validation and hashing the password
  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User signed up..!",
    });
  } catch (e) {
    res.status(411).json({
      message: "User Already Exist",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserModel.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_PASSWORD!,
    );
    res.json({
      token,
    });
  } else {
    res.status(401).json({
      message: "Incorrect Credentials",
    });
  }
});

app.post("/api/v1/content", UserMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.link;

  await ContentModel.create({
    link,
    //@ts-ignore
    type,
    //@ts-ignore
    userId: req.userId,
    tags: [],
  });

  return res.json({
    message: "Content Added",
  });
});

app.get("/api/v1/content", UserMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username");
  res.json({
    content,
  });
});

app.delete("/api/v1/content", UserMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    contentId,
    // @ts-ignore
    userId: req.userId,
  });
  res.json({
    message: "Content Deleted",
  });
});

app.post("/api/v1/brain/share", UserMiddleware,async (req, res) => {
  const share = req.body.share ;
  if(share){
    const existingLink = await LinkModel.findOne({
      // @ts-ignore
      userId : req.userId
    })
    if(existingLink){
      res.json({
        hash:existingLink.hash
      })
    }

  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userId :req.userId
    })
    return res.json({ message: "Shareable link removed" })
  }
});

app.get("/api/v1/brain/:shareLink",async (req, res) => {
  const hash = req.params.shareLink

  const link = await LinkModel.findOne({
    hash
  })
  if (!link){
    res.status(411).json({
      message : "Sorry Incorrect Input"
    })
    return
  }
  //@ts-ignore
  const content = await ContentModel.find({
    userId : link.userId
  })
  const user = await UserModel.findOne({
    userId : link.userId
  })

  if (!user){
    res.status(411).json({
      message : "User not Found ideally this error should not be there"
    });
    return;
  }

  res.json({
    username : user.username ,
    content : content
  })

});

// Start server after database is ready
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

