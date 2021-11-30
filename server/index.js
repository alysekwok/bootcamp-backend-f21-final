// const express = require('express');

import config from "./config";
const mongoose = require("mongoose");

export default async () => {
  if (mongoose.connections[0].readyState) return

  await mongoose
    .connect(config.dbUrl, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      dbName: process.env.DB_NAME,
    })
    .catch((e) => {
      console.error("Error connecting to database.")

      throw e
    })
}





