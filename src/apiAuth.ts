import { NextFunction, Request, Response } from "express";
import { UserProps, users } from "./initialData";

interface UsageProps extends UserProps {}

const getAPIKey = () => {
  return [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join();
};

const createUser = (_username: string, req: Request) => {
  let today = new Date().toISOString().split("T")[0];
  let user = {
    _id: Date.now(),
    api_key: getAPIKey(),
    username: _username,
    usage: [{ date: today, count: 0 }],
  };

  console.log("add user");
  users.push(user);
  return user;
};

const authenticateKey = (req: Request, res: Response, next: NextFunction) => {
  let api_key = req.header("x-api-key");
  if (api_key === undefined) {
    res.status(400).json({ status: "Failed", Message: "API key is missing." });
  }
  let account = users.find((user) => user.api_key === api_key);
  if (account) {
    let today = new Date().toDateString().split("T")[0];
    let usageCount = account.findIndex(
      (day: { date: string }) => day.date === today
    );
  }
};
